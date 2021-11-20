import React from 'react';
import { Menu, Button } from 'antd';

function Nav() {
  if (window.location.pathname === '/login') return <div></div>;
  if (window.location.pathname === '/kiosk') return <div></div>;

  return (
    <div
      className="nav-menu"
      style={{
        backgroundColor: '#fff',
        height: '100vh',
        position: 'fixed',
        zIndex: 1001,
        boxShadow: '5px 5px 10px #bbb',
      }}
    >
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        style={{ backgroundColor: '#fff', height: '100vh' }}
      >
        {/* <img
          src="img/citylogo.png"
          alt="profile"
          style={{ width: 300, height: 'auto', margin: '0 0 35px 0' }}
        /> */}
        <div
          style={{
            fontFamily: 'Noto Sans CJK KR',
            fontStyle: 'normal',
            color: '#7975f6',
            fontSize: 30,
            textAlign: 'center',
            width: 300,
            height: 'auto',
            margin: '0 0 35px 0',
            paddingTop: 50,
            fontWeight: 'bold',
          }}
        >
          <p>도시하천 저류시설</p>
          <p> 관리시스템</p>
        </div>
        <Menu.Item key="landing" style={{ marginTop: 80, height: 80 }}>
          <Button
            href="/landing"
            type="primary"
            style={{
              width: '100%',
              height: 80,
              zIndex: 9999,
              backgroundImage: 'url(/img/main2.png)',
              backgroundSize: 'cover',
              border: 'none',
              backgroundColor: '#F1FBFF',
            }}
          >
            {' '}
          </Button>
        </Menu.Item>
        <Menu.Item key="statistics" style={{ height: 80 }}>
          <Button
            href="/statistics"
            type="primary"
            style={{
              width: '100%',
              height: 80,
              zIndex: 9999,
              backgroundImage: 'url(/img/static.png)',
              backgroundSize: 'cover',
              border: 'none',
              backgroundColor: '#F1FBFF',
            }}
          >
            {' '}
          </Button>
        </Menu.Item>
        <Menu.Item key="statistics" style={{ height: 80 }}>
          <Button
            href="/setting"
            type="primary"
            style={{
              width: '100%',
              height: 80,
              zIndex: 9999,
              backgroundImage: 'url(/img/setting.png)',
              backgroundSize: 'cover',
              border: 'none',
              backgroundColor: '#F1FBFF',
            }}
          >
            {' '}
          </Button>
        </Menu.Item>
        <Menu.Item key="kiosk" style={{ height: 80 }}>
          <Button
            href="/kiosk"
            type="primary"
            style={{
              width: '100%',
              height: 80,
              zIndex: 9999,
              backgroundImage: 'url(/img/kiosk.png)',
              backgroundSize: 'cover',
              border: 'none',
              backgroundColor: '#F1FBFF',
            }}
          >
            {' '}
          </Button>
        </Menu.Item>
        <div style={{ marginTop: 50 }}>
          <div>
            <img
              src="img/citylogo.png"
              alt="profile"
              style={{ width: 250, height: 'auto', margin: '70px 0 0 20px' }}
            />
          </div>
          <div>
            <img
              src="img/joialogo.png"
              alt="profile"
              style={{ width: 300, height: 'auto', margin: '0px 0 30px 5px' }}
            />
          </div>
          <div
            style={{
              width: 300,
              fontFamily: 'Noto Sans CJK KR',
              fontStyle: 'normal',
              fontSize: 15,
              textAlign: 'center',
              fontWeight: 'bold',
            }}
          >
            <p>본 시스템은 (재)전남정보문화산업진흥원의 </p>
            <p>지원을 받아 제작된 시스템입니다.</p>
          </div>
        </div>
      </Menu>
    </div>
  );
}

export default Nav;
