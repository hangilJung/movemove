import React from "react";
import "../../../Styles/set.css";
import { Row, Col, Card, Button } from "antd";

function setPage() {
  function riskSet() {
    window.location.href = "/riskSet";
  }
  return (
    <div className="set-container">
      <div className="set-title">
        <h1>설정</h1>
      </div>
      <div class="set-content">
        위험 수치 설정과 비밀번호 변경을 할 수 있습니다.
      </div>
      <Row gutter={20}>
        <Col span={6}></Col>
        <Col span={6}>
          <button className="btn-text" onClick={riskSet}>
            <h1>위험수치 설정</h1>
            <div>
              <img src="img/warning.png" width="50"></img>
            </div>
            <div>
              위험수치 설정
              <br />할 수 있습니다.
            </div>
          </button>
        </Col>
        <Col span={6}>
          <button class="btn-text">
            <h1>비밀번호 변경</h1>
            <div>
              <img src="img/password.png" width="50"></img>
            </div>
            <div>
              비밀번호를 변경
              <br /> 할 수 있습니다.
            </div>
          </button>
        </Col>
        <Col span={6}></Col>
      </Row>
    </div>
  );
}

export default setPage;
