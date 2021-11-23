/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import 'animate.css';
import '../../../../Styles/Text.css';
import CommonLib from '../../../../lib/commonlib';

function ThirdPoint(props) {
  const [data, setData] = useState([{}]);
  const [warningData, setWarningData] = useState([{}]);

  const [StartDate, setStartDate] = useState(moment());
  const [EndDate, setEndDate] = useState(moment());
  const [CreatedAt, setCreatedAt] = useState(moment());

  let body = {
    placeId: 3,
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
    axios.post('/api/warningdata', { body }).then((res) => {
      setWarningData(res.data.body[2]);
    });
  }, []);

  let getWaterLevel = {};

  if (data.water_level !== 'undefined') {
    getWaterLevel = data[data.length - 1].water_level;
  } else {
    getWaterLevel = '-';
  }

  const waterData = getWaterLevel;

  let Attention = warningData.water_level_attention;
  let Caution = warningData.water_level_caution;
  let Boundary = warningData.water_level_boundary;
  let Danger = warningData.water_level_danger;

  let preData = {};

  if (data.precipitation !== 'undefined') {
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
export default ThirdPoint;
