import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  //   Brush,
  ResponsiveContainer,
} from 'recharts';
import '../../../../Styles/Graph.css';
import { Row, Col } from 'antd';

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
      <Row gutter={16}>
        <Col span={12}>
          <h3>수위 및 강수량</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={props.data}>
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorTemp" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#EF8C17" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#EF8C17" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="created_at"
                angle={0}
                dx={10}
                tickFormatter={formatXAxis}
                allowDataOverflow={false}
              />
              <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
              <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
              <YAxis yAxisId="center" orientation="right" stroke="#EF8C17" />
              <Tooltip />
              <Legend />
              <Area
                type="monotone"
                dataKey="water_level"
                stroke="#8884d8"
                fillOpacity={1}
                fill="url(#colorUv)"
                name="수위"
                yAxisId="left"
              />
              <Area
                type="monotone"
                dataKey="precipitation"
                stroke="#82ca9d"
                fillOpacity={1}
                fill="url(#colorPv)"
                name="강수량"
                yAxisId="right"
              />
              <Area
                type="monotone"
                dataKey="humidity"
                stroke="#EF8C17"
                fillOpacity={1}
                fill="url(#colorTemp)"
                name="예측데이터"
                yAxisId="center"
              />
              {/* <ReferenceLine
                y={dangerLevel}
                stroke="red"
                label={{ value: '위험수위', position: 'left' }}
              /> */}
            </AreaChart>
          </ResponsiveContainer>
        </Col>
        <Col span={12}>
          <h3>온도 및 습도</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={props.data}>
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="created_at"
                angle={0}
                dx={10}
                tickFormatter={formatXAxis}
                allowDataOverflow={false}
              />
              <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
              <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
              <Tooltip />
              <Legend />
              <Area
                type="monotone"
                dataKey="temperature"
                stroke="#8884d8"
                fillOpacity={1}
                fill="url(#colorUv)"
                name="온도"
                yAxisId="left"
              />
              <Area
                type="monotone"
                dataKey="humidity"
                stroke="#82ca9d"
                fillOpacity={1}
                fill="url(#colorPv)"
                name="습도"
                yAxisId="right"
              />
            </AreaChart>
          </ResponsiveContainer>
        </Col>
      </Row>
    </div>
  );
}

export default DateSearchGraph;
