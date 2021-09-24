import React from 'react';
import axios from 'axios';
import { Form, Input, Button } from 'antd';
import '../../../Styles/Login.css';

function Login() {
  let id = '';
  let password = '';

  const idValue = (event) => {
    id = event.currentTarget.value;
  };
  const passwordValue = (event) => {
    password = event.currentTarget.value;
  };

  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      onLogin();
    }
  };
  const onLogin = async () => {
    await axios
      .post('/api/login', {
        id: id,
        password: password,
      })
      .then((res) => {
        sessionStorage.setItem('refreshToken', res.data.refreshToken);
      })
      .catch((err) => {
        console.log(err);
        alert('아이디와 비밀번호가 다릅니다.');
      });

    axios
      .post('/api/login/accessToken', null, {
        headers: {
          authorization: sessionStorage.getItem('refreshToken'),
        },
      })
      .then((data) => {
        sessionStorage.setItem('accessToken', data.data.accessToken);
        window.location = '/daily';
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="login-page">
      <Form className="login-form" onKeyPress={onKeyPress}>
        <Form.Item>
          <Input
            type="text"
            onChange={idValue}
            placeholder="아이디를 입력해 주세요."
            size="large"
          />
        </Form.Item>
        <Form.Item>
          <Input
            type="password"
            onChange={passwordValue}
            placeholder="비밀번호를 입력해 주세요."
            size="large"
          />
        </Form.Item>
        <Button type="button" onClick={onLogin}>
          로그인
        </Button>
      </Form>
    </div>
  );
}

export default Login;
