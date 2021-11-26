import React from 'react';
import axios from 'axios';
import { Form, Input, Button } from 'antd';
import '../../../Styles/Login.css';
import '../../../Styles/Page.css';

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
    const regPwd = /[^\s]+/;
    if (regPwd.test(password)) {
      console.log('로그인테스트');
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
          window.location = '/landing';
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
    } else {
      alert('정확한 비밀번호를 입력해주세요.');
    }
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
            style={{
              width: 250,
              height: 55,
              padding: '0 15px 0 15px',
              borderRadius: 18,
            }}
          />
        </Form.Item>
        <Form.Item>
          <Input.Password
            // className="login-password"
            type="password"
            onChange={passwordValue}
            placeholder="비밀번호를 입력해 주세요."
            maxLength={10}
            style={{
              width: 250,
              height: 55,
              padding: '0 15px 0 15px',
              borderRadius: 18,
            }}
          />
        </Form.Item>
        <Button
          type="button"
          onClick={onLogin}
          style={{ border: 'none', height: 50, backgroundColor: '#F1FBFF' }}
        >
          <img className="login-btn" src="img/Login.png" alt="profile" />
        </Button>
      </Form>
      <div className="logo">
        <img
          src="img/suncheonsi.png"
          style={{ margin: '20px 10px 0 10px' }}
          alt="logo"
        />
        <img src="img/joia.png" alt="logo" />
      </div>
    </div>
  );
}

export default Login;
