import React, { useState, useEffect } from 'react';
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
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale';

function DateSearchGraph() {
  const [data, setData] = useState([]);

  const [PlaceId, setPlaceId] = useState('1');
  const [StartDate, setStartDate] = useState(new Date());
  const [EndDate, setEndDate] = useState(new Date());
  const [CreatedAt, setCreatedAt] = useState(new Date());

  const onPlaceIdHandler = (event) => {
    setPlaceId(event.currentTarget.value);
  };

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
      .post('/api/search', { body })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));

    console.log(body);
  };

  const formatXAxis = (tickItem) => {
    if (tickItem)
      return `${tickItem.slice(5, 7)}월 ${tickItem.slice(
        8,
        10
      )}일 ${tickItem.slice(11, 13)}시`;
    else return tickItem;
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <br />
      <br />
      <form
        onSubmit={onSubmitHandler}
        style={{
          display: 'flex',
          height: '28px',
        }}
      >
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <select onChange={onPlaceIdHandler}>
          <option value="1">용당교</option>
          <option value="2">풍덕교</option>
          <option value="3">천변주차장</option>
          <option value="4">순천만 생태공원</option>
        </select>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <DatePicker
          locale={ko}
          dateFormat="yyyy-MM-dd"
          selected={StartDate}
          onChange={(date) => setStartDate(date)}
        />
        <DatePicker
          locale={ko}
          dateFormat="yyyy-MM-dd"
          selected={EndDate}
          onChange={(date) => setEndDate(date)}
        />
        <button
          type="submit"
          style={{
            width: '130px',
          }}
        >
          조회
        </button>
      </form>

      <br />
      <h4>수위</h4>
      <ResponsiveContainer width="90%" height={300}>
        <LineChart data={data}>
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
          <ReferenceLine y={40} stroke="red" label={'위험수위'} />
        </LineChart>
      </ResponsiveContainer>

      <br />
      <h4>강수량</h4>
      <ResponsiveContainer width="90%" height={300}>
        <LineChart data={data}>
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
        </LineChart>
      </ResponsiveContainer>

      <br />
      <h4>온도</h4>
      <ResponsiveContainer width="90%" height={300}>
        <LineChart data={data}>
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
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default DateSearchGraph;
