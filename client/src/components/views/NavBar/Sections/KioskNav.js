/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react';
import '../../../../Styles/KioskNav.css';
import axios from 'axios';
import moment from 'moment';

function KioskNav() {
  let weather = null;

  const [weatherData, setWeatherData] = useState({});

  const today = moment().format('llll').slice(0, 16);

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
  console.log(weatherData);
  // weatherName: 날씨, tmp: 현재기온, tmn: 최저기온, ?: 최고기온, pop: 강수확률

  return (
    <div className="kiosk-nav">
      <ul>
        <li className="kiosk-today">{today}</li>
        <p className="kiosk-title">
          <a href="/">동천 모니터링 시스템</a>
        </p>
        <ul className="kiosk-weather">
          <li>{weather}</li>
          <li>{weatherData.tmp}℃</li>
          <li>
            <span className="low">{weatherData.tmn}℃</span>/{' '}
            <span className="high">{weatherData.tmp}℃</span>
          </li>
          <li>강수확률 {weatherData.pop}%</li>
        </ul>
      </ul>
    </div>
  );
}

export default KioskNav;
