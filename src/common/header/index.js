import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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

class Header extends Component {
  // constructor(props) {
  //   super(props);
  // }

  componentWillMount() {

  }
  // eslint-disable-next-line
  getListArea() {
    const {
      focused: show, list, page, mouseIn, totalPage,
    } = this.props;

    if (show || mouseIn) {
      return (
        <SearchInfo
          onMouseEnter={this.props.handleMouseEnter}
          onMouseLeave={this.props.handleMouseLeave}
        >
          <SearchInfoTitle>
              热门搜索
            <SearchInfoSwitch onClick={() => { this.props.handleChangePage(page, totalPage, this.spinIcon); }}>
              <i ref={(icon) => { this.spinIcon = icon; }} className="iconfont">&#xe606;</i>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <div style={{ overflow: 'auto' }}>
            {
              list.slice((page - 1) * 10, page * 10).map(item => <SearchInfoItem key={item}>{item}</SearchInfoItem>)
            }
          </div>
        </SearchInfo>
      );
    }
    return null;
  }

  render() {
    const { focused, list } = this.props;
    return (
      <HeaderWrapper>
        <Link to="/">
          <Logo />
        </Link>
        <Container>
          <ContainerItem className="left active">首页</ContainerItem>
          <ContainerItem className="left">下载App</ContainerItem>
          <Link to="/login"><ContainerItem className="right">登录</ContainerItem></Link>
          <ContainerItem className="right"><i className="iconfont">&#xe636;</i></ContainerItem>
          <SearchWrapper>
            <CSSTransition
              in={focused}
              timeout={500}
              classNames="slide"
            >
              <NavSearch
                className={focused ? 'focused' : ''}
                onFocus={() => { this.props.handleInputFocus(list); }}
                onBlur={this.props.handleInputBlur}
              />
            </CSSTransition>
            <i className={focused ? 'focused iconfont' : 'iconfont'}>&#xe631;</i>
            {list.size !== 0 ? this.getListArea() : null}
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

const mapStateToProps = state => ({
  focused: state.getIn(['header', 'focused']),
  list: state.getIn(['header', 'list']),
  page: state.getIn(['header', 'page']),
  totalPage: state.getIn(['header', 'totalPage']),
  mouseIn: state.getIn(['header', 'mouseIn']),
});
let rotate = 360;
const mapDispatchToProps = dispatch => ({
  handleInputFocus({ size }) {
    size === 0 && dispatch(actionCreators.getList());
    dispatch(actionCreators.searchFocus());
  },
  handleInputBlur() {
    dispatch(actionCreators.searchBlur());
  },
  handleMouseEnter() {
    dispatch(actionCreators.mouseEnter());
  },
  handleMouseLeave() {
    dispatch(actionCreators.mouseLeave());
  },
  handleChangePage(page, totalPage, spin) {
    rotate += 360;
    spin.style.transform = `rotate(${rotate}deg)`;
    dispatch(actionCreators.changePage((page % totalPage) + 1));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
