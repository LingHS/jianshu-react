import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  LoginWarpper, LoginBox, Input, LoginTitle, SignIn,
} from './style';
import {
  Logo,
} from '../../common/header/style';

class Login extends PureComponent {
  render() {
    return (
      <LoginWarpper>
        <Link to="/">
          <Logo />
        </Link>
        <LoginBox>
          <LoginTitle>登录</LoginTitle>
          <Input placeholder="手机号或邮箱" />
          <Input placeholder="密码" />
          <SignIn>登录</SignIn>
        </LoginBox>
      </LoginWarpper>
    );
  }
}
// const Detail = () => <div>Detail</div>;
export default Login;
