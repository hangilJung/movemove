import React from "react";
import { Row, Col, Button } from "antd";
import "../../../../Styles/Set.css";

function SetBtn(props) {
  const pageMove = (url, e) => {
    e.preventDefault();
    window.location.href = url;
  };
  return (
    <>
      <Button
        className="btn-box__set-btn"
        shape="round"
        onClick={(e) => pageMove(props.url, e)}
      >
        <Row className="btn-box__set-btn__set-btn">
          <Col span={2}></Col>
          <Col span={20}>{props.title}</Col>
          <Col span={2}></Col>
        </Row>
        <Row className="btn-box__set-btn__img-box">
          <Col span={8}></Col>
          <Col span={8}>
            <img src={props.icon} className="img-size"></img>
          </Col>
          <Col span={8}></Col>
        </Row>
        <Row className="btn-box__set-btn__text-box">
          <Col span={2}></Col>
          <Col span={20}>
            {props.content_1}
            <br />
            {props.content_2}
          </Col>
          <Col span={2}></Col>
        </Row>
      </Button>
    </>
  );
}

export default SetBtn;
