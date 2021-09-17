/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react';
import '../../../../Styles/KioskNav.css';
import axios from 'axios';
import moment from 'moment';

function KioskNav() {
  let weather = null;

  const [weatherData, setWeatherData] = useState({});

  const today = moment().format('MM월 DD일');

  useEffect(() => {
    axios.post('/api/weather/header').then((res) => {
      setWeatherData(res.data.body[0]);
    });
  }, []);

  if (weatherData.weatherName === '맑음') {
    weather = <img src="img/맑음.png" />;
  } else if (weatherData.weatherName === '흐림') {
    weather = <img src="img/흐림.png" />;
  } else if (weatherData.weatherName === '비') {
    weather = <img src="img/비.png" />;
  } else if (weatherData.weatherName === '구름많음') {
    weather = <img src="img/구름많음.png" />;
  } else if (
    weatherData.weatherName === '비/눈' ||
    weatherData.weatherName === '빗방울눈날림'
  ) {
    weather = <img src="img/비눈.png" />;
  } else if (weatherData.weatherName === '빗방울') {
    weather = <img src="img/빗방울.png" />;
  } else if (
    weatherData.weatherName === '눈' ||
    weatherData.weatherName === '눈날림'
  ) {
    weather = <img src="img/눈.png" />;
  }

  return (
    <div>
      <div className="kiosk-title">
        <h1>
          <a href="/">동천 모니터링 시스템</a>
        </h1>
      </div>
      <ul className="kiosk-weather">
        <li>{today} 오늘의 날씨</li>
        <li className="weather">{weather}</li>
        <li>{weatherData.tmp}℃</li>
        <li>
          <span className="low">{weatherData.tmn}℃</span>/{' '}
          <span className="high">{weatherData.tmx}℃</span>
        </li>
        <li>강수확률 {weatherData.pop}%</li>
      </ul>
    </div>
  );
}

export default KioskNav;
