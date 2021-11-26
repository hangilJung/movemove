import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import moment from 'moment';
import accessToken from '../../../lib/accessToken';
import axios from 'axios';

function FirstMonitorTable(props) {
  const [data, setData] = useState([{}]);

  const [placeId, setPlaceId] = useState('1');
  const [startDate, setStartDate] = useState(moment());
  const [endDate, setEndDate] = useState(moment());
  const [createdAt, setCreatedAt] = useState(moment().format());

  let body = {
    placeId: 1,
    startDate: startDate,
    endDate: endDate,
    createdAt: createdAt,
  };

  useEffect(() => {
    accessToken(props);

    axios
      .post('/api/minute/', { body })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  let waterData = [];
  let preData = [];
  let tempData = [];
  let humData = [];
  let createdDate = [];

  data.map((data) => {
    waterData.push(data.water_level);
  });
  data.map((data) => {
    preData.push(data.precipitation);
  });
  data.map((data) => {
    tempData.push(data.temperature);
  });
  data.map((data) => {
    humData.push(data.humidity);
  });
  data.map((data) => {
    createdDate.push(data.created_at);
  });

  const dateXaxis = createdDate.map((createdAt) => {
    return moment(createdAt).format('HH시 mm분');
  });

  const columns = [
    {
      title: '시간',
      dataIndex: 'created_at',
      // render: (created_at) => {
      //   return <p>{moment(created_at).format('LT')}</p>;
      // },
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
  // console.log(props.data);

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
      <div
        style={{
          margin: '20px 0 30px -30px',
          height: 60,
          fontSize: 30,
          textAlign: 'center',
        }}
      >
        <p>순천만 습지 실시간 모니터링</p>
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

export default FirstMonitorTable;
