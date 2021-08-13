import React from 'react';
import { Menu } from 'antd';
import { withRouter } from 'react-router-dom';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function LeftMenu(props) {
  const onClickHandler = () => {
    props.history.push('/');
  };

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
            <a href="/">일간 변화량</a>
          </Menu.Item>
          <Menu.Item key="setting:2">
            <a href="/month">월간 변화량</a>
          </Menu.Item>
          <Menu.Item key="setting:3">
            <a href="/setting">수치변경</a>
          </Menu.Item>
          <Menu.Item key="setting:4">
            <a href="/login">Login</a>
          </Menu.Item>
          <Menu.Item key="setting:5">
            <button onClick={onClickHandler}>로그아웃</button>
          </Menu.Item>
          <Menu.Item key="setting:6">
            <a href="/test">TEST</a>
          </Menu.Item>
        </MenuItemGroup>
      </SubMenu>
    </Menu>
  );
}

export default withRouter(LeftMenu);
