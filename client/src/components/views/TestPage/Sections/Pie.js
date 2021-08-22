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
  Brush,
  ResponsiveContainer,
  ReferenceLine,
} from 'recharts';
import axios from 'axios';
import moment from 'moment';

function Pie() {
  const [data, setData] = useState([]);

  const [PlaceId, setPlaceId] = useState('1');
  const [StartDate, setStartDate] = useState(moment());
  const [EndDate, setEndDate] = useState(moment());
  const [CreatedAt, setCreatedAt] = useState(moment());

  useEffect(() => {
    let body = {
      placeId: PlaceId,
      startDate: StartDate,
      endDate: EndDate,
      createdAt: CreatedAt,
    };

    axios
      .post('/api/daily/', { body })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const onPlaceIdHandler = (event) => {
    setPlaceId(event.currentTarget.value);
  };

  const onSubmitHandler = async (event) => {
    // page refresh를 막아줌
    event.preventDefault();

    let body = {
      placeId: PlaceId,
      startDate: StartDate,
      endDate: EndDate,
      createdAt: CreatedAt,
    };

    axios
      .post('/api/daily/', { body })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));

    console.log(body);
  };

  const formatXAxis = (tickItem) => {
    console.log(tickItem);
    if (tickItem)
      return `${tickItem.slice(5, 7)}월 ${tickItem.slice(
        8,
        10
      )}일 ${tickItem.slice(11, 13)}시`;
    else return tickItem;
  };
  const formatYAxis = (tickItem) => tickItem.toLocaleString();
  const formatTooltip = (tickItem) => tickItem.toLocaleString();

  return (
    <div
      style={{
        margin: '0 auto',
      }}
    >
      <form onSubmit={onSubmitHandler}>
        <select onChange={onPlaceIdHandler}>
          <option value="1">용당교</option>
          <option value="2">풍덕교</option>
          <option value="3">천변주차장</option>
          <option value="4">순천만 생태공원</option>
        </select>
        <button
          type="submit"
          style={{
            width: '130px',
          }}
        >
          조회
        </button>
      </form>
      <h4>일간 변화량</h4>
      <ResponsiveContainer width="90%" height={300} margin="0 auto">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="created_at"
            angle={0}
            dx={10}
            tickFormatter={formatXAxis}
          />
          <YAxis tickFormatter={formatYAxis} />
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
          <Brush startIndex={3} endIndex={3} height={10} stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
      <br />
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
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
          <Area
            name="강수량"
            type="monotone"
            dataKey="precipitation"
            stroke="#82ca9d"
            activeDot={{ r: 8 }}
          />
          <Brush startIndex={3} endIndex={3} height={10} stroke="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
      <br />
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
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
          <Bar name="온도" dataKey="temperature" fill="#82ca9d" />
          <Brush startIndex={3} endIndex={3} height={10} stroke="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Pie;
