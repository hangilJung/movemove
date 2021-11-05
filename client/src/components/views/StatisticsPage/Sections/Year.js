/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Label,
  ResponsiveContainer,
} from 'recharts';
import axios from 'axios';
import locale from 'antd/lib/date-picker/locale/ko_KR';
import moment from 'moment';
import { Row, Col, Card, DatePicker, Button, Radio, Form } from 'antd';
import { withRouter } from 'react-router';
import accessToken from '../../../../lib/accessToken';
import '../../../../Styles/Graph.css';

function YearGraph(props) {
  const [data, setData] = useState([]);

  const [placeId, setPlaceId] = useState('1');

  const [startDate, setStartDate] = useState(moment().format('YYYYMMDD'));
  const [endDate, setEndDate] = useState(moment().format('YYYYMMDD'));
  const [createdAt, setCreatedAt] = useState(moment().format());

  let body = {
    placeId: placeId,
    startDate: startDate,
    endDate: endDate,
    createdAt: createdAt,
  };
  useEffect(() => {
    accessToken(props);

    axios
      .post('/api/year/', { body })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

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
      .post('/api/year', { body })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  };

  const onPlaceHandler = async (e) => {
    // page refresh를 막아줌
    e.preventDefault();

    let body = {
      placeId: e.target.value,
      startDate: startDate,
      endDate: endDate,
    };

    axios
      .post('/api/year/', { body })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  };

  const formatXAxis = (tickItem) => {
    if (tickItem) return `${tickItem.slice(0, 4)}년`;
    else return tickItem;
  };

  return (
    <div className="bar-chart">
      <Form>
        <Form.Item>
          <Radio.Group onChange={onPlaceHandler} defaultValue="1">
            <Radio.Button value="1">용당교</Radio.Button>
            <Radio.Button value="2">풍덕교</Radio.Button>
            <Radio.Button value="3">천변주차장</Radio.Button>
            <Radio.Button value="4">순천만 생태공원</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item>
          <DatePicker
            locale={locale}
            placeholder={moment().format('YYYY년')}
            onChange={(date) => setStartDate(date)}
            picker="year"
          />
          <DatePicker
            locale={locale}
            placeholder={moment().format('YYYY년')}
            onChange={(date) => setEndDate(date)}
            picker="year"
          />
          <Button onClick={onSubmitHandler}>조회</Button>
        </Form.Item>
      </Form>
      <Row gutter={16}>
        <Col span={12}>
          <Card title="수위" bordered={false}>
            <ResponsiveContainer width="95%" height={300}>
              <BarChart
                data={data}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
                maxBarSize={100}
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
            <ResponsiveContainer width="95%" height={300}>
              <BarChart
                data={data}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
                maxBarSize={100}
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
            <ResponsiveContainer width="95%" height={300}>
              <BarChart
                data={data}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
                maxBarSize={100}
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
            <ResponsiveContainer width="95%" height={300}>
              <BarChart
                data={data}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
                maxBarSize={100}
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

export default withRouter(YearGraph);
