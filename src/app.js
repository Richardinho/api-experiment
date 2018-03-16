import React, { Component } from 'react';
import { getBooks } from './books-service';
import getGithub from './github-service'; 
import Rx from 'rxjs/Rx';
import BooksComponent from './books-component';

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
          .mergeMap(book => Rx.Observable.fromPromise(getGithub(book)))
      })
      .subscribe((data) => {
        this.setState({
          items: this.state.items.concat(data)
        });
      });
  }

  render() {
    return (
      <BooksComponent books={this.state.items}/>
    )
  }
}
