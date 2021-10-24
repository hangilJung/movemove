import React, { useEffect } from 'react';
import FirstPoint from './Sections/FirstPoint';
import SecondPoint from './Sections/SecondPoint';
import ThirdPoint from './Sections/ThirdPoint';
import FourthPoint from './Sections/FourthPoint';
import Gauge from './Sections/Gauge';
import { Row, Col, Card } from 'antd';
import '../../../Styles/Kiosk2.css';

function KioskPage() {
  // useEffect(() => {
  //   setTimeout(() => {
  //     window.location.reload();
  //   }, 60000);
  // }, []);

  return (
    <div className="kiosk-page">
      {/* <Row gutter={16}>
        <Col span={16}>
          <Card bordered={false} type="inner">
            <FirstPoint />
          </Card>
          <Col span={8}>
            <SecondPoint />
            <ThirdPoint />
            <FourthPoint />
          </Col>
        </Col>
      </Row> */}
      <Row gutter={16}>
        <Col span={10}>
          <FirstPoint />
        </Col>
        <Col span={4}>
          <Gauge />
        </Col>
        <Col span={10}>
          <ul>
            <li>
              <SecondPoint />
            </li>
            <li>
              <ThirdPoint />
            </li>
            <li>
              <FourthPoint />
            </li>
          </ul>
        </Col>
      </Row>
    </div>
  );
}

export default KioskPage;
