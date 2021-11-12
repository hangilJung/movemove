/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import LiquidFillGauge from 'react-liquid-gauge';
import { color } from 'd3-color';
import 'animate.css';
import '../../../../Styles/Text.css';
import CommonLib from '../../../../lib/commonlib';

function SmallFirstPoint(props) {
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

  const waterData = 65;

  const circlePercent = 30;

  let cl = new CommonLib();

  const safeImg = cl.getSafeImage(waterData);

  const waterText = cl.getWaterText(waterData);

  const waterColor = cl.getWaterColor(waterData);

  const gradientStops = cl.getGradientStops(color, waterColor);

  const liquidFillGauge = cl.getLiquidFillGauge(
    waterData,
    circlePercent,
    gradientStops,
    waterColor,
    color
  );

  console.log(data.risk);

  return (
    <div>
      <div
        style={{
          position: 'relative',
          width: 72,
          height: 72,
        }}
      >
        <div>
          <div
            style={{
              position: 'absolute',
              zIndex: 60,
              margin: '0 auto',
              backgroundColor: '#eee',
              borderRadius: '50%',
            }}
          >
            {liquidFillGauge}
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
      </div>
      <div>
        <img
          src="img/Label.png"
          style={{ width: 100, height: 'auto', marginLeft: -15, marginTop: 15 }}
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
