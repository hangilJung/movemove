import React, { useState, useEffect } from 'react';
import { DatePicker, Form, Button, Select, Table } from 'antd';
import locale from 'antd/lib/date-picker/locale/ko_KR';
import moment from 'moment';
import accessToken from '../../../lib/accessToken';
import axios from 'axios';

function DailyTable(props) {
  const { Option } = Select;
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
      .post('/api/daily', { body })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, [placeId]);

  const handleChange = (value) => {
    setPlaceId(value);
  };

  const onSubmitHandler = (event) => {
    // page refresh를 막아줌
    event.preventDefault();

    axios
      .post('/api/daily', { body })
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  let firstDanger = [];

  let secondDanger = [];

  let thirdDanger = [];

  let fourthDanger = [];

  data.map((data) => {
    if (data.place_id === 1) {
      firstDanger.push(data.water_level_danger);
    } else if (data.place_id === 2) {
      secondDanger.push(data.water_level_danger);
    } else if (data.place_id === 3) {
      thirdDanger.push(data.water_level_danger);
    } else if (data.place_id === 4) {
      fourthDanger.push(data.water_level_danger);
    }
  });

  const columns = [
    {
      title: '시간',
      dataIndex: `created_at`,
      render: (created_at) => {
        return <text>{created_at}시</text>;
      },
      key: 'created_at',
      align: 'center',
      width: 250,
    },
    {
      title: '수위',
      dataIndex: 'water_level',
      render: (water_level) => {
        return <text>{water_level}M</text>;
      },
      key: 'water_level',
      align: 'center',
    },
    {
      title: '강수량',
      dataIndex: 'precipitation',
      render: (precipitation) => {
        return <text>{precipitation}mm</text>;
      },
      key: 'precipitation',
      align: 'center',
    },
    {
      title: '온도',
      dataIndex: 'temperature',
      render: (temperature) => {
        return <text>{temperature}℃</text>;
      },
      key: 'temperature',
      align: 'center',
    },
    {
      title: '습도',
      dataIndex: 'humidity',
      render: (humidity) => {
        return <text>{humidity}%</text>;
      },
      key: 'humidity',
      align: 'center',
    },
  ];

  return (
    <div
      style={{
        width: 1400,
        heigh: '100%',
        margin: '50px 0 0 100px',
        fontFamily: 'Noto Sans CJK KR',
        fontStyle: 'normal',
      }}
    >
      <Select
        defaultValue="순천만습지"
        style={{ width: 160, marginBottom: 30 }}
        onChange={handleChange}
      >
        <Option value="1">순천만습지</Option>
        <Option value="2">조곡교</Option>
        <Option value="3">용당교</Option>
        <Option value="4">원용당교</Option>
      </Select>
      <Form style={{ margin: '-50px 0 0 500px' }}>
        <Form.Item>
          <DatePicker
            locale={locale}
            placeholder={moment().format('YYYY년 MM월 DD일')}
            onChange={(date) => setStartDate(date)}
            picker="date"
            style={{ width: 160 }}
          />
          <DatePicker
            locale={locale}
            placeholder={moment().format('YYYY년 MM월 DD일')}
            onChange={(date) => setEndDate(date)}
            picker="date"
            style={{ width: 160 }}
          />

          <Button onClick={onSubmitHandler}>
            <p>조회</p>
          </Button>
        </Form.Item>
      </Form>

      <div
        style={{
          margin: '20px 0 30px 0px',
          height: 60,
          fontSize: 20,
          //   textAlign: 'center',
        }}
      >
        <p>일간 평균 데이터</p>
      </div>
      <Table
        bordered={true}
        columns={columns}
        dataSource={data}
        size="small"
        // 페이징 표시안함
        pagination={true}
        // 페이징 바텀센터
        pagination={{ position: ['bottomCenter'] }}
        rowKey="created_at"
      />
    </div>
  );
}

export default DailyTable;
