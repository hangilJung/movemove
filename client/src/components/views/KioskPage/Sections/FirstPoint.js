/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import { Row, Col, Card } from "antd";

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
      .post("/api/kiosk/", { body })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const waterData = data[data.length - 1].water_level;
  const preData = data[data.length - 1].precipitation;
  const tempData = data[data.length - 1].temperature;
  const humData = data[data.length - 1].humidity;

  const waterColor = waterData < 10 ? "blue" : waterData < 30 ? "green" : "red";
  const preColor = preData < 30 ? "blue" : preData < 50 ? "green" : "red";
  const tempColor = tempData < 20 ? "blue" : tempData < 32 ? "green" : "red";
  const humColor = humData < 40 ? "blue" : humData < 75 ? "green" : "red";

  return (
    <Row className="firstPoint">
      <Col span={12}>
        <svg id="fillgauge1" width="900" height="900"></svg>
      </Col>
      <Col span={6} style={{ textAlign: "center" }}>
        <ul>
          <li>위험 : 40M</li>
          <li>주의 : 20M</li>
        </ul>
        <img src="img/gauge.png" style={{ marginLeft: 70 }} />
      </Col>
      <Col span={6} className="right-info">
        <ul>
          <li style={{ color: "#2F88FF" }}>안전 : 2개소</li>
          <li style={{ color: "#FFDD15" }}>주의 : 1개소</li>
          <li style={{ color: "#FF0202" }}>위험 : 1개소</li>
        </ul>
      </Col>
    </Row>
  );
}
export default FirstPoint;
