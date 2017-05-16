import React, { Component } from 'react';
import './App.css';
import BooksListContainer from './containers/BooksListContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
      	<BooksListContainer />
      </div>
    );
  }
}

export default App;
