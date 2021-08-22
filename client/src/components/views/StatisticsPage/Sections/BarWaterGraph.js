import React, { useState, useEffect } from 'react';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import axios from 'axios';
import moment from 'moment';

function BarWaterGraph() {
  const [data, setData] = useState([]);

  const [PlaceId, setPlaceId] = useState('1');
  const [StartDate, setStartDate] = useState(
    moment('2020-01-01').format('YYYY-MM-DD')
  );
  const [EndDate, setEndDate] = useState(
    moment('2020-12-31').format('YYYY-MM-DD')
  );

  console.log(moment('2020').format('yyyy'));

  const onPlaceIdHandler = (event) => {
    setPlaceId(event.currentTarget.value);
  };

  useEffect(() => {
    let body = {
      placeId: PlaceId,
      startDate: StartDate,
      endDate: EndDate,
    };

    axios
      .post('/api/month/', { body })
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
    };

    axios
      .post('/api/month/', { body })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler} style={{}}>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <select onChange={onPlaceIdHandler}>
          <option value="1">용당교</option>
          <option value="2">풍덕교</option>
          <option value="3">천변주차장</option>
          <option value="4">순천만 생태공원</option>
        </select>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button
          type="submit"
          style={{
            width: '130px',
          }}
        >
          조회
        </button>
      </form>

      <ResponsiveContainer width="90%" height={300}>
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
          <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
          <Tooltip />
          <Legend />
          <Bar
            yAxisId="left"
            name="수위"
            dataKey="water_level"
            fill="#8884d8"
          />
          <Bar
            yAxisId="right"
            name="강수량"
            dataKey="precipitation"
            fill="#82ca9d"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default BarWaterGraph;
