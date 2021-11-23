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
  const [warningData, setWarningData] = useState([{}]);

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

      axios.post('/api/warningdata', { body }).then((res) => {
        setWarningData(res.data.body[0]);
      });
    }, 5000);
  };

  let getWaterLevel = {};

  if (data.water_level !== 'undefined') {
    getWaterLevel = data[data.length - 1].water_level;
  } else {
    getWaterLevel = '-';
  }

  const placeName = body.placeId;

  const waterData = getWaterLevel;

  let Attention = warningData.water_level_attention;
  let Caution = warningData.water_level_caution;
  let Boundary = warningData.water_level_boundary;
  let Danger = warningData.water_level_danger;

  let cl = new CommonLib();
  let gl = new GaugeLib();

  const safeImg = cl.getSafeImage(waterData, Danger);

  const placeNameText = cl.getPlaceText(placeName);

  const triangleImg = cl.getTriangleImg(
    waterData,
    Danger,
    Boundary,
    Caution,
    Attention
  );

  const circlePercent = cl.getCirclePercent(
    waterData,
    Danger,
    Boundary,
    Caution,
    Attention
  );

  const waterText = cl.getWaterText(
    waterData,
    Danger,
    Boundary,
    Caution,
    Attention
  );

  const waterColor = cl.getWaterColor(
    waterData,
    Danger,
    Boundary,
    Caution,
    Attention
  );

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
