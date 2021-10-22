import React from 'react';
import { Menu } from 'antd';
import { withRouter } from 'react-router-dom';
import {
  FcCalendar,
  FcWebcam,
  FcSettings,
  FcStatistics,
  FcHome,
  FcSelfServiceKiosk,
} from 'react-icons/fc';

function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
      {/* <Menu.Item key="main" icon={<FcHome />}>
        <a href="/">Home</a>
      </Menu.Item> */}
      <Menu.Item key="daily" icon={<FcWebcam />}>
        <a href="/daily">메인</a>
      </Menu.Item>
      <Menu.Item key="setting" icon={<FcSettings />}>
        <a href="/setting">설정</a>
      </Menu.Item>
      <Menu.Item key="kiosk" icon={<FcSelfServiceKiosk />}>
        <a href="/kiosk">키오스크</a>
      </Menu.Item>
    </Menu>
  );
}

export default withRouter(LeftMenu);
