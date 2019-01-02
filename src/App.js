import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Header from './common/header';
import { Globalstyle } from './style';
import { Fontstyle } from './statics/iconfont/iconfont';
import store from './store';
// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <div className="App">
        <Globalstyle />
        <Fontstyle />
        <Provider store={store}>
          <Header />
        </Provider>
      </div>
    );
  }
}

export default App;
