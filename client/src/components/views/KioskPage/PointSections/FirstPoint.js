/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import { color } from 'd3-color';
import 'animate.css';
import '../../../../Styles/Text.css';
import CommonLib from '../../../../lib/commonlib';
import GaugeLib from '../../../../lib/gaugeLib';

function FirstPoint() {
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
    intervalFunc();
  }, []);

  let intervalFunc = () => {
    setInterval(() => {
      axios
        .post('/api/minute/', { body })
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => console.log(err));
    }, 5000);
  };

  let getWaterLevel = {};

  if (data.water_level !== 'undefined') {
    getWaterLevel = data[data.length - 1].water_level;
  } else {
    getWaterLevel = '-';
  }

  const waterData = ((getWaterLevel / 1.5) * 130).toFixed(1);

  const circlePercent = 30;

  let cl = new CommonLib();
  let gl = new GaugeLib();

  const waterText = cl.getWaterTextBottom(waterData);

  const waterColor = cl.getWaterColor(waterData);

  const gradientStops = cl.getGradientStops(color, waterColor);

  const liquidFillGauge = cl.getLiquidFillGaugeBottom(
    waterData,
    circlePercent,
    gradientStops,
    waterColor,
    color
  );

  return gl.getGaugeBottom(liquidFillGauge, waterText, waterData, waterColor);
}
export default FirstPoint;
