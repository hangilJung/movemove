/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router';

import axios from 'axios';
import moment from 'moment';
import { Typography, Row, Col, Card } from 'antd';
import accessToken from '../../../lib/accessToken';
import FirstPoint from './Sections/FirstPoint';
import SecondPoint from './Sections/SecondPoint';
import ThirdPoint from './Sections/ThirdPoint';
import FourthPoint from './Sections/FourthPoint';

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

  return (
    <div
      style={{
        zIndex: 9999,
        padding: '0 0px 0 90px',
        height: '100%',
        minWidth: 1400,
      }}
    >
      <Row>
        <Row gutter={50}>
          {/* -----------------1번----------- */}
          <Col span={8}>
            <Col>
              <Card
                style={{
                  width: 400,
                  boxShadow: '5px 5px 10px #bbb',
                  height: 230,
                  borderRadius: 30,
                }}
              >
                <div
                  style={{
                    width: '100%',
                    height: 200,
                    backgroundImage: 'url(/img/순천만선착장.png)',
                    backgroundSize: 'cover',
                    marginTop: -10,
                  }}
                ></div>
              </Card>
            </Col>
            <Col>
              <Card
                style={{
                  width: 400,
                  height: 180,
                  borderRadius: 30,
                  marginTop: 5,
                  boxShadow: '5px 5px 10px #bbb',
                }}
              >
                <FirstPoint />
              </Card>
            </Col>
          </Col>

          {/* -----------------2번----------- */}
          <Col span={8}>
            <Col span={6}>
              <Card
                style={{
                  width: 400,
                  boxShadow: '5px 5px 10px #bbb',
                  height: 230,
                  borderRadius: 30,
                }}
              >
                <div
                  style={{
                    width: '100%',
                    height: 200,
                    backgroundImage: 'url(/img/조곡교.png)',
                    backgroundSize: 'cover',
                    marginTop: -10,
                  }}
                ></div>
              </Card>
            </Col>
            <Col>
              <Card
                style={{
                  width: 400,
                  height: 180,
                  borderRadius: 30,
                  marginTop: 5,
                  boxShadow: '5px 5px 10px #bbb',
                }}
              >
                <SecondPoint />
              </Card>
            </Col>
          </Col>

          {/* -----------------3번----------- */}
          <Col span={8}>
            <Col>
              <Card
                style={{
                  width: 400,
                  boxShadow: '5px 5px 10px #bbb',
                  height: 230,
                  borderRadius: 30,
                }}
              >
                <div
                  style={{
                    width: '100%',
                    height: 200,
                    backgroundImage: 'url(/img/용당교.png)',
                    backgroundSize: 'cover',
                    marginTop: -10,
                  }}
                ></div>
              </Card>
            </Col>
            <Col span={6}>
              <Card
                style={{
                  width: 400,
                  height: 180,
                  borderRadius: 30,
                  marginTop: 5,
                  boxShadow: '5px 5px 10px #bbb',
                }}
              >
                <ThirdPoint />
              </Card>
            </Col>
          </Col>
        </Row>

        <Row gutter={50} style={{ marginTop: 20 }}>
          {/* -----------------4번----------- */}
          <Col span={8}>
            <Col>
              <Card
                style={{
                  width: 400,
                  boxShadow: '5px 5px 10px #bbb',
                  height: 230,
                  borderRadius: 30,
                }}
              >
                <div
                  style={{
                    width: '100%',
                    height: 200,
                    backgroundImage: 'url(/img/원용당교.png)',
                    backgroundSize: 'cover',
                    marginTop: -10,
                  }}
                ></div>
              </Card>
            </Col>
            <Col span={8}>
              <Card
                style={{
                  width: 400,
                  height: 180,
                  borderRadius: 30,
                  marginTop: 5,
                  boxShadow: '5px 5px 10px #bbb',
                }}
              >
                <FourthPoint />
              </Card>
            </Col>
          </Col>
        </Row>
      </Row>
    </div>
  );
}

export default withRouter(DailyStatisticsPage);
