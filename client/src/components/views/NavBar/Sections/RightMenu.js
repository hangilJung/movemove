/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { Menu } from 'antd';
import { withRouter } from 'react-router-dom';
import { GrLogin, GrLogout } from 'react-icons/gr';
import axios from 'axios';

function RightMenu(props) {
  const [idTrue, setIdTrue] = useState('');

  const onLogout = () => {
    sessionStorage.removeItem('accessToken');
    sessionStorage.removeItem('refreshToken');
    setIdTrue('');
    props.history.push('/login');
  };

  useEffect(() => {
    setTimeout(() => {
      axios
        .post('/api/login/verify', null, {
          headers: {
            authorization: sessionStorage.getItem('accessToken'),
          },
        })
        .then(() => {
          setIdTrue(sessionStorage.getItem('accessToken'));
        })
        .catch((err) => {
          setIdTrue('');
          console.log(err);
        });
    }, 300);
  }, []);

  return (
    <>
      {!idTrue && (
        <Menu mode={props.mode}>
          <Menu.Item key="login" icon={<GrLogin />}>
            <a href="/">Login</a>
          </Menu.Item>
        </Menu>
      )}
      {idTrue && (
        <Menu mode={props.mode}>
          <Menu.Item key="logout" icon={<GrLogout size="13" />}>
            <a onClick={onLogout}>Logout</a>
          </Menu.Item>
        </Menu>
      )}
    </>
  );
}

export default withRouter(RightMenu);
