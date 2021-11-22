import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Form, Input, Button, Typography } from 'antd';
// import '../../../../Styles/Setting.css';
import { withRouter } from 'react-router';

function AdminSetting(props) {
  const [idTrue, setIdTrue] = useState('');

  const { Title } = Typography;

  let password = '';
  let firstPassword = '';
  let secondPassword = '';

  useEffect(() => {
    setTimeout(() => {
      axios
        .post('/api/login/verify', null, {
          headers: {
            authorization: sessionStorage.getItem('accessToken'),
          },
        })
        .then((res) => {
          setIdTrue(res.data.decoded.id);
        })
        .catch((err) => {
          setIdTrue('');
          console.log(err);
        });
    }, 300);
  }, []);

  const passwordValue = (event) => {
    password = event.currentTarget.value;
  };
  const changePassword = (event) => {
    firstPassword = event.currentTarget.value;
  };
  const verificationPassword = (event) => {
    secondPassword = event.currentTarget.value;
  };

  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSubmit();
    }
  };

  const onSubmit = async () => {
    await axios
      .post('/api/login/pwdVerify', {
        user_id: idTrue,
        user_pw: password,
      })
      .then(async (res) => {
        if (firstPassword === secondPassword) {
          await axios
            .post('/api/login/changing', {
              user_id: idTrue,
              firstPassword,
            })
            .then((res) => {
              alert('비밀번호가 변경되었습니다.');
              props.history.push('/');
            })
            .catch((err) => {
              console.log(err);
              alert('변경실패');
            });
        } else {
          alert('변경하실 비밀번호가 틀립니다.');
        }
      })
      .catch((err) => {
        alert('기존 비밀번호가 다릅니다.');
      });
  };

  return (
    <div
      style={{
        width: '100vh',
        height: '100vh',
        margin: '200px 0 0 35vh',
        fontFamily: 'Noto Sans CJK KR',
        fontStyle: 'normal',
      }}
    >
      <Form
        className="pwd-setting"
        onKeyPress={onKeyPress}
        style={{ width: '100%' }}
      >
        <Title level={1}>{idTrue} 님 비밀번호를 변경해 주세요.</Title>
        <br />
        <p style={{ fontSize: 20, color: '#727272' }}>
          기존 비밀번호를 입력하고 새 비밀번호, 새 비밀번호 확인란을 입력해
          주세요.
        </p>
        <br />
        <div style={{ width: '60vh', margin: '0 auto' }}>
          <Input
            className="first-pwd"
            size="large"
            type="password"
            onChange={passwordValue}
            placeholder="기존의 비밀번호를 입력해 주세요."
            style={{ borderRadius: '15px', backgroundColor: '#E6EEF8' }}
          />
          <Input
            className="second-pwd"
            size="large"
            type="password"
            onChange={changePassword}
            placeholder="바꾸실 비밀번호를 입력해 주세요."
            style={{ borderRadius: '15px', backgroundColor: '#E6EEF8' }}
          />
          <Input
            className="third-pwd"
            size="large"
            type="password"
            onChange={verificationPassword}
            placeholder="바꾸실 비밀번호를 한번 더 입력해 주세요."
            style={{ borderRadius: '15px', backgroundColor: '#E6EEF8' }}
          />

          <Button
            className="pwd-btn"
            type="button"
            onClick={onSubmit}
            style={{
              backgroundColor: '#7771F6',
              color: 'white',
              marginTop: 30,
            }}
            shape="round"
            size="large"
          >
            비밀번호 변경
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default withRouter(AdminSetting);
