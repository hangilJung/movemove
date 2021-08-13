import React, { useState } from 'react';
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

function Date() {
  const [data, setData] = useState([]);

  const [StartDate, setStartDate] = useState('');
  const [EndDate, setEndDate] = useState('');

  const onStartDateHandler = (event) => {
    setStartDate(event.currentTarget.value);
  };

  const onEndDateHandler = (event) => {
    setEndDate(event.currentTarget.value);
  };

  const onSubmitHandler = async (event) => {
    // page refresh를 막아줌
    event.preventDefault();

    let body = {
      startDate: StartDate,
      endDate: EndDate,
    };

    axios
      .post('/api/landing', { body })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));

    console.log(body);
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        {/* <input
          type="date"
          value={StartDate}
          onChange={onStartDateHandler}
        />
        <input
          type="date"
          value={EndDate}
          onChange={onEndDateHandler}
        />
        <button type="submit">조회</button> */}
        <DatePicker
          placeholderText="2021-08-05"
          selected={StartDate}
          onChange={(date) => setStartDate(date)}
          dateFormat="yyyy-mm-dd"
        />
        <DatePicker
          placeholderText="2021-08-05"
          selected={EndDate}
          onChange={(date) => setEndDate(date)}
          dateFormat="yyyy-mm-dd"
        />
        <button type="submit">조회</button>
      </form>

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
    </div>
  );
}

export default Date;
