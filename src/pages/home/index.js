import React, { Component } from 'react';
import { HomeWrapper, HomeLeft, HomeRight } from './style';
import List from './components/List';
import Recommend from './components/Recommend';
import Topic from './components/Topic';
import Writer from './components/Writer';
// class Home extends Component {
//   render() {

//   }
// }
const Home = () => (
  <HomeWrapper>
    <HomeLeft>
      <img className="banner-img" alt="" src="//upload.jianshu.io/admin_banners/web_images/4603/d2b74e05eff3ede5eff7906f85d60ac2a93b4584.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
      <Topic />
      <List />
    </HomeLeft>
    <HomeRight>
      <Recommend />
      <Writer />
    </HomeRight>
  </HomeWrapper>
);
export default Home;
