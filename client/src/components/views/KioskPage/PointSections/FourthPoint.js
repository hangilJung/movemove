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

function FourthPoint() {
  const [data, setData] = useState([{}]);
  const [warningData, setWarningData] = useState([{}]);

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
      .catch((err) => console.log(moment().format('HH:mm:ss'), err));
    axios
      .post('/api/warningdata', { body })
      .then((res) => {
        setWarningData(res.data.body);
      })
      .catch(
        axios.post('/api/warningdata', { body }).then((res) => {
          setWarningData(res.data.body);
        })
      );
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

      axios
        .post('/api/warningdata/', { body })
        .then((res) => {
          setWarningData(res.data.body);
        })
        .catch(
          axios.post('/api/warningdata', { body }).then((res) => {
            setWarningData(res.data.body);
          })
        );
    }, 60000);
  };

  let Attention = {};
  let Caution = {};
  let Boundary = {};
  let Danger = {};

  const getWarningData = data.map((item) => {
    if (item.water_level_attention !== null) {
      Attention = item.water_level_attention;
    }
    if (item.water_level_caution !== null) {
      Caution = item.water_level_caution;
    } else {
      Caution = 0;
    }
    if (item.water_level_boundary !== null) {
      Boundary = item.water_level_boundary;
    } else {
      Boundary = 0;
    }
    if (item.water_level_danger !== null) {
      Danger = item.water_level_danger;
    } else {
      Danger = 0;
    }
  });

  let getWaterLevel = {};

  if (data.length > 0) {
    getWaterLevel = data[data.length - 1].water_level;
  } else {
    getWaterLevel = '-';
  }

  const waterData = getWaterLevel;

  let cl = new CommonLib();
  let gl = new GaugeLib();

  const waterText = cl.getWaterTextBottom(
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

  const circlePercent = cl.getCirclePercent(
    waterData,
    Danger,
    Boundary,
    Caution,
    Attention
  );

  const liquidFillGauge = cl.getLiquidFillGaugeBottom(
    waterData,
    circlePercent,
    gradientStops,
    waterColor,
    color
  );

  return gl.getGaugeBottom(liquidFillGauge, waterText, waterData, waterColor);
}
export default FourthPoint;
