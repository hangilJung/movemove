/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Weather() {
  let weather = null;

  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    axios.post('/api/weather/header').then((res) => {
      setWeatherData(res.data.body[0]);
    });
  }, []);

  weatherData.weatherName = '눈';

  if (weatherData.weatherName === '맑음') {
    weather = <img src="img/sunny.gif" style={{ width: 65, height: 65 }} />;
  } else if (weatherData.weatherName === '흐림') {
    weather = <img src="img/cloudy.gif" style={{ width: 65, height: 65 }} />;
  } else if (weatherData.weatherName === '비') {
    weather = <img src="img/rain.gif" style={{ width: 65, height: 65 }} />;
  } else if (weatherData.weatherName === '구름많음') {
    weather = <img src="img/cloud.gif" style={{ width: 65, height: 65 }} />;
  } else if (
    weatherData.weatherName === '비/눈' ||
    weatherData.weatherName === '눈'
  ) {
    weather = <img src="img/snow.gif" style={{ width: 65, height: 65 }} />;
  }

  // weatherName: 날씨, tmp: 현재기온, tmn: 최저기온, ?: 최고기온, pop: 강수확률

  return (
    <div>
      <div
        style={{
          width: 150,
          height: 80,
          position: 'relative',
          fontFamily: 'Noto Sans CJK KR',
          fontStyle: 'normal',
          marginTop: 5,
        }}
      >
        <div
          style={{
            position: 'absolute',
            zIndex: 9000,
            margin: 2,
            left: 4,
          }}
        >
          {weather}
        </div>
        <p
          style={{
            position: 'absolute',
            width: 30,
            height: 30,
            zIndex: 9999,
            margin: '25px 50px 30px 30px',
            fontSize: 18,
            right: 25,
          }}
        >
          {weatherData.tmp}℃
        </p>
        <p
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            zIndex: 9999,
            margin: '50px 0 0 -35px',
            fontSize: 15,
          }}
        >
          {weatherData.weatherName}
        </p>

        <div style={{ marginLeft: 60 }}>
          <p style={{ fontSize: 15, margin: '0 0 5px 20px' }}>풍덕동</p>
          <div style={{ margin: '0 0 0 20px' }}>
            <p style={{ fontSize: 10, margin: 0 }}>
              강수확률 : {weatherData.pop}%
            </p>
            <p style={{ fontSize: 10, margin: 0 }}>
              습 도 : {weatherData.reh}%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
