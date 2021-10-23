import React, { useEffect } from 'react';
import FirstPoint from './Sections/FirstPoint';
import SecondPoint from './Sections/SecondPoint';
import ThirdPoint from './Sections/ThirdPoint';
import FourthPoint from './Sections/FourthPoint';
import { Row, Col, Card } from 'antd';
import '../../../Styles/Kiosk.css';

function KioskPage() {
  useEffect(() => {
    setTimeout(() => {
      window.location.reload();
    }, 60000);
  }, []);

  return (
    <div className="kiosk-page">
      <Row gutter={16}>
        <Col span={24}>
          <Card bordered={false} type="inner">
            <h1>용당교</h1>
            <FirstPoint />
          </Card>
        </Col>
      </Row>
      <Row>
        <Col span={8}>
          <Card bordered={false} type="inner">
            <h2>성남교</h2>
            <SecondPoint />
          </Card>
        </Col>
        <Col span={8}>
          <Card bordered={false} type="inner">
            <h2>풍덕교</h2>
            <ThirdPoint />
          </Card>
        </Col>
        <Col span={8}>
          <Card bordered={false} type="inner">
            <h2>순천만 습지</h2>
            <FourthPoint />
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default KioskPage;
