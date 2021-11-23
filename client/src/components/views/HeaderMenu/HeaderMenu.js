/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { Menu, Row, Col } from 'antd';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';

function HeaderMenu(props) {
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

  // if (window.location.pathname === '/login') return <div></div>;
  // if (window.location.pathname === '/kiosk') return <div></div>;

  return (
    <div style={{}}>
      <Row
        style={{
          backgroundColor: '#fff',
          minWidth: 1400,
        }}
      >
        <Col
          span={12}
          style={{
            fontSize: 40,
            color: '#7975f6',
            margin: '0 auto',
            textAlign: 'center',
          }}
        >
          {/* 순천시 도시하천 모니터링 시스템 */}
        </Col>
        <Col
          span={4}
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            fontFamily: 'Noto Sans CJK KR',
            fontStyle: 'normal',
          }}
        >
          {toDay}
        </Col>
        <Col span={6} style={{ backgroundColor: '#fff' }}>
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
              style={{ border: 'none', backgroundColor: '#fff' }}
            >
              <Menu.Item key="logout">
                <a onClick={onLogout}>
                  <img
                    src="img/Logout.png"
                    alt="profile"
                    style={{
                      width: 100,
                      height: 'auto',
                      margin: '0 auto',
                    }}
                  />
                </a>
              </Menu.Item>
            </Menu>
          )}
        </Col>
      </Row>
    </div>
  );
}

export default withRouter(HeaderMenu);
