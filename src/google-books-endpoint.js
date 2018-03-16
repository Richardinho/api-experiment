export default (subject, maxResults = 5) => (`https://www.googleapis.com/books/v1/volumes?q=${subject}&startIndex=0&maxResults=${maxResults}`);
