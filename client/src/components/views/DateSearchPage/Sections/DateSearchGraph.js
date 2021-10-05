import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  //   Brush,
  ResponsiveContainer,
  ReferenceLine,
} from 'recharts';
import '../../../../Styles/Graph.css';

function DateSearchGraph(props) {
  const formatXAxis = (tickItem) => {
    if (tickItem)
      return `${tickItem.slice(5, 7)}월 ${tickItem.slice(
        8,
        10
      )}일 ${tickItem.slice(11, 13)}시`;
    else return tickItem;
  };

  const dangerLevel = props.data[0]?.water_level_danger;

  return (
    <div className="search-chart">
      <br />

      <h3>수위</h3>
      <ResponsiveContainer width="95%" height={300}>
        <LineChart data={props.data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="created_at"
            angle={0}
            dx={10}
            tickFormatter={formatXAxis}
            allowDataOverflow={false}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            name="수위"
            type="monotone"
            dataKey="water_level"
            stroke="#0088FE"
            activeDot={{ r: 8 }}
            interval="preserveStartEnd"
          />
          <ReferenceLine
            y={dangerLevel}
            stroke="red"
            label={{ value: '위험수위', position: 'left' }}
          />
        </LineChart>
      </ResponsiveContainer>
      <br />
      <h3>강수량</h3>
      <ResponsiveContainer width="95%" height={300}>
        <LineChart data={props.data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="created_at" tickFormatter={formatXAxis} angle={0} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            name="강수량"
            type="monotone"
            dataKey="precipitation"
            stroke="#FF8042"
            activeDot={{ r: 8 }}
          />
          <ReferenceLine
            y={dangerLevel}
            stroke="red"
            label={{ value: '강수량 높음', position: 'left' }}
          />
        </LineChart>
      </ResponsiveContainer>
      <br />
      <h3>온도</h3>
      <ResponsiveContainer width="95%" height={300}>
        <LineChart data={props.data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="created_at"
            angle={0}
            dx={10}
            tickFormatter={formatXAxis}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            name="온도"
            type="monotone"
            dataKey="temperature"
            stroke="#006633"
            activeDot={{ r: 8 }}
          />
          <ReferenceLine
            y={dangerLevel}
            stroke="red"
            label={{ value: '기온 높음', position: 'left' }}
          />
        </LineChart>
      </ResponsiveContainer>
      <h3>습도</h3>
      <ResponsiveContainer width="95%" height={300}>
        <LineChart data={props.data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="created_at"
            angle={0}
            dx={10}
            tickFormatter={formatXAxis}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            name="습도"
            type="monotone"
            dataKey="humidity"
            stroke="#000"
            activeDot={{ r: 8 }}
          />
          <ReferenceLine
            y={dangerLevel}
            stroke="red"
            label={{ value: '습도 높음', position: 'left' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default DateSearchGraph;
