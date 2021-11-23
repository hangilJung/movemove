import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import Daily from './Sections/Daily';
import Month from './Sections/Month';
import Year from './Sections/Year';
import accessToken from '../../../lib/accessToken';
import { Select, Tabs } from 'antd';
import { GiBodyBalance } from 'react-icons/gi';

function StatisticsPage() {
  const [data, setData] = useState([{}]);
  const [placeId, setPlaceId] = useState('');
  const [startDate, setStartDate] = useState(moment().format());
  const [endDate, setEndDate] = useState(moment().format());
  const [createdAt, setCreatedAt] = useState(moment().format());

  const { Option } = Select;
  const { TabPane } = Tabs;

  let body = {
    placeId: placeId,
    startDate: startDate,
    endDate: endDate,
    createdAt: createdAt,
  };

  // useEffect(() => {
  //   accessToken(props);

  //   axios
  //     .post('/api/daily', { body })
  //     .then((res) => {
  //       setData(res.data);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  const handleChange = (value) => {
    setPlaceId(value);
    axios
      .post('/api/daily', { body })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div
      style={{
        width: 1400,
        height: 'auto',
        display: 'inline-block',
        marginLeft: 100,
      }}
    >
      <Tabs defaultActiveKey="1" type="card">
        <TabPane tab="일간" key="1">
          <Daily value={placeId} />
        </TabPane>
        <TabPane tab="월간" key="2">
          <Month />
        </TabPane>
        <TabPane tab="연간" key="3">
          <Year />
        </TabPane>
      </Tabs>
    </div>
  );
}

export default StatisticsPage;
