import React, { Component } from 'react';
import {
  HeaderWrapper, Logo, Container, ContainerItem, NavSearch, Addition, Button,
} from './style';
// eslint-disable-next-line react/prefer-stateless-function
class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <Logo />
        <Container>
          <ContainerItem className="left active">首页</ContainerItem>
          <ContainerItem className="left">下载App</ContainerItem>
          <ContainerItem className="right">登录</ContainerItem>
          <ContainerItem className="right">Aa</ContainerItem>
          <NavSearch />
        </Container>
        <Addition>
          <Button className="writting">写文章</Button>
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>
    );
  }
}

export default Header;
