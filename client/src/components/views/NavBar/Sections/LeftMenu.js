import React, { useState } from 'react';
import { Menu } from 'antd';
import { withRouter } from 'react-router-dom';
import { FcWebcam, FcSettings, FcSelfServiceKiosk } from 'react-icons/fc';
import '../../../../Styles/Navbar.css';

function LeftMenu(props) {
  const [state, setstate] = useState();

  return (
    <div style={{ top: 0 }}>
      <Menu
        style={{
          backgroundColor: '#F1FBFF',
          float: 'left',
          width: 300,
          margin: '-60px 0 0 30px',
          height: '100vh',
          minWidth: 200,
          border: 'none',
        }}
        mode={'inline'}
      >
        <img
          src="img/citylogo.png"
          alt="profile"
          style={{ width: 300, height: 'auto', margin: '0 0 35px 0' }}
        />
        <Menu.Item
          style={{
            marginTop: '3vh',
            height: '10vh',
          }}
          key="landing"
        >
          <a href="/landing">
            <img
              className="menu-btn"
              style={{ width: 250 }}
              src="img/main.png"
              alt="profile"
            />
          </a>
        </Menu.Item>

        <Menu.Item key="statistics" style={{ height: '10vh' }}>
          <a href="/statistics">
            <img style={{ width: 250 }} src="img/static.png" alt="profile" />
          </a>
        </Menu.Item>
        <Menu.Item key="setting" style={{ height: '10vh' }}>
          <a href="/setting">
            {' '}
            <a href="/statistics">
              <img style={{ width: 250 }} src="img/setting.png" alt="profile" />
            </a>
          </a>
        </Menu.Item>
        <Menu.Item key="kiosk" style={{ height: '10vh' }}>
          <a href="/kiosk">
            {' '}
            <a href="/kiosk">
              <img style={{ width: 250 }} src="img/kiosk.png" alt="profile" />
            </a>
          </a>
        </Menu.Item>
        <img
          src="img/joialogo.png"
          alt="profile"
          style={{ width: 300, height: 'auto', margin: '50px 0 30px 5px' }}
        />
        <div
          style={{
            fontFamily: 'Noto Sans CJK KR',
            fontStyle: 'normal',
            fontSize: 15,
            textAlign: 'center',
            fontWeight: 500,
          }}
        >
          <p>본 시스템은 (재)전남정보문화산업진흥원의 </p>
          <p>지원을 받아 제작된 시스템입니다.</p>
        </div>
      </Menu>
    </div>
  );
}

export default withRouter(LeftMenu);
