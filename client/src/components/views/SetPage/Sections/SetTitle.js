import React from "react";
import SetBtn from "./SetBtn";
import { Row, Col, Breadcrumb } from "antd";
import "../../../../Styles/Set.css";

function SetTitle() {
  return (
    <div>
      <Row>
        <Breadcrumb>
          <Breadcrumb.Item className="breadcrumb-font-size">
            설정
          </Breadcrumb.Item>
        </Breadcrumb>
      </Row>
      <Row className="set-content">
        위험 수치 설정과 비밀번호 변경을 할 수 있습니다.
      </Row>
      <Row className="btn-box">
        <Col span={6}></Col>
        <Col span={10}>
          <SetBtn
            title="위험수위 설정"
            icon="img/warning.png"
            content_1="위험수위를 설정"
            content_2="할 수 있습니다."
            url="/setRisk"
          />
          <SetBtn
            title="비밀번호 변경"
            icon="img/password.png"
            content_1="비밀번호를 변경"
            content_2="할 수 있습니다."
            url="/setPassword"
          />
        </Col>
        <Col span={8}></Col>
      </Row>
    </div>
  );
}

export default SetTitle;
