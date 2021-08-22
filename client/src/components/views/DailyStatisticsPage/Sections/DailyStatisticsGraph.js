import React, { useState, useEffect } from 'react';
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Brush,
  ResponsiveContainer,
} from 'recharts';
import axios from 'axios';
import moment from 'moment';

function DailyStatisticsGraph() {
  const [data, setData] = useState([]);

  const [PlaceId, setPlaceId] = useState('1');
  const [StartDate, setStartDate] = useState(moment());
  const [EndDate, setEndDate] = useState(moment());
  const [CreatedAt, setCreatedAt] = useState(moment());

  const dateToStr = () => {
    var year = moment().format('YYYY');
    var month = moment().format('MM');
    var day = moment().format('DD');

    return (
      year + '년 ' + month + '월 ' + day + '일 '

      //  + localTime.substring(0, 5)
    );
  };

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
      .post('/api/daily/', { body })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));

    console.log(body);
  };

  const formatXAxis = (tickItem) => {
    if (tickItem) return `${tickItem.slice(11, 13)}시`;
    else return tickItem;
  };

  return (
    <div>
      <h2>{`${dateToStr(moment())}`}</h2>
      <br />
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

      <ResponsiveContainer width="100%" height={300}>
        <ComposedChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 80,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis
            dataKey="created_at"
            tickFormatter={formatXAxis}
            scale="band"
            name="측정시간"
            // hide={true}
            // scale="point"
          />
          <YAxis
            label={{ value: '측정수치', angle: -90, position: 'insideLeft' }}
          />
          <Tooltip dateKey="created_at" tickFormatter={formatXAxis} />
          <Legend />
          <Area
            type="monotone"
            dataKey="water_level"
            fill="#8884d8"
            stroke="#8884d8"
            name="수위"
          />
          <Bar
            dataKey="precipitation"
            barSize={20}
            fill="#413ea0"
            name="강수량"
          />
          <Line
            type="monotone"
            dataKey="temperature"
            stroke="#ff7300"
            name="온도"
          />
          <Brush startIndex={0} endIndex={0} height={10} stroke="#8884d8" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}

export default DailyStatisticsGraph;
