import React from 'react';
import axios from 'axios';
import { Form, Input, Button } from 'antd';
import '../../../Styles/Login.css';
import { GiConsoleController } from 'react-icons/gi';

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
        window.location = '/landing';
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="login-page">
      <Form className="login-form" onKeyPress={onKeyPress}>
        <p className="login-title">순천 도시하천 모니터링 시스템</p>

        <Form.Item>
          <Input
            type="text"
            onChange={idValue}
            placeholder="아이디를 입력해 주세요."
          />
        </Form.Item>
        <Form.Item>
          <Input
            // className="login-password"
            type="password"
            onChange={passwordValue}
            placeholder="비밀번호를 입력해 주세요."
          />
        </Form.Item>
        <Button
          type="button"
          onClick={onLogin}
          style={{ border: 'none', backgroundColor: '#f1fbff' }}
        >
          <img className="login-btn" src="img/Login.png" alt="profile" />
        </Button>
      </Form>
      <div className="logo">
        <img src="img/suncheonsi.png" style={{ margin: '20px 10px 0 10px' }} />
        <img src="img/joia.png" />
      </div>
    </div>
  );
}

export default Login;
