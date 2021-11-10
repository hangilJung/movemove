/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import LiquidFillGauge from 'react-liquid-gauge';
import { color } from 'd3-color';
import 'animate.css';
import '../../../../Styles/Text.css';
import { BiWind } from 'react-icons/bi';

function FirstPoint() {
  const [data, setData] = useState([{}]);

  const [StartDate, setStartDate] = useState(moment());
  const [EndDate, setEndDate] = useState(moment());
  const [CreatedAt, setCreatedAt] = useState(moment());
  const [weatherData, setWeatherData] = useState({});

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
    axios
      .post('/api/weather/header')
      .then((res) => {
        setWeatherData(res.data.body[0]);
        console.log(res.data.body[0]);
      })
      .catch((err) => console.log(err));
  }, []);

  const waterData = data[data.length - 1].water_level;
  const preData = data[data.length - 1].precipitation;
  const windData = weatherData.wsd;

  const data2 = waterData * 20;

  const textShadow =
    '-0.3px -0.3px 0 #fff, 0.3px -0.3px 0 #fff, -0.3px 0.3px 0 #fff, 0.3px 0.3px 0 #fff';

  const waterColor =
    data2 < 5
      ? 'rgb(169, 209, 142)'
      : data2 < 10
      ? 'rgb(91, 155, 213)'
      : data2 < 20
      ? 'rgb(255, 208, 20)'
      : data2 < 30
      ? 'rgb(255, 131, 0)'
      : 'rgb(255, 80, 80)';

  const waterText =
    data2 < 5 ? (
      <p
        style={{
          textShadow: `${textShadow}`,
        }}
      >
        안전
      </p>
    ) : data2 < 10 ? (
      <p
        style={{
          textShadow: `${textShadow}`,
        }}
      >
        관심
      </p>
    ) : data2 < 20 ? (
      <p
        style={{
          textShadow: `${textShadow}`,
        }}
      >
        주의
      </p>
    ) : data2 < 30 ? (
      <p
        style={{
          textShadow: `${textShadow}`,
        }}
      >
        경계
      </p>
    ) : (
      <p
        style={{
          textShadow: `${textShadow}`,
        }}
      >
        심각
      </p>
    );

  const gradientStops = [
    {
      key: '1%',
      stopColor: color(waterColor),
      stopOpacity: 0.8,
      offset: '.117',
    },
    {
      key: '50%',
      stopColor: color(waterColor),
      stopOpacity: 0.75,
      offset: '50%',
    },
    {
      key: '100%',
      stopColor: color(waterColor).brighter(0.5).toString(),
      stopOpacity: 0.5,
      offset: '100%',
    },
  ];

  return (
    <div>
      <div style={{ width: '100%', margin: '0 auto', textAlign: 'center' }}>
        <h2>순천만습지</h2>
      </div>
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
        }}
      >
        <div
          style={{
            position: 'absolute',
            opacity: 0.7,
            width: '100%',
            height: '100%',
            zIndex: -1,
            margin: '0 auto',
          }}
        >
          <LiquidFillGauge
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
            waveFrequency={1}
            waveAmplitude={4}
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
        </div>

        <div
          style={{
            display: 'absolute',
            textAlign: 'center',
            width: 110,
            paddingTop: 70,
          }}
          className="waterText"
        >
          <p
            style={{
              color: `${waterColor}`,
              margin: 0,
            }}
          >
            {waterText}
          </p>
        </div>
      </div>
      <div style={{ marginTop: 32 }}>
        <p>강수량 : {preData}mm/h</p>
        <p>바 람 : {windData}m/s</p>
      </div>
    </div>
  );
}
export default FirstPoint;
