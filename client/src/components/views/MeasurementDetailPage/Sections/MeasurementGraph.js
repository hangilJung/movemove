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

function MeasurementGraph() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .post('/api/detail')
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div id="landingGraph">
      <h2>일간 변화량 그래프 형식</h2>
      <ResponsiveContainer width="100%" height={300}>
        <ComposedChart data={data} style={{ margin: 'auto', padding: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="created_at" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area
            name="수위"
            type="monotone"
            dataKey="water_level"
            activeDot={{ r: 8 }}
          />
          <Line
            name="강수량"
            dataKey="precipitation"
            stroke="#82ca9d"
            activeDot={{ r: 8 }}
          />
          <Bar name="온도" dataKey="temperature" fill="#8884d8" />
          {/* <Brush /> */}
          <ReferenceLine y={25} stroke="red" label={'위험수위'} />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}

export default MeasurementGraph;
