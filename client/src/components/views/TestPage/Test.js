/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from 'recharts';
import { Statistic, Row, Col, Card } from 'antd';
import '../../../Styles/Kiosk.css';

function FirstPoint() {
  const [data, setData] = useState([{}]);

  const dangerLevel = data[0]?.water_level_danger;

  const [StartDate, setStartDate] = useState(moment());
  const [EndDate, setEndDate] = useState(moment());
  const [CreatedAt, setCreatedAt] = useState(moment());

  let body = {
    placeId: 1,
    startDate: StartDate,
    endDate: EndDate,
    createdAt: CreatedAt,
  };

  useEffect(() => {
    axios
      .post('/api/kiosk/', { body })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const waterData = data[data.length - 1].water_level;
  const preData = data[data.length - 1].precipitation;
  const tempData = data[data.length - 1].temperature;
  const humData = data[data.length - 1].humidity;

  const formatXAxis = (tickItem) => {
    if (tickItem) return `${tickItem.slice(11, 13)}시`;
    else return tickItem;
  };

  const waterColor = waterData < 30 ? 'blue' : waterData < 50 ? 'green' : 'red';
  const preColor = preData < 30 ? 'blue' : preData < 50 ? 'green' : 'red';
  const tempColor = tempData < 30 ? 'blue' : tempData < 50 ? 'green' : 'red';
  const humColor = humData < 30 ? 'blue' : humData < 50 ? 'green' : 'red';

  return (
    <div>
      <ResponsiveContainer width="99%" height={250}>
        <LineChart
          data={data}
          margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="created_at" tickFormatter={formatXAxis} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="water_level"
            stroke="#0088FE"
            activeDot={{ r: 8 }}
            name="수위"
          />
          <Line
            type="monotone"
            dataKey="precipitation"
            stroke="#006633"
            name="강수량"
          />
          <Line
            type="monotone"
            dataKey="temperature"
            stroke="#ff7300"
            name="온도"
          />
          <Line
            type="monotone"
            dataKey="humidity"
            stroke="#82ca9d"
            name="습도"
          />
          <ReferenceLine
            y={dangerLevel}
            stroke="red"
            label={{
              position: 'top',
              value: '위험수위',
              fill: 'red',
              fontSize: 15,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
      <Row>
        <Col span={6}>
          <Card>
            <Statistic
              title="수위"
              value={waterData}
              precision={1}
              valueStyle={{ color: waterColor }}
            />
            {waterData < 20 ? (
              <p className="kiosk-low">수위 낮음</p>
            ) : waterData < 50 ? (
              <p className="kiosk-safe">적정수위</p>
            ) : (
              <p className="kiosk-waring">수위 높음</p>
            )}
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="강수량"
              value={preData}
              precision={1}
              valueStyle={{ color: preColor }}
            />
            {preData < 30 ? (
              <p className="kiosk-low">없음</p>
            ) : preData < 50 ? (
              <p className="kiosk-safe">안전</p>
            ) : (
              <p className="kiosk-waring">위험</p>
            )}
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="온도"
              value={tempData}
              precision={1}
              valueStyle={{ color: tempColor }}
            />
            {tempData < 30 ? (
              <p className="kiosk-low">온도 낮음</p>
            ) : tempData < 50 ? (
              <p className="kiosk-safe">적정 온도</p>
            ) : (
              <p className="kiosk-waring">온도 높음</p>
            )}
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="습도"
              value={humData}
              precision={1}
              valueStyle={{ color: humColor }}
            />
            {humData < 30 ? (
              <p className="kiosk-low">습도 낮음</p>
            ) : humData < 50 ? (
              <p className="kiosk-safe">적정 습도</p>
            ) : (
              <p className="kiosk-waring">습도 높음</p>
            )}
          </Card>
        </Col>
      </Row>
    </div>
  );
}
export default FirstPoint;
