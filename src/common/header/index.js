import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import {
  HeaderWrapper,
  Logo, Container,
  ContainerItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem,
} from './style';

const getListArea = (show) => {
  if (show) {
    return (
      <SearchInfo>
        <SearchInfoTitle>
          热门搜索
          <SearchInfoSwitch>
            换一批
          </SearchInfoSwitch>
        </SearchInfoTitle>
        <div style={{ overflow: 'auto' }}>
          <SearchInfoItem>区块链</SearchInfoItem>
          <SearchInfoItem>小程序</SearchInfoItem>
          <SearchInfoItem>vue</SearchInfoItem>
          <SearchInfoItem>PHP</SearchInfoItem>
          <SearchInfoItem>故事</SearchInfoItem>
          <SearchInfoItem>flutter</SearchInfoItem>
          <SearchInfoItem>理财</SearchInfoItem>
          <SearchInfoItem>美食</SearchInfoItem>
          <SearchInfoItem>故事</SearchInfoItem>
          <SearchInfoItem>flutter</SearchInfoItem>
          <SearchInfoItem>理财</SearchInfoItem>
          <SearchInfoItem>美食</SearchInfoItem>
        </div>
      </SearchInfo>
    );
  }
};

class Header extends Component {
  // constructor(props) {
  //   super(props);
  // }

  componentWillMount() {

  }

  render() {
    const { focused } = this.props;
    return (
      <HeaderWrapper>
        <Logo />
        <Container>
          <ContainerItem className="left active">首页</ContainerItem>
          <ContainerItem className="left">下载App</ContainerItem>
          <ContainerItem className="right">登录</ContainerItem>
          <ContainerItem className="right"><i className="iconfont">&#xe636;</i></ContainerItem>
          <SearchWrapper>
            <CSSTransition
              in={focused}
              timeout={500}
              classNames="slide"
            >
              <NavSearch
                className={focused ? 'focused' : ''}
                onFocus={this.props.handleInputFocus}
                onBlur={this.props.handleInputBlur}
              />
            </CSSTransition>
            <i className={focused ? 'focused iconfont' : 'iconfont'}>&#xe631;</i>
            {getListArea(focused)}
          </SearchWrapper>
        </Container>
        <Addition>
          <Button className="writting">
            <i className="iconfont">&#xe615;</i>
              写文章
          </Button>
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>
    );
  }
}

const mapStateToProps = state => ({ focused: state.getIn(['header', 'focused']) });
const mapDispatchToProps = dispatch => ({
  handleInputFocus() {
    dispatch(actionCreators.searchFocus());
  },
  handleInputBlur() {
    dispatch(actionCreators.searchBlur());
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
