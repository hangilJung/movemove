/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import LiquidFillGauge from 'react-liquid-gauge';
import { interpolateRgb } from 'd3-interpolate';
import { color } from 'd3-color';
import 'animate.css';

function SecondPoint() {
  const [data, setData] = useState([{}]);

  const [StartDate, setStartDate] = useState(moment());
  const [EndDate, setEndDate] = useState(moment());
  const [CreatedAt, setCreatedAt] = useState(moment());

  const waterData = data[data.length - 1].water_level;

  let body = {
    placeId: 2,
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

  const data2 = 29;

  // const waterColor = data2 < 9 ? '#2f88ff' : data2 < 22 ? '#2f88ff' : '#ff0202';
  const waterColor =
    data2 < 5
      ? 'rgb(169, 209, 142)'
      : data2 < 10
      ? 'rgb(91, 155, 213)'
      : data2 < 20
      ? 'rgb(255, 255, 153)'
      : data2 < 30
      ? 'rgb(255, 131, 0)'
      : 'rgb(255, 80, 80)';
  const waterText =
    data2 < 5 ? (
      <p>안전</p>
    ) : data2 < 10 ? (
      <p>관심</p>
    ) : data2 < 20 ? (
      <p>주의</p>
    ) : data2 < 30 ? (
      <p>경계</p>
    ) : (
      <p>심각</p>
    );

  const gradientStops = [
    {
      key: '1%',
      stopColor: color(waterColor),
      stopOpacity: 0.8,
      offset: '.117',
    },
  ];

  console.log(waterText);

  return (
    <div style={{ display: 'flex' }}>
      <div>
        <LiquidFillGauge
          style={{ margin: '0 auto' }}
          width={110}
          height={110}
          value={data2}
          percent="M"
          textSize={1}
          textOffsetX={0}
          textOffsetY={0}
          textRenderer={(props) => {
            const value = Math.round(props.value);
            const radius = Math.min(props.height / 2, props.width / 2);
            const textPixels = (props.textSize * radius) / 2;
            const valueStyle = {
              fontSize: textPixels,
            };
            const percentStyle = {
              fontSize: textPixels * 0.6,
            };

            return (
              <tspan>
                <tspan className="value" style={valueStyle}>
                  {value}
                </tspan>
                <tspan style={percentStyle}>{props.percent}</tspan>
              </tspan>
            );
          }}
          riseAnimation
          waveAnimation
          waveFrequency={2}
          waveAmplitude={1}
          gradient
          gradientStops={gradientStops}
          circleStyle={{
            fill: waterColor,
          }}
          waveStyle={{
            fill: waterColor,
          }}
          textStyle={{
            fill: color(waterColor),
            fontFamily: 'Arial',
          }}
          waveTextStyle={{
            fill: color(waterColor),
            fontFamily: 'Arial',
          }}
        />
        <div style={{ display: 'absolute', textAlign: 'center' }}>
          <p style={{ margin: 0 }}>{waterText}</p>
        </div>
      </div>
    </div>
  );
}
export default SecondPoint;
