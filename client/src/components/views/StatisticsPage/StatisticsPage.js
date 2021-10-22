/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { Radio, Tabs } from 'antd';
import { withRouter } from 'react-router';
import MonthGraph from './Sections/MonthGraph';
import YearGraph from './Sections/YearGraph';
import RiverTable from './Sections/RiverTable';
import '../../../Styles/Page.css';

function StatisticsPage(props) {
  const { TabPane } = Tabs;

  return (
    <div className="statistics-page">
      <Tabs defaultActiveKey="1" centered>
        <TabPane tab="월간 통계" key="month">
          <MonthGraph />
        </TabPane>
        <TabPane tab="연간 통계" key="year">
          <YearGraph />
        </TabPane>
        <TabPane tab="표" key="table">
          <RiverTable />
        </TabPane>
      </Tabs>
    </div>
  );
}

export default withRouter(StatisticsPage);
