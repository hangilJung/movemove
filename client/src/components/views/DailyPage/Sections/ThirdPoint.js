/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import '../../../../Styles/Card.css';
import { GiCableStayedBridge } from 'react-icons/gi';

import { Statistic, Row, Col, Card, Progress } from 'antd';

function FirstPoint() {
  const [data, setData] = useState([{}]);

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
      .post('/api/kiosk/', { body })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const waterData = data[data.length - 1].water_level;
  const preData = data[data.length - 1].precipitation;
  const tempData = data[data.length - 1].temperature;
  const humData = data[data.length - 1].humidity;

  const waterColor = waterData < 10 ? 'blue' : waterData < 30 ? 'green' : 'red';
  const preColor = preData < 30 ? 'blue' : preData < 50 ? 'green' : 'red';
  const tempColor = tempData < 20 ? 'blue' : tempData < 32 ? 'green' : 'red';
  const humColor = humData < 40 ? 'blue' : humData < 75 ? 'green' : 'red';

  return (
    <div className="main-card-first">
      <GiCableStayedBridge />
      <p>현재 수위</p>
      <Statistic
        value={waterData}
        precision={1}
        valueStyle={{ color: waterColor, fontSize: 40 }}
        suffix="m"
      />
      {waterData < 10 ? (
        <p className="kiosk-low">수위 낮음</p>
      ) : waterData < 30 ? (
        <p className="kiosk-safe">적정수위</p>
      ) : (
        <p className="kiosk-waring">수위 높음</p>
      )}
    </div>
  );
}
export default FirstPoint;
