import React from 'react';
import LandingPageGraph from './Sections/LandingPageGraph';
import Map from './Sections/Map';
import LandingPageTable from './Sections/LandingPageTable';
import { Col, Row, Card } from 'antd';

function LandingPage() {
  return (
    <div
      style={{
        textAlign: 'center',
      }}
    >
      <h1>LandingPage</h1>
      <Row>
        <Col md={12} xs={24}>
          <Card>
            <Map />
          </Card>
        </Col>
        <Col md={12} xs={24}>
          <Card>
            <LandingPageTable />
          </Card>
        </Col>
      </Row>
      <Card>
        <LandingPageGraph />
      </Card>
    </div>
  );
}

export default LandingPage;
