import React, { useEffect, useState } from 'react';
import axios from 'axios';
import KioskPage from './KioskPage';
import Videos from './Videos';
import Snowfall from 'react-snowfall';

function Kiosk() {
  let weatherEffect = null;

  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    axios.post('/api/weather/header').then((res) => {
      setWeatherData(res.data.body[0]);
    });
  }, []);

  useEffect(() => {
    weatherFunc();
  }, []);

  let weatherFunc = () => {
    setInterval(() => {
      axios
        .post('/api/weather/header')
        .then((res) => {
          setWeatherData(res.data.body[0]);
        })
        .catch((err) => console.log(err));
    }, 5000);
  };

  if (weatherData.weatherName === '비/눈' || weatherData.weatherName === '눈') {
    weatherEffect = (
      <Snowfall snowflakeCount={450} style={{ zIndex: 9999, width: 530 }} />
    );
  } else if (weatherData.weatherName === '비') {
    // weatherEffect = rainEffect;
  }
  // weatherName: 날씨, tmp: 현재기온, tmn: 최저기온, ?: 최고기온, pop: 강수확률

  return (
    <div
      style={{
        overflowX: 'hidden',
        overflowY: 'hidden',
        margin: 0,
        // paddingLeft: 20,
      }}
    >
      {weatherEffect}
      {/* <Snowfall snowflakeCount={450} style={{ zIndex: 9999, width: 530 }} /> */}
      <div
        style={{
          width: 524,
          height: 614,
          // boxShadow: '5px 5px 3px #bbb, -5px -5px -3px #bbb',
          borderRadius: 10,
          marginBottom: 5,
        }}
      >
        <KioskPage />
      </div>
      <div
        style={{
          width: 524,
          height: 333,
          borderRadius: 5,
          margin: '0 0 5px 8px',
          backgroundColor: 'black',
        }}
      >
        <Videos />
      </div>
    </div>
  );
}

export default Kiosk;
