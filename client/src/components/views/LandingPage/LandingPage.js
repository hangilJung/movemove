/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router';

import axios from 'axios';
import moment from 'moment';
import { Radio, Typography, Row, Col, Card } from 'antd';
import accessToken from '../../../lib/accessToken';
import FirstPoint from './Sections/FirstPoint';
import SecondPoint from './Sections/SecondPoint';
import ThirdPoint from './Sections/ThirdPoint';
import FourthPoint from './Sections/FourthPoint';
import { GiRadarSweep } from 'react-icons/gi';
import { ImWarning } from 'react-icons/im';
import { FcSettings } from 'react-icons/fc';

function DailyStatisticsPage(props) {
  const { Title } = Typography;
  const [data, setData] = useState([{}]);

  const [placeId, setPlaceId] = useState('1');
  const [startDate, setStartDate] = useState(moment());
  const [endDate, setEndDate] = useState(moment());
  const [createdAt, setCreatedAt] = useState(moment());

  let body = {
    placeId: placeId,
    startDate: startDate,
    endDate: endDate,
    createdAt: createdAt,
  };

  useEffect(() => {
    accessToken(props);

    axios
      .post('/api/daily/', { body })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const onSelect = (e) => {
    body = {
      placeId: e.target.value,
      startDate: startDate,
      endDate: endDate,
      createdAt: createdAt,
    };

    axios
      .post('/api/daily', { body })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div>
        <Row gutter={90}>
          <Col span={6}>
            <Card
              style={{
                width: '100%',
                height: 250,
                border: '3px solid #e6e6e6',
                borderRadius: 30,
              }}
            >
              <FirstPoint />
            </Card>
          </Col>
          <Col span={6}>
            <Card
              style={{
                width: '100%',
                height: 250,
                border: '3px solid #e6e6e6',
                borderRadius: 30,
              }}
            >
              <SecondPoint />
            </Card>
          </Col>
          <Col span={6}>
            <Card
              style={{
                width: '100%',
                height: 250,
                border: '3px solid #e6e6e6',
                borderRadius: 30,
              }}
            >
              <ThirdPoint />
            </Card>
          </Col>
          <Col span={6}>
            <Card
              style={{
                width: '100%',
                height: 250,
                border: '3px solid #e6e6e6',
                borderRadius: 30,
              }}
            >
              <FourthPoint />
            </Card>
          </Col>
          {/* -------------------------------2번째----------- */}
          <Col span={6} style={{ paddingTop: 10 }}>
            <Card
              style={{
                width: '100%',
                height: 250,
                border: '3px solid #e6e6e6',
                borderRadius: 30,
                backgroundImage: 'url(/img/순천만선착장.png)',
                backgroundSize: 'cover',
              }}
            ></Card>
          </Col>
          <Col span={6} style={{ paddingTop: 10 }}>
            <Card
              style={{
                width: '100%',
                height: 250,
                border: '3px solid #e6e6e6',
                borderRadius: 30,
                backgroundImage: 'url(/img/조곡교.png)',
                backgroundSize: 'cover',
              }}
            ></Card>
          </Col>
          <Col span={6} style={{ paddingTop: 10 }}>
            <Card
              style={{
                width: '100%',
                height: 250,
                border: '3px solid #e6e6e6',
                borderRadius: 30,
                backgroundImage: 'url(/img/용당교.png)',
                backgroundSize: 'cover',
              }}
            ></Card>
          </Col>
          <Col span={6} style={{ paddingTop: 10 }}>
            <Card
              style={{
                width: '100%',
                height: 250,
                border: '3px solid #e6e6e6',
                borderRadius: 30,
                backgroundImage: 'url(/img/원용당교.png)',
                backgroundSize: 'cover',
              }}
            ></Card>
          </Col>
          <Col span={6} style={{ paddingTop: 10 }}>
            <Card
              style={{
                width: '100%',
                height: 250,
                border: '3px solid #e6e6e6',
                borderRadius: 30,
              }}
            ></Card>
          </Col>
          <Col span={6} style={{ paddingTop: 10 }}>
            <Card
              style={{
                width: '100%',
                height: 250,
                border: '3px solid #e6e6e6',
                borderRadius: 30,
              }}
            ></Card>
          </Col>
          <Col span={6} style={{ paddingTop: 10 }}>
            <Card
              style={{
                width: '100%',
                height: 250,
                border: '3px solid #e6e6e6',
                borderRadius: 30,
              }}
            ></Card>
          </Col>
          <Col span={6} style={{ paddingTop: 10 }}>
            <Card
              style={{
                width: '100%',
                height: 250,
                border: '3px solid #e6e6e6',
                borderRadius: 30,
              }}
            ></Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default withRouter(DailyStatisticsPage);
