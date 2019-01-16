import React, { Component, ReactFragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './common/header';
import { Globalstyle } from './style';
import { Fontstyle } from './statics/iconfont/iconfont';
import store from './store';
import Home from './pages/home';
import Detail from './pages/detail';
import Login from './pages/login';
// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <div className="App">
        <Globalstyle />
        <Fontstyle />
        <Provider store={store}>

          <BrowserRouter>
            <div>
              <Header />
              <Route path="/" exact component={Home} />
              <Route path="/detail/:id" exact component={Detail} />
              <Route path="/login" exact component={Login} />
            </div>
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default App;
