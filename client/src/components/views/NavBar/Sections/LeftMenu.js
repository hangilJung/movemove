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
      <Menu.Item key="landing" icon={<FcWebcam />}>
        <a href="/landing">메인</a>
      </Menu.Item>
      <Menu.Item key="search" icon={<FcWebcam />}>
        <a href="/search">날짜별검색</a>
      </Menu.Item>
      <Menu.Item key="statistics" icon={<FcWebcam />}>
        <a href="/statistics">통계</a>
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
