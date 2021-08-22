import React, { useState, useEffect } from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import axios from 'axios';
import moment from 'moment';

function RadarCharts() {
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

  useEffect(() => {
    axios
      .post('/api/month', {
        placeId: PlaceId,
        startDate: StartDate,
        endDate: EndDate,
      })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
    console.log(data);
  }, []);
  return (
    <div>
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
        <button
          type="submit"
          style={{
            width: '130px',
          }}
        >
          조회
        </button>
      </form>

      <ResponsiveContainer width="100%" height={500}>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="month" />
          <PolarRadiusAxis angle={30} domain={[0, 150]} />
          <Radar
            name="강수량"
            dataKey="water_level"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.6}
          />
          <Tooltip />
          <Legend />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default RadarCharts;
