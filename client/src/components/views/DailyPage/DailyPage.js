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
import accessToken from '../../../lib/accessToken';
import FirstPoint from './Sections/FirstPoint';
import SecondPoint from './Sections/SecondPoint';
import ThirdPoint from './Sections/ThirdPoint';
import FourthPoint from './Sections/FourthPoint';

function DailyStatisticsPage(props) {
  const { Title } = Typography;
  const [data, setData] = useState([]);

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
  console.log(data);

  return (
    <div className="daily-page">
      {/* <Title level={2}>일간 변화량</Title>
      <Title level={4}>{`${today(moment())}`}</Title>
      <br /> */}

      {/* <Radio.Group onChange={onSelect} defaultValue="1">
        <Radio.Button value="1">용당교</Radio.Button>
        <Radio.Button value="2">풍덕교</Radio.Button>
        <Radio.Button value="3">천변주차장</Radio.Button>
        <Radio.Button value="4">순천만 생태공원</Radio.Button>
      </Radio.Group> */}
      <br />

      <Row gutter={16}>
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
      </Row>
    </div>
  );
}

export default withRouter(DailyStatisticsPage);
