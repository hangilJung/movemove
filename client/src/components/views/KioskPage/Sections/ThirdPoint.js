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

function ThirdPoint() {
  const [data, setData] = useState([]);

  const dangerLevel = data[0]?.water_level_danger;

  const [StartDate, setStartDate] = useState(moment());
  const [EndDate, setEndDate] = useState(moment());
  const [CreatedAt, setCreatedAt] = useState(moment());

  let body = {
    placeId: 3,
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

  const formatXAxis = (tickItem) => {
    if (tickItem) return `${tickItem.slice(11, 13)}시`;
    else return tickItem;
  };

  return (
    <div>
      <ResponsiveContainer width="99%" height={250}>
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="
          "
            tickFormatter={formatXAxis}
          />
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
    </div>
  );
}
export default ThirdPoint;
