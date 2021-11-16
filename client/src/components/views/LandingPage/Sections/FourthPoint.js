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
    placeId: 1,
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

  const waterData = 0.3;
  // ((getWaterLevel / 1.5) * 130).toFixed(1);

  let preData = {};

  if (data.precipitation !== 'undefined') {
    preData = data[data.length - 1].precipitation;
  } else {
    preData = '-';
  }

  const placeName = 4; // body.placeId;

  let cl = new CommonLib();

  const waterText = cl.getWaterTextBottom(waterData);

  const waterColor = cl.getWaterColor(waterData);

  const placeText = cl.getPlaceText(placeName);

  const cardImg = cl.getCardImg(waterData);

  return cl.getCardData(waterData, waterColor, placeText, preData, cardImg);
}
export default FirstPoint;
