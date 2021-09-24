/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';

import { Statistic, Row, Col, Card } from 'antd';
import '../../../../Styles/Kiosk.css';

function FirstPoint() {
  const [data, setData] = useState([{}]);

  const dangerLevel = data[0]?.water_level_danger;

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

  const formatXAxis = (tickItem) => {
    if (tickItem) return `${tickItem.slice(11, 13)}시`;
    else return tickItem;
  };

  const waterColor = waterData < 10 ? 'blue' : waterData < 30 ? 'green' : 'red';
  const preColor = preData < 30 ? 'blue' : preData < 50 ? 'green' : 'red';
  const tempColor = tempData < 20 ? 'blue' : tempData < 32 ? 'green' : 'red';
  const humColor = humData < 40 ? 'blue' : humData < 75 ? 'green' : 'red';

  return (
    <div className="thirdPoint">
      <Row gutter={16}>
        <Col span={6}>
          <Card>
            <Statistic
              title="수위"
              value={waterData}
              precision={1}
              valueStyle={{ color: waterColor }}
              suffix="m"
            />
            {waterData < 10 ? (
              <p className="kiosk-low">수위 낮음</p>
            ) : waterData < 30 ? (
              <p className="kiosk-safe">적정수위</p>
            ) : (
              <p className="kiosk-waring">수위 높음</p>
            )}
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="강수량"
              value={preData}
              precision={1}
              valueStyle={{ color: preColor }}
              suffix="mm"
            />
            {preData < 30 ? (
              <p className="kiosk-low">강수량 없음</p>
            ) : preData < 50 ? (
              <p className="kiosk-safe">안전</p>
            ) : (
              <p className="kiosk-waring">위험</p>
            )}
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="온도"
              value={tempData}
              precision={1}
              valueStyle={{ color: tempColor }}
              suffix="℃"
            />
            {tempData < 20 ? (
              <p className="kiosk-low">온도 낮음</p>
            ) : tempData < 32 ? (
              <p className="kiosk-safe">적정 온도</p>
            ) : (
              <p className="kiosk-waring">온도 높음</p>
            )}
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="습도"
              value={humData}
              valueStyle={{ color: humColor }}
              suffix="%"
            />
            {humData < 40 ? (
              <p className="kiosk-low">습도 낮음</p>
            ) : humData < 75 ? (
              <p className="kiosk-safe">적정 습도</p>
            ) : (
              <p className="kiosk-waring">습도 높음</p>
            )}
          </Card>
        </Col>
      </Row>
    </div>
  );
}
export default FirstPoint;
