import React from 'react';
import OneDay from './Sections/OneDay';
import DateTest from './Sections/DateTest';
import Pie from './Sections/Pie';
import Test from './Sections/Test';
import { Col, Row, Card } from 'antd';

function TestPage() {
  return (
    <div
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100vh',
      }}
    >
      {/* <Pie /> */}
      <OneDay />
      {/* <DateTest /> */}
    </div>
  );
}

export default TestPage;
