import React, { useState } from 'react';
import { Menu } from 'antd';
import { withRouter } from 'react-router-dom';
import { FcWebcam, FcSettings, FcSelfServiceKiosk } from 'react-icons/fc';
import '../../../../Styles/Navbar.css';

function LeftMenu(props) {
  const [state, setstate] = useState();

  return (
    <div className="test1" style={{ top: 0 }}>
      <Menu
        style={{
          backgroundColor: '#F1FBFF',
          float: 'left',
          width: 300,
          margin: '-60px 0 0 30px',
          minWidth: 200,
          height: '90vh',
          border: 'none',
        }}
        mode={'inline'}
      >
        <Menu.Item
          style={{
            marginTop: '20vh',
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
            <a href="/statistics">
              <img style={{ width: 250 }} src="img/kiosk.png" alt="profile" />
            </a>
          </a>
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default withRouter(LeftMenu);
