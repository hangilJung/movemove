import React from 'react';
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
import { withRouter } from 'react-router-dom';
import '../../../../Styles/Graph.css';

function DailyGraph(props) {
  const formatXAxis = (tickItem) => {
    if (tickItem) return `${tickItem.slice(11, 13)}시`;
    else return tickItem;
  };

  const dangerLevel = props.data[0]?.water_level_danger;

  return (
    <div className="daily-chart">
      <ResponsiveContainer width="95%" height={300}>
        <ComposedChart data={props.data}>
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
            y={dangerLevel}
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
