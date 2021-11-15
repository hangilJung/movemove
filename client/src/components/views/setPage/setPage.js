import React from 'react';
import '../../../Styles/set.css';
import { Row, Col, Breadcrumb } from 'antd';

function setPage() {
  function setRisk() {
    window.location.href = '/riskSet';
  }

  function setPassword() {
    window.location.href = '/setPassword';
  }

  return (
    <div className="set-container">
      <Row>
        <Breadcrumb>
          <Breadcrumb.Item>설정</Breadcrumb.Item>
        </Breadcrumb>
      </Row>
      <div className="set-title">
        <h1>설정</h1>
      </div>
      <div class="set-content">
        위험 수치 설정과 비밀번호 변경을 할 수 있습니다.
      </div>
      <Row gutter={20}>
        <Col span={6}></Col>
        <Col span={6}>
          <button className="btn-text" onClick={setRisk}>
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
          <button class="btn-text" onClick={setPassword}>
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
