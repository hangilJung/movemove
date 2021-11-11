/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import LiquidFillGauge from 'react-liquid-gauge';
import { color } from 'd3-color';
import 'animate.css';
import '../../../../Styles/Text.css';

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

  const waterData = data[data.length - 1].water_level;

  const data2 = waterData * 40;

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
      <text
        style={{
          textShadow: `${textShadow}`,
          fontFamily: 'Noto Sans CJK KR',
          fontStyle: 'normal',
        }}
      >
        안전
      </text>
    ) : data2 < 10 ? (
      <text
        style={{
          textShadow: `${textShadow}`,
          fontFamily: 'Noto Sans CJK KR',
          fontStyle: 'normal',
        }}
      >
        관심
      </text>
    ) : data2 < 20 ? (
      <text
        style={{
          textShadow: `${textShadow}`,
          fontFamily: 'Noto Sans CJK KR',
          fontStyle: 'normal',
        }}
      >
        주의
      </text>
    ) : data2 < 30 ? (
      <text
        style={{
          textShadow: `${textShadow}`,
          fontFamily: 'Noto Sans CJK KR',
          fontStyle: 'normal',
        }}
      >
        경계
      </text>
    ) : (
      <text
        style={{
          textShadow: `${textShadow}`,
          fontFamily: 'Noto Sans CJK KR',
          fontStyle: 'normal',
        }}
      >
        심각
      </text>
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
      <div
        style={{
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
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
          <text
            style={{
              color: `${waterColor}`,
              margin: 0,
            }}
          >
            {waterText}
          </text>
        </div>
      </div>
    </div>
  );
}
export default FirstPoint;
