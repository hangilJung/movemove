import React, { useState, useEffect } from 'react';
import {
  ComposedChart,
  Line,
  Bar,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
} from 'recharts';
import axios from 'axios';

function LandingPageGraph() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .post('/api/landing')
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div id="landingGraph">
      <h1>LandingPageChart</h1>
      <h4>일간 변화량</h4>
      <ResponsiveContainer width="100%" height={300}>
        <ComposedChart data={data} style={{ margin: 'auto', padding: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="created_at" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area
            name="수위"
            type="monotone"
            dataKey="water_level"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line
            name="강수량"
            dataKey="precipitation"
            stroke="#82ca9d"
            activeDot={{ r: 8 }}
          />
          <Bar name="온도" dataKey="temperature" fill="#CC6600" />
          {/* <Brush /> */}
          <ReferenceLine y={25} stroke="red" label={'위험'} />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}

export default LandingPageGraph;
