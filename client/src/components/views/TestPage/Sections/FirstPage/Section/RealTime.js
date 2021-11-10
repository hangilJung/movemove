import React from 'react';
import Minute from './Minute';
import Picker from './Picker';
import { Tabs } from 'antd';

function RealTime() {
  const { TabPane } = Tabs;
  return (
    <div>
      <Tabs defaultActiveKey="1" centered>
        <TabPane tab="실시간" key="real">
          <Minute />
        </TabPane>
        <TabPane tab="조회" key="picker">
          <Picker />
        </TabPane>
      </Tabs>
    </div>
  );
}

export default RealTime;
