/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { color } from 'd3-color';
import { interpolateRgb } from 'd3-interpolate';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import LiquidFillGauge from 'react-liquid-gauge';
import '../../../../Styles/Card.css';
import { GiCableStayedBridge, GiSettingsKnobs } from 'react-icons/gi';

import { Statistic, Row, Col, Card, Progress } from 'antd';

function FirstPoint() {
  const [data, setData] = useState([{}]);

  const [StartDate, setStartDate] = useState(moment());
  const [EndDate, setEndDate] = useState(moment());
  const [CreatedAt, setCreatedAt] = useState(moment());
  const waterData = data[data.length - 1].water_level;
  const preData = data[data.length - 1].precipitation;
  const tempData = data[data.length - 1].temperature;
  const humData = data[data.length - 1].humidity;

  let body = {
    placeId: 2,
    startDate: StartDate,
    endDate: EndDate,
    createdAt: CreatedAt,
  };

  useEffect(() => {
    axios
      .post('/api/daily/', { body })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const waterColor =
    waterData < 20 ? '#2f88ff' : waterData < 38 ? '#ffdd15' : '#ff0202';

  // const colorList = {
  //   color_1: color(waterColor),
  // };

  const gradientStops = [
    {
      key: '1%',
      stopColor: color(waterColor),
      stopOpacity: 0.8,
      offset: '.117',
    },
  ];

  const preColor =
    preData < 30 ? '#2f88ff' : preData < 50 ? '#ffdd15' : '#ff0202';
  const tempColor =
    tempData < 20 ? '#2f88ff' : tempData < 32 ? '#ffdd15' : '#ff0202';
  const humColor =
    humData < 40 ? '#2f88ff' : humData < 75 ? '#ffdd15' : '#ff0202';

  console.log(waterData);

  return (
    <div className="main-card-first">
      <div
        className="testCircle"
        style={{
          width: ' 500px',
          backgroundImage: "url('/img/12311.jpg')",
          backgroundSize: '500px 500px',
          borderRadius: 250,
          boxShadow: '0px 0px 50px #9E9E9E',
        }}
      >
        <LiquidFillGauge
          style={{ margin: '0 auto', opacity: 0.8 }}
          width={500}
          height={500}
          value={waterData}
          percent="%"
          textSize={1}
          // riseAnimation
          waveAnimation
          waveFrequency={2}
          waveAmplitude={2}
          gradient
          gradientStops={gradientStops}
          circleStyle={{
            fill: color('transparent').toString(),
          }}
          textStyle={{
            fill: color('black').toString(),
          }}
          waveTextStyle={{
            fill: color('black').toString(),
          }}
        />
      </div>
    </div>
  );
}
export default FirstPoint;
