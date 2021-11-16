import React, { useState, useEffect } from 'react';
import { Table, Radio, Form, DatePicker, Button } from 'antd';
import locale from 'antd/lib/date-picker/locale/ko_KR';
import moment from 'moment';
import accessToken from '../../../../lib/accessToken';
import axios from 'axios';
import { CSVLink } from 'react-csv';

function RiverTable(props) {
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
  // 날짜선택 submit함수
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
      .post('/api/daily', { body })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  };
  // table 컬럼
  const columns = [
    {
      title: '시간',
      dataIndex: 'created_at',
      render: (created_at) => {
        return <p>{moment(created_at).format('LT')}</p>;
      },
      key: 'created_at',
      align: 'center',
      width: 250,
    },
    {
      title: '수위',
      dataIndex: 'water_level',
      key: 'water_level',
      align: 'center',
    },
    {
      title: '강수량',
      dataIndex: 'precipitation',
      key: 'precipitation',
      align: 'center',
    },
    {
      title: '온도',
      dataIndex: 'temperature',
      key: 'temperature',
      align: 'center',
    },
    {
      title: '습도',
      dataIndex: 'humidity',
      key: 'humidity',
      align: 'center',
    },
  ];
  // console.log(props.data);

  return (
    <div className="daily-table">
      <Radio.Group onChange={onSelect} defaultValue="1">
        <Radio.Button value="1">조곡교</Radio.Button>
        <Radio.Button value="2">풍덕교</Radio.Button>
        <Radio.Button value="3">천변주차장</Radio.Button>
        <Radio.Button value="4">순천만 생태공원</Radio.Button>
      </Radio.Group>
      <Form.Item>
        <DatePicker
          locale={locale}
          placeholder={moment().format('YYYY년')}
          onChange={(date) => setStartDate(date)}
          picker="date"
        />
        <DatePicker
          locale={locale}
          placeholder={moment().format('YYYY년')}
          onChange={(date) => setEndDate(date)}
          picker="date"
        />
        <Button onClick={onSubmitHandler}>조회</Button>
      </Form.Item>

      <Table
        bordered={true}
        columns={columns}
        dataSource={data}
        size="small"
        // 페이징 표시안함
        pagination={false}
        // 페이징 바텀센터
        // pagination={{ position: ['bottomCenter'] }}
        rowKey="created_at"
      />
    </div>
  );
}

export default RiverTable;
