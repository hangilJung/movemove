import React from 'react';
import { Row, Col, Button } from 'antd';

function SettingPage() {
  return (
    <Row
      className="setting"
      style={{ height: '100vh', minWidth: 1400, marginTop: 80 }}
    >
      <Col span={3}></Col>
      <Col span={9}>
        <Button
          href="/warning"
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
            backgroundColor: '#F0F2F5',
          }}
        >
          <img
            src="img/warningbtn.png"
            alt="warning"
            style={{ width: '100%' }}
          />
        </Button>
      </Col>
      <Col span={9}>
        <Button
          href="/adminsetting"
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
            backgroundColor: '#F0F2F5',
          }}
        >
          <img
            src="img/passwordbtn.png"
            alt="warning"
            style={{ width: '100%' }}
          />
        </Button>
      </Col>
      <Col span={3}></Col>
    </Row>
  );
}

export default SettingPage;
