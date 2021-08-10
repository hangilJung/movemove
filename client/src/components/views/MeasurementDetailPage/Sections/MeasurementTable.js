import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import axios from 'axios';

function MeasurementTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .post('/api/detail')
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const columns = [
    {
      title: '시간',
      dataIndex: 'created_at',
      key: 'created_at',
    },
    {
      title: '수위',
      dataIndex: 'water_level',
      key: 'water_level',
    },
    {
      title: '강수량',
      dataIndex: 'precipitation',
      key: 'precipitation',
    },
    {
      title: '온도',
      dataIndex: 'temperature',
      key: 'temperature',
    },
  ];
  return (
    <div>
      <h2>일간 변화량 표 형식</h2>
      <Table
        columns={columns}
        dataSource={data}
        // 페이징 센터
        pagination={{ position: ['bottomCenter'] }}
      />
    </div>
  );
}

export default MeasurementTable;
