/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router';
import DailyGraph from './Sections/DailyGraph';
import DailyTable from './Sections/DailyTable';
import axios from 'axios';
import moment from 'moment';
import { Radio, Typography, Row, Col, Card } from 'antd';
import '../../../Styles/Page.css';
import '../../../Styles/Card.css';
import accessToken from '../../../lib/accessToken';
import FirstPoint from './Sections/FirstPoint';
import SecondPoint from './Sections/SecondPoint';
import ThirdPoint from './Sections/ThirdPoint';
import FourthPoint from './Sections/FourthPoint';
import { GiRadarSweep } from 'react-icons/gi';
import { ImWarning } from 'react-icons/im';

function DailyStatisticsPage(props) {
  const { Title } = Typography;
  const [data, setData] = useState([{}]);

  const [placeId, setPlaceId] = useState('1');
  const [startDate, setStartDate] = useState(moment());
  const [endDate, setEndDate] = useState(moment());
  const [createdAt, setCreatedAt] = useState(moment());

  const today = () => {
    const year = moment().format('YYYY');
    const month = moment().format('MM');
    const day = moment().format('DD');

    return year + '년 ' + month + '월 ' + day + '일 ';
  };

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
    <div className="daily-page">
      <Title level={4} style={{ fontSize: '5vh' }}>{`${today(
        moment()
      )}`}</Title>
      {/* <br />
      <Row gutter={16}>
        <Col span={12}>
          <Card className="main-box">
            <div className="main-icon">
              <div
                style={{
                  float: 'left',
                  fontSize: '20vh',
                  width: '50vh',
                }}
              >
                <GiRadarSweep />
              </div>
              <div
                style={{
                  float: 'right',
                  width: '50vh',
                  margin: '0 auto',
                  fontSize: '2.9vh',
                  paddingTop: '10vh',
                }}
              >
                측정위치 4개소
              </div>
            </div>
          </Card>
        </Col>
        <Col span={12}>
          <Card className="main-box">
            <div className="main-icon">
              <div
                style={{
                  float: 'left',
                  width: '50vh',
                  fontSize: '20vh',
                  color: '#FFDD15',
                }}
              >
                <ImWarning />
              </div>
              <div
                style={{
                  float: 'right',
                  width: '50vh',
                  padding: '5vh 0 0 1vh',
                }}
              >
                <ul>
                  <li style={{ color: '#2F88FF' }}>안전 : 1개소</li>
                  <li style={{ color: '#FFDD15' }}>주의 : 2개소</li>
                  <li style={{ color: '#FF0202' }}>위험 : 1개소</li>
                </ul>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
      <br />
      <Row gutter={170}>
        <Col span={6}>
          <FirstPoint />
        </Col>
        <Col span={6}>
          <SecondPoint />
        </Col>
        <Col span={6}>
          <ThirdPoint />
        </Col>
        <Col span={6}>
          <FourthPoint />
        </Col>
      </Row> */}
    </div>
  );
}

export default withRouter(DailyStatisticsPage);
