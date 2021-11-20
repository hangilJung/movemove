/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import WeatherLib from '../../../../lib/weatherLib';
function FirstWeather() {
  const [data, setData] = useState([{}]);

  const [StartDate, setStartDate] = useState(moment());
  const [EndDate, setEndDate] = useState(moment());
  const [CreatedAt, setCreatedAt] = useState(moment());

  let body = {
    placeId: 4,
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

  let wl = new WeatherLib();

  const [weatherData, setWeatherData] = useState({});
  const preData = data[data.length - 1].precipitation;
  const windData = weatherData.wsd;

  return wl.getWeather(preData, windData);
}

export default FirstWeather;
