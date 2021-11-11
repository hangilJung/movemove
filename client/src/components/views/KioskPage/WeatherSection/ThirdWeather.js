/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';

function ThirdWeather() {
  const [data, setData] = useState([{}]);

  const [StartDate, setStartDate] = useState(moment());
  const [EndDate, setEndDate] = useState(moment());
  const [CreatedAt, setCreatedAt] = useState(moment());

  let body = {
    placeId: 1,
    startDate: StartDate,
    endDate: EndDate,
    createdAt: CreatedAt,
  };

  useEffect(() => {
    axios
      .post('/api/minute/', { body })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));

    axios
      .post('/api/weather/header')
      .then((res) => {
        setWeatherData(res.data.body[0]);
      })
      .catch((err) => console.log(err));
  }, []);

  const [weatherData, setWeatherData] = useState({});
  const preData = data[data.length - 1].precipitation;
  const windData = weatherData.wsd;

  return (
    <div>
      <div
        style={{
          margin: '32px 0 0 0',
          fontFamily: 'Noto Sans CJK KR',
          fontStyle: 'normal',
        }}
      >
        <p style={{ margin: '0 auto', fontSize: 10 }}>
          <img
            src="img/pre.gif"
            style={{
              width: 25,
              height: 'auto',
            }}
            alt="profile"
          />
          강수량 : {preData}mm/h
        </p>
        <hr />
        <p style={{ margin: '0 auto', fontSize: 10 }}>
          <img
            src="img/wind.gif"
            style={{
              width: 25,
              height: 'auto',
              marginRight: 5,
            }}
            alt="profile"
          />
          바 람 : {windData}m/s
        </p>
      </div>
    </div>
  );
}

export default ThirdWeather;
