import React, { Component } from 'react';

import ContentContainer from './containers/ContentContainer';
import SearchFormContainer from './containers/SearchFormContainer';

class App extends Component {
  render() {
    return (
      <div className="App container">
      	<SearchFormContainer />
      	<ContentContainer />
      </div>
    );
  }
}

export default App;
