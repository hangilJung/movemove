import React, { useState, useEffect } from 'react';
import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Brush,
  ReferenceLine,
  ResponsiveContainer,
} from 'recharts';
import accessToken from '../../../../lib/accessToken';
import { withRouter } from 'react-router-dom';
import '../../../../Styles/Graph.css';
import moment from 'moment';
import axios from 'axios';

function DailyGraph(props) {
  const [data, setData] = useState([]);

  const [placeId, setPlaceId] = useState('1');
  const [startDate, setStartDate] = useState(moment());
  const [endDate, setEndDate] = useState(moment());
  const [createdAt, setCreatedAt] = useState(moment());

  const formatXAxis = (tickItem) => {
    if (tickItem) return `${tickItem.slice(11, 13)}시`;
    else return tickItem;
  };

  let body = {
    placeId: placeId,
    startDate: startDate,
    endDate: endDate,
    createdAt: createdAt,
  };

  useEffect(() => {
    accessToken(props);

    axios
      .post('/api/daily/', { body })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  // const dangerLevel = props.data[0]?.water_level_danger;

  console.log(data);

  return (
    <div className="daily-chart">
      <ResponsiveContainer width="95%" height={300}>
        <ComposedChart data={data}>
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis
            dataKey="created_at"
            tickFormatter={formatXAxis}
            scale="band"
            name="측정시간"
          />
          <YAxis
            label={{ value: '측정수치', angle: -90, position: 'insideLeft' }}
          />
          <Tooltip dateKey="created_at" tickFormatter={formatXAxis} />
          <Legend />
          <Bar
            type="monotone"
            dataKey="water_level"
            fill="#1E90FF"
            name="수위"
          />
          <Bar
            type="monotone"
            dataKey="precipitation"
            fill="#87CEFA"
            name="강수량"
          />
          <Bar
            type="monotone"
            dataKey="temperature"
            fill="#FF8C00"
            name="온도"
          />
          <Bar type="monotone" dataKey="humidity" fill="#32CD32" name="습도" />
          <ReferenceLine
            // y={dangerLevel}
            stroke="red"
            label={{
              position: 'left',
              value: '위험수위',
              fill: 'red',
              fontSize: 15,
            }}
          />
          <Brush dataKey="water_level" height={10} stroke="#8884d8" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}

export default withRouter(DailyGraph);
