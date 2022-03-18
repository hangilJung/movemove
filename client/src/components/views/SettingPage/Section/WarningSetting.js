/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Row,
  Col,
  li,
  Button,
  Typography,
  Form,
  Card,
  input,
  message,
} from 'antd';
import { withRouter } from 'react-router';
import '../../../../Styles/Setting.css';

function Warning(props) {
  const [data, setData] = useState([{}]);
  const [setup, setSetup] = useState([
    {
      place_id: 1,
      water_level_attention: '',
      water_level_caution: '',
      water_level_boundary: '',
      water_level_danger: '',
    },
    {
      place_id: 2,
      water_level_attention: '',
      water_level_caution: '',
      water_level_boundary: '',
      water_level_danger: '',
    },
    {
      place_id: 3,
      water_level_attention: '',
      water_level_caution: '',
      water_level_boundary: '',
      water_level_danger: '',
    },
    {
      place_id: 4,
      water_level_attention: '',
      water_level_caution: '',
      water_level_boundary: '',
      water_level_danger: '',
    },
  ]);

  useEffect(() => {
    axios
      .post('/api/warningdata')
      .then((res) => {
        setData(res.data.body);
      })
      .catch(
        axios.post('/api/warningdata').then((res) => {
          setData(res.data.body);
        })
      );
  }, []);

  let firstAttention = [];
  let firstCaution = [];
  let firstBoundary = [];
  let firstDanger = [];

  let secondAttention = [];
  let secondCaution = [];
  let secondBoundary = [];
  let secondDanger = [];

  let thirdAttention = [];
  let thirdCaution = [];
  let thirdBoundary = [];
  let thirdDanger = [];

  let fourthAttention = [];
  let fourthCaution = [];
  let fourthBoundary = [];
  let fourthDanger = [];

  data.map((data) => {
    if (data.place_id === 1) {
      firstAttention.push(data.water_level_attention);
      firstCaution.push(data.water_level_caution);
      firstBoundary.push(data.water_level_boundary);
      firstDanger.push(data.water_level_danger);
    } else if (data.place_id === 2) {
      secondAttention.push(data.water_level_attention);
      secondCaution.push(data.water_level_caution);
      secondBoundary.push(data.water_level_boundary);
      secondDanger.push(data.water_level_danger);
    } else if (data.place_id === 3) {
      thirdAttention.push(data.water_level_attention);
      thirdCaution.push(data.water_level_caution);
      thirdBoundary.push(data.water_level_boundary);
      thirdDanger.push(data.water_level_danger);
    } else if (data.place_id === 4) {
      fourthAttention.push(data.water_level_attention);
      fourthCaution.push(data.water_level_caution);
      fourthBoundary.push(data.water_level_boundary);
      fourthDanger.push(data.water_level_danger);
    }
  });

  const { Title } = Typography;

  function inRange(x, min, max) {
    return x >= min && x <= max;
  }

  const onRemove = () => {
    alert('유효한 값이 아닙니다.');
  };

  const oneAttention = (e) => {
    setup.map((data) => {
      if (data.place_id === 1) {
        if (e.target.value !== 'undefined') {
          if (
            inRange(e.target.value, 0, firstCaution[0]) ||
            inRange(e.target.value, 0, data.water_level_caution)
          ) {
            data.water_level_attention = e.target.value;
          } else {
            onRemove();
            e.target.value = firstAttention;
          }
        }
      }
    });
  };

  const oneCaution = (e) => {
    setup.map((data) => {
      if (data.place_id === 1) {
        if (e.target.value !== 'undefined') {
          if (
            inRange(e.target.value, firstAttention[0], firstBoundary[0]) ||
            inRange(
              e.target.value,
              data.water_level_attention,
              data.water_level_boundary
            )
          ) {
            data.water_level_caution = e.target.value;
          } else {
            onRemove();
            e.target.value = firstCaution;
          }
        }
      }
    });
  };

  const oneBoundary = (e) => {
    setup.map((data) => {
      if (data.place_id === 1) {
        if (e.target.value !== 'undefined') {
          if (
            inRange(e.target.value, firstCaution[0], firstDanger[0]) ||
            inRange(
              e.target.value,
              data.water_level_caution,
              data.water_level_danger
            )
          ) {
            data.water_level_boundary = e.target.value;
          } else {
            onRemove();
            e.target.value = firstBoundary;
          }
        }
      }
    });
  };

  const oneDanger = (e) => {
    setup.map((data) => {
      if (data.place_id === 1) {
        if (e.target.value !== 'undefined') {
          if (
            inRange(e.target.value, firstBoundary[0], 99.9) ||
            inRange(
              e.target.value,
              firstAttention[0],
              data.water_level_attention
            )
          ) {
            data.water_level_danger = e.target.value;
          } else {
            onRemove();
            e.target.value = firstDanger;
          }
        }
      }
    });
  };

  const twoAttention = (e) => {
    setup.map((data) => {
      if (data.place_id === 2) {
        if (e.target.value !== 'undefined') {
          if (
            inRange(e.target.value, 0, secondCaution[0]) ||
            inRange(e.target.value, 0, data.water_level_caution)
          ) {
            data.water_level_attention = e.target.value;
          } else {
            onRemove();
            e.target.value = secondAttention;
          }
        }
      }
    });
  };

  const twoCaution = (e) => {
    setup.map((data) => {
      if (data.place_id === 2) {
        if (e.target.value !== 'undefined') {
          if (
            inRange(e.target.value, secondAttention[0], secondBoundary[0]) ||
            inRange(
              e.target.value,
              secondBoundary[0],
              data.water_level_boundary
            )
          ) {
            data.water_level_caution = e.target.value;
          } else {
            onRemove();
            e.target.value = secondCaution;
          }
        }
      }
    });
  };

  const twoBoundary = (e) => {
    setup.map((data) => {
      if (data.place_id === 2) {
        if (e.target.value !== 'undefined') {
          if (
            inRange(e.target.value, secondCaution[0], secondDanger[0]) ||
            inRange(e.target.value, secondDanger[0], data.water_level_danger)
          ) {
            data.water_level_boundary = e.target.value;
          } else {
            onRemove();
            e.target.value = secondBoundary;
          }
        }
      }
    });
  };

  const twoDanger = (e) => {
    setup.map((data) => {
      if (data.place_id === 2) {
        if (e.target.value !== 'undefined') {
          if (
            inRange(e.target.value, secondBoundary[0], 99.9) ||
            inRange(
              e.target.value,
              secondAttention[0],
              data.water_level_attention
            )
          ) {
            data.water_level_danger = e.target.value;
          } else {
            onRemove();
            e.target.value = secondDanger;
          }
        }
      }
    });
  };

  const threeAttention = (e) => {
    setup.map((data) => {
      if (data.place_id === 3) {
        if (e.target.value !== 'undefined') {
          if (
            inRange(e.target.value, 0, thirdCaution[0]) ||
            inRange(e.target.value, 0, data.water_level_caution)
          ) {
            data.water_level_attention = e.target.value;
          } else {
            onRemove();
            e.target.value = thirdAttention;
          }
        }
      }
    });
  };

  const threeCaution = (e) => {
    setup.map((data) => {
      if (data.place_id === 3) {
        if (e.target.value !== 'undefined') {
          if (
            inRange(e.target.value, thirdAttention[0], thirdBoundary[0]) ||
            inRange(e.target.value, thirdBoundary[0], data.water_level_boundary)
          ) {
            data.water_level_caution = e.target.value;
          } else {
            onRemove();
            e.target.value = thirdCaution;
          }
        }
      }
    });
  };

  const threeBoundary = (e) => {
    setup.map((data) => {
      if (data.place_id === 3) {
        if (e.target.value !== 'undefined') {
          if (
            inRange(e.target.value, thirdCaution[0], thirdDanger[0]) ||
            inRange(e.target.value, thirdDanger[0], data.water_level_danger)
          ) {
            data.water_level_boundary = e.target.value;
          } else {
            onRemove();
            e.target.value = thirdBoundary;
          }
        }
      }
    });
  };

  const threeDanger = (e) => {
    setup.map((data) => {
      if (data.place_id === 3) {
        if (e.target.value !== 'undefined') {
          if (
            inRange(e.target.value, thirdBoundary[0], 99.9) ||
            inRange(
              e.target.value,
              thirdAttention[0],
              data.water_level_attention
            )
          ) {
            data.water_level_danger = e.target.value;
          } else {
            onRemove();
            e.target.value = thirdDanger;
          }
        }
      }
    });
  };

  const fourAttention = (e) => {
    setup.map((data) => {
      if (data.place_id === 4) {
        if (e.target.value !== 'undefined') {
          if (
            inRange(e.target.value, 0, fourthCaution[0]) ||
            inRange(e.target.value, 0, data.water_level_caution)
          ) {
            data.water_level_attention = e.target.value;
          } else {
            onRemove();
            e.target.value = fourthAttention;
          }
        }
      }
    });
  };

  const fourCaution = (e) => {
    setup.map((data) => {
      if (data.place_id === 4) {
        if (e.target.value !== 'undefined') {
          if (
            inRange(e.target.value, fourthAttention[0], fourthBoundary[0]) ||
            inRange(
              e.target.value,
              fourthBoundary[0],
              data.water_level_boundary
            )
          ) {
            data.water_level_caution = e.target.value;
          } else {
            onRemove();
            e.target.value = fourthCaution;
          }
        }
      }
    });
  };

  const fourBoundary = (e) => {
    setup.map((data) => {
      if (data.place_id === 4) {
        if (e.target.value !== 'undefined') {
          if (
            inRange(e.target.value, fourthCaution[0], fourthDanger[0]) ||
            inRange(e.target.value, fourthDanger[0], data.water_level_danger)
          ) {
            data.water_level_boundary = e.target.value;
          } else {
            onRemove();
            e.target.value = fourthBoundary;
          }
        }
      }
    });
  };

  const fourDanger = (e) => {
    setup.map((data) => {
      if (data.place_id === 4) {
        if (e.target.value !== 'undefined') {
          if (
            inRange(e.target.value, fourthBoundary[0], 99.9) ||
            inRange(
              e.target.value,
              fourthAttention[0],
              data.water_level_attention
            )
          ) {
            data.water_level_danger = e.target.value;
          } else {
            onRemove();
            e.target.value = fourthDanger;
          }
        }
      }
    });
  };

  const keyAction = (e) => {
    e.target.value = '';
  };

  //
  const onSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post('/api/warning', setup)
      .then(alert('변경사항이 적용되었습니다.'), window.location.reload())
      .catch((err) => console.log(err));
  };

  return (
    <div
      style={{
        backgroundColor: '#fff',
        width: '100%',
        height: '100vh',
        fontFamily: 'Noto Sans CJK KR',
        fontStyle: 'normal',
        manHeight: 855,
        maxWidth: 1800,
        padding: 10,
      }}
    >
      <Form className="level-setting">
        <Title level={1}>위험 수위 설정</Title>
        <div className="warning-form">
          <Row>
            <Col span={6}>
              <Card
                title="순천만습지"
                bordered={false}
                headStyle={{ fontSize: 30 }}
                style={{
                  backgroundColor: '#fff',
                  borderRadius: 20,
                  margin: 10,
                }}
              >
                <div className="card_input">
                  <div className="card_input_tag">
                    <span>관심: </span>
                    <input
                      className="first_attention"
                      type="number"
                      onChange={oneAttention}
                      size="large"
                      step={0.1}
                      onKeyDown={keyAction}
                      onKeyPress={keyAction}
                      onKeyUp={keyAction}
                      defaultValue={firstAttention}
                    />
                    <button onClick={onSubmit} className="submit-btn">
                      변경
                    </button>
                  </div>
                  <div className="card_input_tag">
                    <span>주의: </span>
                    <input
                      type="number"
                      onChange={oneCaution}
                      size="large"
                      step={0.1}
                      onKeyDown={keyAction}
                      onKeyPress={keyAction}
                      onKeyUp={keyAction}
                      defaultValue={firstCaution}
                    />
                    <button onClick={onSubmit} className="submit-btn">
                      변경
                    </button>
                  </div>
                  <div className="card_input_tag">
                    <span>경계: </span>
                    <input
                      type="number"
                      onChange={oneBoundary}
                      size="large"
                      step={0.1}
                      onKeyDown={keyAction}
                      onKeyPress={keyAction}
                      onKeyUp={keyAction}
                      defaultValue={firstBoundary}
                    />
                    <button onClick={onSubmit} className="submit-btn">
                      변경
                    </button>
                  </div>
                  <div className="card_input_tag">
                    <span>심각: </span>
                    <input
                      type="number"
                      onChange={oneDanger}
                      size="large"
                      step={0.1}
                      onKeyDown={keyAction}
                      onKeyPress={keyAction}
                      onKeyUp={keyAction}
                      defaultValue={firstDanger}
                      maxLength={2}
                    />
                    <button onClick={onSubmit} className="submit-btn">
                      변경
                    </button>
                  </div>
                </div>
              </Card>
            </Col>
            <Col span={6}>
              <Card
                title="조곡교"
                bordered={false}
                headStyle={{ fontSize: 30 }}
                style={{
                  backgroundColor: '#fff',
                  borderRadius: 20,
                  margin: 10,
                }}
              >
                <div className="card_input">
                  <div className="card_input_tag">
                    <span>관심: </span>
                    <input
                      type="number"
                      min="0"
                      onChange={twoAttention}
                      size="large"
                      step={0.1}
                      onKeyDown={keyAction}
                      onKeyPress={keyAction}
                      onKeyUp={keyAction}
                      defaultValue={secondAttention}
                      maxLength={2}
                    />
                    <button onClick={onSubmit} className="submit-btn">
                      변경
                    </button>
                  </div>
                  <div className="card_input_tag">
                    <span>주의: </span>
                    <input
                      type="number"
                      min="0"
                      onChange={twoCaution}
                      size="large"
                      step={0.1}
                      onKeyDown={keyAction}
                      onKeyPress={keyAction}
                      onKeyUp={keyAction}
                      defaultValue={secondCaution}
                      maxLength={2}
                    />
                    <button onClick={onSubmit} className="submit-btn">
                      변경
                    </button>
                  </div>
                  <div className="card_input_tag">
                    <span>경계: </span>
                    <input
                      type="number"
                      min="0"
                      onChange={twoBoundary}
                      size="large"
                      step={0.1}
                      onKeyDown={keyAction}
                      onKeyPress={keyAction}
                      onKeyUp={keyAction}
                      defaultValue={secondBoundary}
                      maxLength={2}
                    />
                    <button onClick={onSubmit} className="submit-btn">
                      변경
                    </button>
                  </div>
                  <div className="card_input_tag">
                    <span>심각: </span>
                    <input
                      type="number"
                      min="0"
                      onChange={twoDanger}
                      size="large"
                      step={0.1}
                      onKeyDown={keyAction}
                      onKeyPress={keyAction}
                      onKeyUp={keyAction}
                      defaultValue={secondDanger}
                      maxLength={2}
                    />
                    <button onClick={onSubmit} className="submit-btn">
                      변경
                    </button>
                  </div>
                </div>
              </Card>
            </Col>
            <Col span={6}>
              <Card
                title="용당교"
                bordered={false}
                headStyle={{ fontSize: 30 }}
                style={{
                  backgroundColor: '#fff',
                  borderRadius: 20,
                  margin: 10,
                }}
              >
                <div className="card_input">
                  <div className="card_input_tag">
                    <span>관심: </span>
                    <input
                      type="number"
                      min="0"
                      onChange={threeAttention}
                      size="large"
                      step={0.1}
                      onKeyDown={keyAction}
                      onKeyPress={keyAction}
                      onKeyUp={keyAction}
                      defaultValue={thirdAttention}
                      maxLength={2}
                    />
                    <button onClick={onSubmit} className="submit-btn">
                      변경
                    </button>
                  </div>
                  <div className="card_input_tag">
                    <span>주의: </span>
                    <input
                      type="number"
                      min="0"
                      onChange={threeCaution}
                      size="large"
                      step={0.1}
                      onKeyDown={keyAction}
                      onKeyPress={keyAction}
                      onKeyUp={keyAction}
                      defaultValue={thirdCaution}
                      maxLength={2}
                    />
                    <button onClick={onSubmit} className="submit-btn">
                      변경
                    </button>
                  </div>
                  <div className="card_input_tag">
                    <span>경계: </span>
                    <input
                      type="number"
                      min="0"
                      onChange={threeBoundary}
                      size="large"
                      step={0.1}
                      onKeyDown={keyAction}
                      onKeyPress={keyAction}
                      onKeyUp={keyAction}
                      defaultValue={thirdBoundary}
                      maxLength={2}
                    />
                    <button onClick={onSubmit} className="submit-btn">
                      변경
                    </button>
                  </div>
                  <div className="card_input_tag">
                    <span>심각: </span>
                    <input
                      type="number"
                      min="0"
                      onChange={threeDanger}
                      size="large"
                      step={0.1}
                      onKeyDown={keyAction}
                      onKeyPress={keyAction}
                      onKeyUp={keyAction}
                      defaultValue={thirdDanger}
                      maxLength={2}
                    />
                    <button onClick={onSubmit} className="submit-btn">
                      변경
                    </button>
                  </div>
                </div>
              </Card>
            </Col>
            <Col span={6}>
              <Card
                title="원용당교"
                bordered={false}
                headStyle={{ fontSize: 30 }}
                style={{
                  backgroundColor: '#fff',
                  borderRadius: 20,
                  margin: 10,
                }}
              >
                <div className="card_input">
                  <div className="card_input_tag">
                    <span>관심: </span>
                    <input
                      type="number"
                      min="0"
                      onChange={fourAttention}
                      size="large"
                      step={0.1}
                      onKeyDown={keyAction}
                      onKeyPress={keyAction}
                      onKeyUp={keyAction}
                      defaultValue={fourthAttention}
                      maxLength={2}
                    />
                    <button onClick={onSubmit} className="submit-btn">
                      변경
                    </button>
                  </div>
                  <div className="card_input_tag">
                    <span>주의: </span>
                    <input
                      type="number"
                      min="0"
                      onChange={fourCaution}
                      size="large"
                      step={0.1}
                      onKeyDown={keyAction}
                      onKeyPress={keyAction}
                      onKeyUp={keyAction}
                      defaultValue={fourthCaution}
                      maxLength={2}
                    />
                    <button onClick={onSubmit} className="submit-btn">
                      변경
                    </button>
                  </div>
                  <div className="card_input_tag">
                    <span>경계: </span>
                    <input
                      type="number"
                      min="0"
                      onChange={fourBoundary}
                      size="large"
                      step={0.1}
                      onKeyDown={keyAction}
                      onKeyPress={keyAction}
                      onKeyUp={keyAction}
                      defaultValue={fourthBoundary}
                      maxLength={2}
                    />
                    <button onClick={onSubmit} className="submit-btn">
                      변경
                    </button>
                  </div>
                  <div className="card_input_tag">
                    <span>심각: </span>
                    <input
                      type="number"
                      min="0"
                      onChange={fourDanger}
                      size="large"
                      step={0.1}
                      onKeyDown={keyAction}
                      onKeyPress={keyAction}
                      onKeyUp={keyAction}
                      defaultValue={fourthDanger}
                      maxLength={2}
                    />
                    <button onClick={onSubmit} className="submit-btn">
                      변경
                    </button>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
          <p
            style={{
              fontFamily: 'Noto Sans CJK KR',
              fontStyle: 'normal',
              fontSize: 17,
              margin: '50px 0 -10px 0',
            }}
          >
            위험 수위는 0~99.9까지 설정할 수 있습니다. <br />
            위험 수치는 화살표로 입력해 주세요.
          </p>
        </div>
      </Form>
    </div>
  );
}

export default withRouter(Warning);
