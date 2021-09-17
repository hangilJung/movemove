import React from 'react';
import { Table } from 'antd';
import moment from 'moment';

function DailyTable(props) {
  const columns = [
    {
      title: '시간',
      dataIndex: 'created_at',
      render: (created_at) => {
        return <p>{moment(created_at).format('MM월 DD일 HH시')}</p>;
      },
      key: 'created_at',
      align: 'center',
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

  return (
    <div className="daily-table">
      <Table
        columns={columns}
        dataSource={props.data}
        // 페이징 표시안함
        pagination={false}
        // 페이징 바텀센터
        // pagination={{ position: ['bottomCenter'] }}
        rowKey="created_at"
      />
    </div>
  );
}

export default DailyTable;
