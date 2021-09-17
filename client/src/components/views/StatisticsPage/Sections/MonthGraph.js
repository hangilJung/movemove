/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import { Radio } from 'antd';
import accessToken from '../../../../lib/accessToken';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { Row, Col, Card } from 'antd';
import '../../../../Styles/Graph.css';

function MonthGraph(props) {
  const [data, setData] = useState([]);

  const [placeId, setPlaceId] = useState('1');

  const [startDate, setStartDate] = useState(
    moment('2020-01-01').format('YYYY-MM-DD')
  );
  const [endDate, setEndDate] = useState(
    moment('2020-12-31').format('YYYY-MM-DD')
  );

  let body = {
    placeId: placeId,
    startDate: startDate,
    endDate: endDate,
  };
  useEffect(() => {
    accessToken(props);

    axios
      .post('/api/month/', { body })
      .then((res) => {
        setData(res.data);
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
      .post('/api/month/', { body })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="radar-chart">
      <div>
        <Radio.Group onChange={onPlaceHandler} defaultValue="">
          <Radio.Button value="1">용당교</Radio.Button>
          <Radio.Button value="2">풍덕교</Radio.Button>
          <Radio.Button value="3">천변주차장</Radio.Button>
          <Radio.Button value="4">순천만 생태공원</Radio.Button>
        </Radio.Group>
      </div>
      <Row gutter={16}>
        <Col span={12}>
          <Card title="수위" bordered={false}>
            <ResponsiveContainer width="100%" height={500}>
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                <PolarGrid />
                <PolarAngleAxis dataKey="month" />
                <PolarRadiusAxis angle={30} />
                <Radar
                  name="수위"
                  dataKey="water_level"
                  stroke="#8884d8"
                  fill="#8884d8"
                  fillOpacity={0.6}
                />

                <Tooltip />
                <Legend />
              </RadarChart>
            </ResponsiveContainer>
          </Card>
        </Col>
        <Col span={12}>
          <Card title="강수량" bordered={false}>
            <ResponsiveContainer width="100%" height={500}>
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                <PolarGrid />
                <PolarAngleAxis dataKey="month" />
                <PolarRadiusAxis angle={30} />
                <Radar
                  name="강수량"
                  dataKey="precipitation"
                  stroke="#82ca9d"
                  fill="#82ca9d"
                  fillOpacity={0.6}
                />

                <Tooltip />
                <Legend />
              </RadarChart>
            </ResponsiveContainer>
          </Card>
        </Col>
        <Col span={12}>
          <Card title="온도" bordered={false}>
            <ResponsiveContainer width="100%" height={500}>
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                <PolarGrid />
                <PolarAngleAxis dataKey="month" />
                <PolarRadiusAxis angle={30} />
                <Radar
                  name="온도"
                  dataKey="temperature"
                  stroke="#ff7300"
                  fill="#ff7300"
                  fillOpacity={0.6}
                />

                <Tooltip />
                <Legend />
              </RadarChart>
            </ResponsiveContainer>
          </Card>
        </Col>
        <Col span={12}>
          <Card title="습도" bordered={false}>
            <ResponsiveContainer width="100%" height={500}>
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                <PolarGrid />
                <PolarAngleAxis dataKey="month" />
                <PolarRadiusAxis angle={30} />
                <Radar
                  name="습도"
                  dataKey="humidity"
                  stroke="#8B0000"
                  fill="#8B0000"
                  fillOpacity={0.6}
                />

                <Tooltip />
                <Legend />
              </RadarChart>
            </ResponsiveContainer>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default MonthGraph;
