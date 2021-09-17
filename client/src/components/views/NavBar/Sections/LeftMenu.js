import React from 'react';
import { Menu } from 'antd';
import { withRouter } from 'react-router-dom';
import {
  FcCalendar,
  FcList,
  FcWebcam,
  FcSettings,
  FcStatistics,
  FcHome,
  FcSelfServiceKiosk,
} from 'react-icons/fc';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function LeftMenu(props) {
  return (
    <Menu mode={props.mode} triggerSubMenuAction="click">
      <SubMenu title={<span>Menu</span>} key="subMenu" icon={<FcList />}>
        <Menu.Item key="main" icon={<FcHome />}>
          <a href="/">Home</a>
        </Menu.Item>
        <MenuItemGroup>
          <Menu.Item key="daily" icon={<FcWebcam />}>
            <a href="/daily">일간 모니터링</a>
          </Menu.Item>
          <Menu.Item key="search" icon={<FcCalendar />}>
            <a href="/search">검색 일자 선택</a>
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
        </MenuItemGroup>
      </SubMenu>
    </Menu>
  );
}

export default withRouter(LeftMenu);
