import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import {
  HeaderWrapper, Logo, Container, ContainerItem, NavSearch, Addition, Button, SearchWrapper,
} from './style';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: false,
    };
  }

  handleInputFocus = () => {
    this.setState({
      focused: true,
    });
  }

  handleInputBlur = () => {
    this.setState({
      focused: false,
    });
  }

  render() {
    const { focused } = this.state;
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
                onFocus={this.handleInputFocus}
                onBlur={this.handleInputBlur}
              />
            </CSSTransition>
            <i className={focused ? 'focused iconfont' : 'iconfont'}>&#xe631;</i>
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

export default Header;
