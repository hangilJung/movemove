import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table } from 'antd';
import '../../../../Styles/LandingPage.css';

function LandingPageTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .post('/api/landing')
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
      <Table
        id="landingTable"
        columns={columns}
        dataSource={data}
        // 페이징 표시안함
        pagination={false}
      />
    </div>
  );
}

export default LandingPageTable;
