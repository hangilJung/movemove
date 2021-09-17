/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import axios from 'axios';
import { Row, Col, li, Button, Typography, Form, Card } from 'antd';
import { withRouter } from 'react-router';
import '../../../../Styles/Setting.css';

function LevelSetting(props) {
  const [setup, setSetup] = useState([
    { place_id: 1, water_level_danger: '' },
    { place_id: 2, water_level_danger: '' },
    { place_id: 3, water_level_danger: '' },
    { place_id: 4, water_level_danger: '' },
  ]);

  const { Title } = Typography;

  const one = (e) => {
    setup.map((data) => {
      if (data.place_id === 1) {
        data.water_level_danger = e.target.value;
      }
    });
  };
  const two = (e) => {
    setup.map((data) => {
      if (data.place_id === 2) {
        data.water_level_danger = e.target.value;
      }
    });
  };
  const three = (e) => {
    setup.map((data) => {
      if (data.place_id === 3) {
        data.water_level_danger = e.target.value;
      }
    });
  };
  const four = (e) => {
    setup.map((data) => {
      if (data.place_id === 4) {
        data.water_level_danger = e.target.value;
      }
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const result = await axios
      .post('/api/warning', setup)
      .then(
        alert('변경사항이 적용되었습니다.'),
        props.history.push('/'),
        window.location.reload()
      );
  };
  return (
    <Form className="level-setting">
      <Title level={2}>위험 수위 설정</Title>
      <div className="level-form">
        <Row>
          <Col span={6}>
            <Card title="용당교" bordered={false}>
              <input type="number" min="0" onChange={one} />
            </Card>
          </Col>
          <Col span={6}>
            <Card title="조곡교" bordered={false}>
              <input type="number" min="0" onChange={two} />
            </Card>
          </Col>
          <Col span={6}>
            <Card title="천변주차장" bordered={false}>
              <input type="number" min="0" onChange={three} />
            </Card>
          </Col>
          <Col span={6}>
            <Card title="순천만 습지" bordered={false}>
              <input type="number" min="0" onChange={four} />
            </Card>
          </Col>
        </Row>
        <Button onClick={onSubmit} size="large">
          변경
        </Button>
      </div>
    </Form>
  );
}

export default withRouter(LevelSetting);
