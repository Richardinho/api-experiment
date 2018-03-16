function getEndpoint(book) {
  return `https://api.github.com/search/repositories?q=${book}`;
}

function filterGithubResponse(data) {
  return data.items.slice(0, 4).map(item => {
    return {
      name: item.full_name,
      description: item.description
    }
  });
}

export default book => {
  return fetch(getEndpoint(book.title))
    .then(response => response.json()) 
    .then(data => filterGithubResponse(data))
};
