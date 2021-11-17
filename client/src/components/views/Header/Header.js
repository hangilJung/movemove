/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { Menu, Row, Col } from 'antd';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';

function Header(props) {
  const toDay = moment().format('YYYY. MM. DD. HH시 mm분');

  const [idTrue, setIdTrue] = useState('');

  //   const [idTrue, setIdTrue] = useState('');

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

  if (window.location.pathname === '/login') return <div></div>;
  if (window.location.pathname === '/kiosk') return <div></div>;

  return (
    <div
      className="header"
      style={{
        height: 120,
        margin: '0 auto',
        float: 'right',
        width: '80%',
      }}
    >
      <div
        style={{
          margin: '20px 0 0 30px',
          float: 'left',
        }}
      >
        <text
          style={{
            fontSize: 40,

            color: '#7975f6',
          }}
        >
          순천시 도시하천 모니터링 시스템
        </text>
      </div>
      <div
        className="right-menu"
        style={{
          float: 'right',
          fontSize: 17,
          margin: '20px 60px 0 0',
          fontWeight: 700,
          fontFamily: 'Noto Sans CJK KR',
          fontStyle: 'normal',
        }}
      >
        <div>
          {/* {!idTrue && (
            <Menu mode="horizontal">
              <Menu.Item key="login" icon={<GrLogin />}>
                <a href="/">로그인</a>
              </Menu.Item>
            </Menu>
          )} */}
          {idTrue && (
            <Menu
              mode="horizontal"
              style={{ border: 'none', marginLeft: '30px' }}
            >
              <Menu.Item key="logout">
                <a onClick={onLogout}>
                  <img
                    src="img/Logout.png"
                    alt="profile"
                    style={{
                      width: 80,
                      height: 'auto',
                    }}
                  />
                </a>
              </Menu.Item>
            </Menu>
          )}
        </div>
        {toDay}
      </div>
    </div>
  );
}

export default withRouter(Header);
