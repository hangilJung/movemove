/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { Radio, Tabs } from 'antd';
import { withRouter } from 'react-router';
import Month from './Sections/Month';
import Year from './Sections/Year';
import Daily from './Sections/Daily';
import Hour from './Sections/Hour';
import RiverTable from './Sections/RiverTable';
import '../../../Styles/Page.css';

function StatisticsPage(props) {
  const { TabPane } = Tabs;

  return (
    <div className="statistics-page">
      <Tabs defaultActiveKey="1" centered>
        <TabPane tab="시간 통계" key="hour">
          <Hour />
        </TabPane>
        <TabPane tab="일간 통계" key="daily">
          <Daily />
        </TabPane>
        <TabPane tab="월간 통계" key="month">
          <Month />
        </TabPane>
        <TabPane tab="연간 통계" key="year">
          <Year />
        </TabPane>
      </Tabs>
    </div>
  );
}

export default withRouter(StatisticsPage);
