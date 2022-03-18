import React, { useEffect, useState } from 'react';
import accessToken from '../../../lib/accessToken';
import axios from 'axios';
import KioskPage from './KioskPage';
import FairVideos from './FairVideos';
import Snowfall from 'react-snowfall';


function Fair(props) {
  let weatherEffect = null;

  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    accessToken(props)
    axios.post('/api/weather/header').then((res) => {
      setWeatherData(res.data.body[0]);
    });
  
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
    }, 60000);
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
      gutter={16}
      style={{
        overflowX: 'hidden',
        overflowY: 'hidden',
        margin: '0 auto',
      }}
    >
      {weatherEffect}
      {/* <Snowfall snowflakeCount={200} style={{ zIndex: 9999, width: 530 }} /> */}

      <div
        span={12}
        style={{
          width: 524,
          height: 612,
          borderRadius: 10,
          marginBottom: 5,
          float: 'left',
        }}
      >
        <KioskPage />
      </div>
      <div
        span={12}
        style={{
          width: 524,
          height: 333,
          borderRadius: 5,
          margin: '140px 0 5px 552px',
          backgroundColor: 'black',
        }}
      >
        <FairVideos />
      </div>
    </div>
  );
}

export default Fair;
