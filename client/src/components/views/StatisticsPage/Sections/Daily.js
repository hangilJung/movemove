/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import { Radio } from 'antd';
import accessToken from '../../../../lib/accessToken';
import locale from 'antd/lib/date-picker/locale/ko_KR';
import {
  Bar,
  BarChart,
  XAxis,
  Label,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';
import { Row, Col, Card, DatePicker, Button, Form } from 'antd';
import '../../../../Styles/Graph.css';

function Daily(props) {
  const [data, setData] = useState([]);

  const [placeId, setPlaceId] = useState('1');

  const [startDate, setStartDate] = useState(moment().format());
  const [endDate, setEndDate] = useState(moment().format());
  const [createdAt, setCreatedAt] = useState(moment().format());

  let body = {
    placeId: placeId,
    startDate: startDate,
    endDate: endDate,
  };
  useEffect(() => {
    accessToken(props);

    axios
      .post('/api/daily/', { body })
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const onPlaceHandler = async (e) => {
    // page refresh를 막아줌
    e.preventDefault();

    let body = {
      placeId: e.target.value,
      startDate: startDate,
      endDate: endDate,
    };

    axios
      .post('/api/kiosk/', { body })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  };

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
      .post('/api/kiosk', { body })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  };

  const formatXAxis = (tickItem) => {
    if (tickItem) return `${tickItem.slice(5, 7)}월`;
    else return tickItem;
  };

  return (
    <div className="radar-chart">
      <Form.Item>
        <Radio.Group onChange={onPlaceHandler} defaultValue="1">
          <Radio.Button value="1">원용당교</Radio.Button>
          <Radio.Button value="2">용당교</Radio.Button>
          <Radio.Button value="3">조곡교</Radio.Button>
          <Radio.Button value="4">순천만 생태공원</Radio.Button>
        </Radio.Group>
      </Form.Item>

      <Form.Item>
        <DatePicker
          locale={locale}
          placeholder={moment().format('YYYY년 MM월 DD일')}
          onChange={(date) => setStartDate(date)}
          picker="daily"
        />
        <DatePicker
          locale={locale}
          placeholder={moment().format('YYYY년 MM월 DD일')}
          onChange={(date) => setEndDate(date)}
          picker="daily"
        />
        <Button onClick={onSubmitHandler}>조회</Button>
      </Form.Item>
      <Row gutter={16}>
        <Col span={12}>
          <Card title="수위" bordered={false}>
            <ResponsiveContainer width={750} height={300}>
              <BarChart
                data={data}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="created_at"
                  dx={10}
                  tickFormatter={formatXAxis}
                  allowDataOverflow={false}
                />
                <YAxis yAxisId="left" orientation="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Legend />
                <Bar
                  yAxisId="left"
                  name="수위"
                  dataKey="water_level"
                  fill="#8884d8"
                  label={{ position: 'top' }}
                />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </Col>
        <Col span={12}>
          <Card title="강수량" bordered={false}>
            <ResponsiveContainer width={750} height={300}>
              <BarChart
                data={data}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="created_at"
                  dx={10}
                  tickFormatter={formatXAxis}
                  allowDataOverflow={false}
                />
                <YAxis yAxisId="left" orientation="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Legend />
                <Bar
                  yAxisId="left"
                  name="강수량"
                  dataKey="precipitation"
                  fill="#82ca9d"
                  label={{ position: 'top' }}
                />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </Col>
        <Col span={12}>
          <Card title="온도" bordered={false}>
            <ResponsiveContainer width={750} height={300}>
              <BarChart
                data={data}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="created_at"
                  dx={10}
                  tickFormatter={formatXAxis}
                  allowDataOverflow={false}
                />
                <YAxis yAxisId="left" orientation="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Legend />
                <Bar
                  yAxisId="left"
                  name="온도"
                  dataKey="temperature"
                  fill="#ff7300"
                  label={{ position: 'top' }}
                />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </Col>
        <Col span={12}>
          <Card title="습도" bordered={false}>
            <ResponsiveContainer width={750} height={300}>
              <BarChart
                data={data}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="created_at"
                  dx={10}
                  tickFormatter={formatXAxis}
                  allowDataOverflow={false}
                />
                <YAxis yAxisId="left" orientation="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Legend />
                <Bar
                  yAxisId="left"
                  name="습도"
                  dataKey="humidity"
                  fill="#8B0000"
                  label={{ position: 'top' }}
                />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Daily;
