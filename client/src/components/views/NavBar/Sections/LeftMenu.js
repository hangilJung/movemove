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
        <a href="/daily">일간정보</a>
      </Menu.Item>
      <Menu.Item key="search" icon={<FcCalendar />}>
        <a href="/search">날짜검색</a>
      </Menu.Item>
      <Menu.Item key="statistics" icon={<FcStatistics />}>
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
