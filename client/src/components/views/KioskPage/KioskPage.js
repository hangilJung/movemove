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
        <Col span={12} lg={12}>
          <Card title="용당교" bordered={false} type="inner">
            <FirstPoint />
          </Card>
        </Col>
        <Col span={12}>
          <Card title="풍덕교" bordered={false} type="inner">
            <SecondPoint />
          </Card>
        </Col>
        <Col span={12}>
          <Card title="천변주차장" bordered={false} type="inner">
            <ThirdPoint />
          </Card>
        </Col>
        <Col span={12}>
          <Card title="순천만습지" bordered={false} type="inner">
            <FourthPoint />
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default KioskPage;
