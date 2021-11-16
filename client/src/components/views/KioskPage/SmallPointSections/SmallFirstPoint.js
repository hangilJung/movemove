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

function SmallFirstPoint() {
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
          console.log('313131313');
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

  const placeName = body.placeId;

  const waterData = 4;
  // ((getWaterLevel / 2.5) * 130).toFixed(1);

  const circlePercent = 80;

  let cl = new CommonLib();
  let gl = new GaugeLib();

  const safeImg = cl.getSafeImage(waterData);

  const placeNameText = cl.getPlaceName(placeName);

  const triangleImg = cl.getTriangleImg(waterData);

  const waterText = cl.getWaterText(waterData);

  const waterColor = cl.getWaterColor(waterData);

  const gradientStops = cl.getGradientStops(color, waterColor);

  const liquidFillGauge = cl.getLiquidFillGauge(
    waterData,
    circlePercent,
    gradientStops,
    waterColor,
    color
  );

  return gl.getGauge(
    liquidFillGauge,
    triangleImg,
    waterColor,
    waterText,
    safeImg,
    placeNameText
  );
}
export default SmallFirstPoint;
