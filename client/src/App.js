import React, { Component } from 'react';

import BooksListContainer from './containers/BooksListContainer';
import SearchFormContainer from './containers/SearchFormContainer';

class App extends Component {
  render() {
    return (
      <div className="App container">
      	<SearchFormContainer />
      	<BooksListContainer />
      </div>
    );
  }
}

export default App;
