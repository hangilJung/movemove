import React from 'react';
import { Tabs } from 'antd';
import RealTime from './Section/RealTime';
import Daily from './Section/Daily';
import Month from './Section/Month';
import Year from './Section/Year';

function FirstPoint() {
  const { TabPane } = Tabs;
  return (
    <div>
      <Tabs defaultActiveKey="1" centered>
        <TabPane tab="실시간" key="real">
          <RealTime />
        </TabPane>
        <TabPane tab="일별" key="daily">
          <Daily />
        </TabPane>
        <TabPane tab="월별" key="month">
          <Month />
        </TabPane>
        <TabPane tab="연도별" key="year">
          <Year />
        </TabPane>
      </Tabs>
    </div>
  );
}

export default FirstPoint;
