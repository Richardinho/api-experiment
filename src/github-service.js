function getEndpoint(query) {
  return `https://api.github.com/search/repositories?q=${query}`;
}

function filterGithubResponse(data) {
  return {
    name: data.items[0].full_name
  }
}

export default query => {
  return fetch(getEndpoint(query.title))
    .then(response => response.json()) 
    .then(data => ({
      title: query.title,
      github: filterGithubResponse(data)
    }));

};
