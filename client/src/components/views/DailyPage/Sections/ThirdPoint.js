/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import '../../../../Styles/Card.css';
import { GiCableStayedBridge, GiSettingsKnobs } from 'react-icons/gi';
import { GrMonitor } from 'react-icons/gr';

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

  const waterColor =
    waterData < 39 ? '#2f88ff' : waterData < 59 ? '#ffdd15' : '#ff0202';
  const preColor =
    preData < 30 ? '#2f88ff' : preData < 50 ? '#ffdd15' : '#ff0202';
  const tempColor =
    tempData < 20 ? '#2f88ff' : tempData < 32 ? '#ffdd15' : '#ff0202';
  const humColor =
    humData < 40 ? '#2f88ff' : humData < 75 ? '#ffdd15' : '#ff0202';

  console.log(waterData);

  return (
    <div className="main-card-first" style={{ backgroundColor: waterColor }}>
      <GiCableStayedBridge />
      <GrMonitor />
      <GiSettingsKnobs />
      <p>풍덕교</p>
      <Statistic
        value={waterData}
        precision={1}
        valueStyle={{ color: 'white', fontSize: 40 }}
        suffix="m"
      />
      <div style={{ color: 'white', fontSize: '2vh' }}>
        {waterData < 39 ? (
          <p>안전</p>
        ) : waterData < 55 ? (
          <p>주의</p>
        ) : (
          <p>위험</p>
        )}
      </div>
    </div>
  );
}
export default FirstPoint;
