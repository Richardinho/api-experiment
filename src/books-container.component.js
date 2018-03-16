import React, { Component } from 'react';
import Rx from 'rxjs/Rx';
import { getBooks } from './books-service';
import getGithub from './github-service'; 
import BooksComponent from './books.component';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      items: []
    }
  }

  componentDidMount() {
  
    Rx.Observable.fromPromise(getBooks('javascript'))
      .flatMap(books => {
        return Rx.Observable
          .from(books)
          .mergeMap(book => Rx.Observable.fromPromise(getGithub(book)), (book, github) => { return { book, github}})
      })
      .subscribe(({ book, github}) => {
        this.setState({ 
          items: this.state.items.concat({
            book,
            github,
          })
        });
      });
  }

  render() {
    return (
      <BooksComponent items={this.state.items}/>
    )
  }
}
