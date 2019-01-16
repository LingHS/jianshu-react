import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  HomeWrapper, HomeLeft, HomeRight, BackTop,
} from './style';
// import { actionCreators } from './store';
import List from './components/List';
import Recommend from './components/Recommend';
import Topic from './components/Topic';
import Writer from './components/Writer';
import { actionCreators } from './store';

class Home extends PureComponent {

  componentDidMount() {
    this.bindEvents();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.changeScroll);
  }

  bindEvents() {
    window.addEventListener('scroll', this.props.changeScroll);
  }

  render() {
    const { showScroll } = this.props;
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className="banner-img" alt="" src="//upload.jianshu.io/admin_banners/web_images/4590/7f1edd154f90446a038d6ecd10bebf6e8929fbf5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
        {showScroll === true ? <BackTop onClick={() => { window.scrollTo(0, 0); }}>Top</BackTop> : null}

      </HomeWrapper>
    );
  }
}
// const Home = props =>
const mapState = state => ({
  showScroll: state.getIn(['home', 'showScroll']),
});
const mapDispatch = dispatch => ({
  changeScroll(e) {
    if (document.documentElement.scrollTop > 400) {
      dispatch(actionCreators.toggleTopShow(true));
    }
    else {
      dispatch(actionCreators.toggleTopShow(false));
    }
  },
});
export default connect(mapState, mapDispatch)(Home);
