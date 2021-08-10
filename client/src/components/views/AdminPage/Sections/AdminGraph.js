import React, { useState, useEffect } from 'react';
import {
  LineChart,
  Line,
  AreaChart,
  Bar,
  BarChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  //   Brush,
  ResponsiveContainer,
  ReferenceLine,
} from 'recharts';
import axios from 'axios';

function AdminGraph() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .post('/api/sensor')
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div id="landingGraph">
      <h1>AdminPage</h1>
      <h4>일간 변화량</h4>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="created_at" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            name="수위"
            type="monotone"
            dataKey="water_level"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <ReferenceLine y={40} stroke="red" label={'위험수위'} />
        </LineChart>
      </ResponsiveContainer>
      <br />
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="created_at" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area
            name="강수량"
            type="monotone"
            dataKey="precipitation"
            stroke="#82ca9d"
            activeDot={{ r: 8 }}
          />
        </AreaChart>
      </ResponsiveContainer>
      <br />
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="created_at" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar name="온도" dataKey="temperature" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default AdminGraph;
