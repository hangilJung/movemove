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
  }, []);

  let getWaterLevel = {};

  if (data.water_level !== 'undefined') {
    getWaterLevel = data[data.length - 1].water_level;
  } else {
    getWaterLevel = '-';
  }

  const waterData = getWaterLevel;
  // ((getWaterLevel / 1.5) * 130).toFixed(1);

  let preData = {};

  if (data.precipitation !== 'undefined') {
    preData = data[data.length - 1].precipitation;
  } else {
    preData = '-';
  }

  const placeName = 4; // body.placeId;

  let cl = new CommonLib();

  const waterColor = cl.getWaterColor(waterData);

  const placeTitle = cl.getCardTitle(placeName);

  const cardImg = cl.getCardImg(waterData);

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
