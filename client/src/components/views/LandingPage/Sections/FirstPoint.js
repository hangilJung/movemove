/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import 'animate.css';
import '../../../../Styles/Text.css';
import CommonLib from '../../../../lib/commonlib';

function FirstPoint() {
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
    axios
      .post('/api/minute/', { body })
      .then((res) => {
        if (res.data.length === 0) {
          console.log(moment().format('HH:mm:ss'), '데이터가 없습니다.');
        } else {
          setData(res.data);
        }
      })
      
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
  }, []);

  let Attention = {};
  let Caution = {};
  let Boundary = {};
  let Danger = {};

  const getWarningData = data.map((item) => {
    if (item.water_level_attention !== null) {
      Attention = item.water_level_attention;
    } else {
      Attention = 0;
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
    getWaterLevel = 0;
  }

  const waterData = getWaterLevel;

  let preData = {};

  if (data.length > 0) {
    preData = data[data.length - 1].precipitation;
  } else {
    preData = '-';
  }

  const placeName = body.placeId;

  let cl = new CommonLib();

  const waterColor = cl.getWaterColor(
    waterData,
    Danger,
    Boundary,
    Caution,
    Attention
  );

  const placeTitle = cl.getCardTitle(placeName);

  const cardImg = cl.getCardImg(
    waterData,
    Danger,
    Boundary,
    Caution,
    Attention
  );

  const placeButton = cl.getPlaceButton(placeName);

  return cl.getCardData(
    waterData,
    waterColor,
    placeName,
    preData,
    cardImg,
    placeButton,
    placeTitle
  );
}
export default FirstPoint;
