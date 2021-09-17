import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Form, Input, Button, Typography } from 'antd';
import '../../../../Styles/Setting.css';
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
    <div>
      <Form className="pwd-setting" onKeyPress={onKeyPress}>
        <Title level={2}>{idTrue} 님</Title>
        <Input
          type="password"
          onChange={passwordValue}
          placeholder="기존의 비밀번호를 입력해 주세요."
        />
        <Input
          type="password"
          onChange={changePassword}
          placeholder="바꾸실 비밀번호를 입력해 주세요."
        />
        <Input
          type="password"
          onChange={verificationPassword}
          placeholder="바꾸실 비밀번호를 한번 더 입력해 주세요."
        />
        <Button type="button" onClick={onSubmit}>
          비밀번호 변경
        </Button>
      </Form>
    </div>
  );
}

export default withRouter(AdminSetting);
