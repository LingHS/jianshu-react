import React, { Component } from 'react';
import Header from './common/header';
import { Globalstyle } from './style';
// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <div className="App">
        <Globalstyle />
        <Header />
      </div>
    );
  }
}

export default App;
