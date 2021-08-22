import React from 'react';
import RadarCharts from './Sections/RadarCharts';
import BarWaterGraph from './Sections/BarWaterGraph';
import { Col, Row, Card } from 'antd';

function StatisticsPage() {
  return (
    <div
      style={{
        textAlign: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto',
      }}
    >
      <BarWaterGraph />
      <RadarCharts />
    </div>
  );
}

export default StatisticsPage;
