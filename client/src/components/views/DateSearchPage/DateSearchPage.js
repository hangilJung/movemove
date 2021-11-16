/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import DateSearchGraph from './Sections/DateSearchGraph';
import { withRouter } from 'react-router';
import axios from 'axios';
import { Radio, DatePicker, Button, Form, Typography } from 'antd';
import moment from 'moment';
import 'moment/locale/ko';
import locale from 'antd/lib/date-picker/locale/ko_KR';
import '../../../Styles/Page.css';
import '../../../lib/accessToken';
import accessToken from '../../../lib/accessToken';

function DateSearchPage(props) {
  const [data, setData] = useState([]);
  const [refreshData, setrefreshData] = useState(0);

  const [placeId, setPlaceId] = useState('1');
  const [startDate, setStartDate] = useState(moment().format());
  const [endDate, setEndDate] = useState(moment().format());
  const [createdAt, setCreatedAt] = useState(moment().format());

  const { Title } = Typography;

  let body = {
    placeId: placeId,
    startDate: startDate,
    endDate: endDate,
    createdAt: createdAt,
  };

  useEffect(() => {
    accessToken(props);

    axios
      .post('/api/search/', { body })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, [refreshData]);

  const onSubmitHandler = (event) => {
    // page refresh를 막아줌
    event.preventDefault();

    body = {
      placeId: placeId,
      startDate: startDate,
      endDate: endDate,
      createdAt: createdAt,
    };

    axios
      .post('/api/search', { body })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  };

  const onSelect = (e) => {
    body = {
      placeId: e.target.value,
      startDate: startDate,
      endDate: endDate,
      createdAt: createdAt,
    };

    axios
      .post('/api/search', { body })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  };

  let searchDate = '';

  const onSearchBtn = (event) => {
    event.preventDefault();
    searchDate = event.currentTarget.value;

    body = {
      placeId: placeId,
      startDate: searchDate,
      endDate: endDate,
      createdAt: createdAt,
    };

    axios
      .post('/api/search', { body })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="search-page">
      <br />
      <br />
      <Title level={2}>날짜별 조회</Title>
      <Form>
        <Form.Item>
          <Radio.Group onChange={onSelect} defaultValue="1">
            <Radio.Button value="1">조곡교</Radio.Button>
            <Radio.Button value="2">풍덕교</Radio.Button>
            <Radio.Button value="3">천변주차장</Radio.Button>
            <Radio.Button value="4">순천만 생태공원</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item>
          <DatePicker
            locale={locale}
            placeholder={moment().format('YY년 MM월 DD일')}
            onChange={(date) => setStartDate(date)}
          />
          <DatePicker
            placeholder={moment().format('YY년 MM월 DD일')}
            locale={locale}
            onChange={(date) => setEndDate(date)}
          />
          <Button onClick={onSubmitHandler}>조회</Button>
        </Form.Item>
        <Form.Item>
          <Button
            onClick={onSearchBtn}
            value={moment().subtract(1, 'months').format('YYYY-MM-DD')}
          >
            1개월
          </Button>
          <Button
            onClick={onSearchBtn}
            value={moment().subtract(3, 'months').format('YYYY-MM-DD')}
          >
            3개월
          </Button>
          <Button
            onClick={onSearchBtn}
            value={moment().subtract(1, 'years').format('YYYY-MM-DD')}
          >
            1년
          </Button>
        </Form.Item>

        <DateSearchGraph data={data} />
        <br />
      </Form>
    </div>
  );
}

export default withRouter(DateSearchPage);
