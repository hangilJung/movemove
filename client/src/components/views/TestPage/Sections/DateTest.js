import React from 'react';
import { Menu, Dropdown, Button, message } from 'antd';

function DateTest() {
  const handleMenuClick = (e) => {};

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1">1st menu item</Menu.Item>
      <Menu.Item key="2">2nd menu item</Menu.Item>
      <Menu.Item key="3">3rd item</Menu.Item>
    </Menu>
  );

  return (
    <div>
      <Dropdown overlay={menu}>
        <Button style={{ marginLeft: 8 }}>Button</Button>
      </Dropdown>
    </div>
  );
}

export default DateTest;
