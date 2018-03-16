import getBooksEndpoint from './google-books-endpoint';


const filterBookResponse = (item) => {
  const volumeInfo = item.volumeInfo;
  return {
    title: volumeInfo.title,
    author: volumeInfo.authors[0],
    publisher: volumeInfo.publisher
  };

}

function getBooks(subject) {
  return fetch(getBooksEndpoint(subject))
    .then(response => response.json())
    .then(data => { 
      return data.items.map(filterBookResponse);
    });
}

export { getBooks };
