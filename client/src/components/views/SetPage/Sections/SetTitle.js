import React, { useEffect, useState } from "react";
import SetBtn from "./SetBtn";
import SettingPassword from "./SettingPassword";
import SettingRisk from "./SettingRisk";

import { Row, Col, Breadcrumb } from "antd";
import "../../../../Styles/Set.css";

function SetTitle() {
  if (window.location.pathname === "/set") {
    return (
      <div>
        <Row>
          <Col span={6} offset={2}>
            <Breadcrumb>
              <Breadcrumb.Item className="breadcrumb-font-size">
                설정
              </Breadcrumb.Item>
            </Breadcrumb>
          </Col>
          <Col span={8}></Col>
          <Col span={8}></Col>
        </Row>
        <Row className="set-content">
          <Col span={14} offset={2}>
            위험 수치 설정과 비밀번호 변경을 할 수 있습니다.
          </Col>
          <Col span={8}></Col>
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
  } else if (window.location.pathname === "/setRisk") {
    return (
      <div>
        <Row>
          <Col span={6} offset={2}>
            <Breadcrumb>
              <Breadcrumb.Item className="breadcrumb-font-size">
                <a href="/set">설정</a>
              </Breadcrumb.Item>
              <Breadcrumb.Item className="breadcrumb-font-size">
                위험수위 설정
              </Breadcrumb.Item>
            </Breadcrumb>
          </Col>
          <Col span={8}></Col>
          <Col span={8}></Col>
        </Row>
        <Row className="set-content">
          <Col span={14} offset={2}>
            위험 수치 설정과 비밀번호 변경을 할 수 있습니다.
          </Col>
          <Col span={8}></Col>
        </Row>
        <SettingRisk />
      </div>
    );
  } else if (window.location.pathname === "/setPassword") {
    return (
      <div>
        <SettingRisk />
      </div>
    );
  }
}

export default SetTitle;
