import React from 'react';
import { Tabs } from 'antd';
import SecondPoint from './Sections/SecondPoint';
import FirstPoint from './Sections/FirstPage/FirstPoint';
import ThirdPoint from './Sections/ThirdPoint';
import FourthPoint from './Sections/FourthPoint';

function Test() {
  const { TabPane } = Tabs;
  return (
    <div style={{ padding: 100 }}>
      <Tabs defaultActiveKey="1" centered>
        <TabPane tab="용당교" key="first">
          <FirstPoint />
        </TabPane>
        <TabPane tab="성남교" key="second">
          <SecondPoint />
        </TabPane>
        <TabPane tab="풍덕교" key="third">
          <ThirdPoint />
        </TabPane>
        <TabPane tab="순천만 습지" key="fourth">
          <FourthPoint />
        </TabPane>
      </Tabs>
    </div>
  );
}

export default Test;
