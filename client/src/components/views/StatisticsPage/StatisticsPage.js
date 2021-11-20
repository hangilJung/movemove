import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import Daily from './Sections/Daily';
import Month from './Sections/Month';
import Year from './Sections/Year';
import accessToken from '../../../lib/accessToken';
import { Select, Tabs } from 'antd';

function StatisticsPage(props) {
  const [data, setData] = useState([{}]);
  const [refreshData, setrefreshData] = useState(0);
  const [placeId, setPlaceId] = useState('1');
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

  useEffect(() => {
    accessToken(props);

    axios
      .post('/api/minute', { body })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const onPointBtn = (value) => {
    body = {
      placeId: value,
      startDate: startDate,
      endDate: endDate,
      createdAt: createdAt,
    };
    console.log(body);
    axios
      .post('/api/minute', { body })
      .then((res) => {
        setData(res.data);
        console.log(res.data);
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
      <Select
        defaultValue="지역"
        style={{ width: 120, marginBottom: 30 }}
        onChange={onPointBtn}
      >
        <Option value="1">순천만습지</Option>
        <Option value="2">조곡교</Option>
        <Option value="3">용당교</Option>
        <Option value="4">원용당교</Option>
      </Select>

      <Tabs defaultActiveKey="1" type="card">
        <TabPane tab="일간" key="1" style={{}}>
          <Daily />
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
