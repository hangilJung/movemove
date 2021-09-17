import React from 'react';
import AdminSetting from './Section/AdminSetting';
import LevelSetting from './Section/LevelSetting';
import '../../../Styles/Page.css';
import { Tabs } from 'antd';

function SettingPage() {
  const { TabPane } = Tabs;
  return (
    <div className="setting">
      <Tabs defaultActiveKey="1" centered>
        <TabPane tab="비밀번호 변경" key="admin">
          <AdminSetting />
        </TabPane>
        <TabPane tab="위험수위 변경" key="level">
          <LevelSetting />
        </TabPane>
      </Tabs>
    </div>
  );
}

export default SettingPage;
