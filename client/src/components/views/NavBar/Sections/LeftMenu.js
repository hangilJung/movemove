import React from 'react';
import { Menu } from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
      <Menu.Item key="mail">
        <a href="/">Home</a>
      </Menu.Item>
      <SubMenu
        title={<span>Menu</span>}
        key="subMenu"
        style={{
          height: '80px',
          display: 'flex',
          alignItems: 'left',
          justifyContent: 'left',
        }}
      >
        <MenuItemGroup>
          <Menu.Item key="setting:1">
            <a href="/measurement">측정정보</a>
          </Menu.Item>
          <Menu.Item key="setting:2">
            <a href="/disasterinfo">재난정보</a>
          </Menu.Item>
          <Menu.Item key="setting:3">
            <a href="/safetymeasures">알림정보</a>
          </Menu.Item>
          <Menu.Item key="setting:4">
            <a href="/admin">admin</a>
          </Menu.Item>
        </MenuItemGroup>
      </SubMenu>
    </Menu>
  );
}

export default LeftMenu;
