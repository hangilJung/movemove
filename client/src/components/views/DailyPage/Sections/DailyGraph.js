import React from 'react';
import {
  ComposedChart,
  Line,
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
          <Line
            type="monotone"
            dataKey="water_level"
            stroke="#8884d8"
            name="수위"
          />
          <Line
            type="monotone"
            dataKey="precipitation"
            stroke="#413ea0"
            name="강수량"
          />
          <Line
            type="monotone"
            dataKey="temperature"
            stroke="#ff7300"
            name="온도"
          />
          <Line type="monotone" dataKey="humidity" stroke="#000" name="습도" />
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
