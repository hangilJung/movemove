import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Form, Input, Button, Typography } from 'antd';
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
    const regPwd = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{1,10}$/;

    // 비밀번호 유효성 검사
    if (
      regPwd.test(password) &&
      regPwd.test(firstPassword) &&
      regPwd.test(secondPassword)
    ) {
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
                alert('변경이 실패하였습니다.');
              });
          } else {
            alert('변경하실 비밀번호가 틀립니다.');
          }
        })
        .catch((err) => {
          alert('기존 비밀번호가 다릅니다.');
        });
    } else {
      alert('유효하지 않은 비밀번호 입니다.');
    }
  };

  return (
    <div
      style={{
        width: 1000,
        height: '100%',
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
        <p style={{ fontSize: 15, color: '#727272' }}>
          비밀번호는 공백을 제외한 영문+숫자 혼합 10자리 이내로 입력해 주세요.
        </p>
        <br />
        <div style={{ width: '60vh', margin: '0 auto' }}>
          <Input
            className="first-pwd"
            size="large"
            type="password"
            onChange={passwordValue}
            maxLength={10}
            placeholder="기존의 비밀번호를 입력해 주세요."
            style={{ borderRadius: '15px', backgroundColor: '#E6EEF8' }}
          />
          <Input
            className="second-pwd"
            size="large"
            type="password"
            onChange={changePassword}
            maxLength={10}
            placeholder="바꾸실 비밀번호를 입력해 주세요."
            style={{ borderRadius: '15px', backgroundColor: '#E6EEF8' }}
          />
          <Input
            className="third-pwd"
            size="large"
            type="password"
            onChange={verificationPassword}
            maxLength={10}
            verificationPassword
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
              padding: 0,
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
