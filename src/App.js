import React, { Component } from 'react';
import Header from './common/header';
import { Globalstyle } from './style';
import { Fontstyle } from './statics/iconfont/iconfont';
// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <div className="App">
        <Globalstyle />
        <Fontstyle />
        <Header />
      </div>
    );
  }
}

export default App;
