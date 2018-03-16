import getBooksEndpoint from './google-books-endpoint';
import _ from 'lodash';


const whiteList = [
  'title',
  'authors',
  'description',
];

function getBooks(subject) {
  return fetch(getBooksEndpoint(subject))
    .then(response => response.json())
    .then(data => {
        return data.items.map(item => _.pick(item.volumeInfo, whiteList))
    });
}

export { getBooks };
