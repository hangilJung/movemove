import axios from 'axios';
import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

function Login(props) {
  const [Id, setId] = useState('');
  const [Password, setPassword] = useState('');

  // typing 하면 onChange 를 발생시켜 state를 바꿔주어 value를 바꾼다.
  const onIdHandler = (event) => {
    setId(event.currentTarget.value);
  };
  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };
  const onSubmitHandler = (event) => {
    // page refresh를 막아줌
    event.preventDefault();

    let body = {
      id: Id,
      password: Password,
    };

    axios.post('/api/login', body).then((response) => {
      if (response.data.msg === '로그인 성공') {
        props.history.push('/');
      } else {
        alert('Error');
      }
      console.log(response);
    });

    // console.log(body);
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100vh',
      }}
    >
      <form
        style={{ display: 'flex', flexDirection: 'column' }}
        onSubmit={onSubmitHandler}
      >
        <label>아이디</label>
        <input type="id" value={Id} onChange={onIdHandler} />
        <label>비밀번호</label>
        <input type="password" value={Password} onChange={onPasswordHandler} />
        <br />
        <button type="">확인</button>
      </form>
    </div>
  );
}
export default withRouter(Login);
