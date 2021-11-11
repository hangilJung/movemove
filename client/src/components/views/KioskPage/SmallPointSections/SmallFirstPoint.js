/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import LiquidFillGauge from 'react-liquid-gauge';
import { color } from 'd3-color';
import 'animate.css';
import '../../../../Styles/Text.css';

function SmallFirstPoint() {
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

  const safeImg =
    data2 < 30 ? (
      <img
        src="img/safe.png"
        style={{ width: 30, height: 'auto' }}
        alt="profile"
      />
    ) : (
      <img
        src="img/danger.png"
        style={{ width: 30, height: 'auto' }}
        alt="profile"
      />
    );

  const waterText =
    data2 < 5 ? (
      <img src="/img/level_1.png" style={{ width: 25 }} alt="profile" />
    ) : data2 < 10 ? (
      <img src="/img/level_2.png" style={{ width: 25 }} alt="profile" />
    ) : data2 < 20 ? (
      <img src="/img/level_3.png" style={{ width: 25 }} alt="profile" />
    ) : data2 < 30 ? (
      <img src="/img/level_4.png" style={{ width: 25 }} alt="profile" />
    ) : (
      <img src="/img/level_5.png" style={{ width: 25 }} alt="profile" />
    );

  const gradientStops = [
    {
      key: '1%',
      stopColor: color(waterColor),
      stopOpacity: 1,
      offset: '.117',
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
            backgroundColor: '#FAFAFA',
            borderRadius: '50%',
          }}
        >
          <LiquidFillGauge
            width={70}
            height={70}
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
                textShadow:
                  '-1px -1px 0 #eee, 1px -1px 0 #eee, -1px 1px 0 #eee, 1px 1px 0 #eee',
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
            width: 70,
            paddingTop: 40,
          }}
          className="waterText"
        >
          <text
            style={{
              color: `${waterColor}`,
              margin: 0,
              fontSize: 12,
            }}
          >
            {waterText}
          </text>
        </div>
      </div>
      <div>
        <img
          src="img/Label.png"
          style={{ width: 100, height: 'auto', marginLeft: -15, marginTop: 20 }}
          alt="profile"
        />
        <div style={{ marginTop: -31 }}>
          <div style={{ marginLeft: -27 }}>{safeImg}</div>
          <p
            style={{
              width: 100,
              height: 'auto',
              margin: '-27px 0 0 5px',
              fontFamily: 'Noto Sans CJK KR',
              fontStyle: 'normal',
            }}
          >
            순천만 습지
          </p>
        </div>
      </div>
    </div>
  );
}
export default SmallFirstPoint;
