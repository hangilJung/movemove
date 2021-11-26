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
  Input,
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
      .post('/api/warningdata/')
      .then((res) => {
        setData(res.data.body);
      })
      .catch((err) => console.log(err));
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

  const oneAttention = (e) => {
    setup.map((data) => {
      if (data.place_id === 1) {
        if (e.target.value >= 0 && e.target.value <= firstCaution[0]) {
          data.water_level_attention = e.target.value;
        } else {
          alert('정상적인 수치를 입력해 주세요.');
        }
      }
    });
  };

  const oneCaution = (e) => {
    setup.map((data) => {
      if (data.place_id === 1) {
        if (
          0 < e.target.value &&
          e.target.value >= data.water_level_attention
        ) {
          data.water_level_caution = e.target.value;
        } else {
          alert('수치를 확인해 주세요.');
        }
      }
    });
  };
  const oneBoundary = (e) => {
    setup.map((data) => {
      if (data.place_id === 1) {
        if (0 < e.target.value && e.target.value >= data.water_level_caution) {
          data.water_level_boundary = e.target.value;
        } else {
          alert('수치를 확인해 주세요.');
        }
      }
    });
  };
  const oneDanger = (e) => {
    setup.map((data) => {
      if (data.place_id === 1) {
        if (0 < e.target.value && e.target.value >= data.water_level_boundary) {
          data.water_level_danger = e.target.value;
        } else {
          alert('수치를 확인해 주세요.');
        }
      }
    });
  };

  const twoAttention = (e) => {
    setup.map((data) => {
      if (data.place_id === 2) {
        if (e.target.value >= 0 && e.target.value <= secondCaution[0]) {
          data.water_level_attention = e.target.value;
        } else {
          alert('수치를 확인해 주세요.');
        }
      }
    });
  };
  const twoCaution = (e) => {
    setup.map((data) => {
      if (data.place_id === 2) {
        if (
          0 < e.target.value &&
          e.target.value >= data.water_level_attention
        ) {
          data.water_level_caution = e.target.value;
        } else {
          alert('수치를 확인해 주세요.');
        }
      }
    });
  };
  const twoBoundary = (e) => {
    setup.map((data) => {
      if (data.place_id === 2) {
        if (0 < e.target.value && e.target.value >= data.water_level_caution) {
          data.water_level_boundary = e.target.value;
        } else {
          alert('수치를 확인해 주세요.');
        }
      }
    });
  };
  const twoDanger = (e) => {
    setup.map((data) => {
      if (data.place_id === 2) {
        if (0 < e.target.value && e.target.value >= data.water_level_boundary) {
          data.water_level_danger = e.target.value;
        } else {
          alert('수치를 확인해 주세요.');
        }
      }
    });
  };

  const threeAttention = (e) => {
    setup.map((data) => {
      if (data.place_id === 3) {
        if (e.target.value >= 0 && e.target.value <= thirdCaution[0]) {
          data.water_level_attention = e.target.value;
        } else {
          alert('수치를 확인해 주세요.');
        }
      }
    });
  };
  const threeCaution = (e) => {
    setup.map((data) => {
      if (data.place_id === 3) {
        if (
          0 < e.target.value &&
          e.target.value >= data.water_level_attention
        ) {
          data.water_level_caution = e.target.value;
        } else {
          alert('수치를 확인해 주세요.');
        }
      }
    });
  };
  const threeBoundary = (e) => {
    setup.map((data) => {
      if (data.place_id === 3) {
        if (0 < e.target.value && e.target.value >= data.water_level_caution) {
          data.water_level_boundary = e.target.value;
        } else {
          alert('수치를 확인해 주세요.');
        }
      }
    });
  };
  const threeDanger = (e) => {
    setup.map((data) => {
      if (data.place_id === 3) {
        if (0 < e.target.value && e.target.value >= data.water_level_boundary) {
          data.water_level_danger = e.target.value;
        } else {
          alert('수치를 확인해 주세요.');
        }
      }
    });
  };

  const fourAttention = (e) => {
    setup.map((data) => {
      if (data.place_id === 4) {
        if (e.target.value >= 0 && e.target.value <= fourthCaution[0]) {
          data.water_level_attention = e.target.value;
        } else {
          alert('수치를 확인해 주세요.');
        }
      }
    });
  };

  const fourCaution = (e) => {
    setup.map((data) => {
      if (data.place_id === 4) {
        if (
          0 < e.target.value &&
          e.target.value >= data.water_level_attention
        ) {
          data.water_level_caution = e.target.value;
        } else {
          alert('수치를 확인해 주세요.');
        }
      }
    });
  };

  const fourBoundary = (e) => {
    setup.map((data) => {
      if (data.place_id === 4) {
        if (0 < e.target.value && e.target.value >= data.water_level_caution) {
          data.water_level_boundary = e.target.value;
        } else {
          alert('수치를 확인해 주세요.');
        }
      }
    });
  };

  const fourDanger = (e) => {
    setup.map((data) => {
      if (data.place_id === 4) {
        if (0 < e.target.value && e.target.value >= data.water_level_boundary) {
          data.water_level_danger = e.target.value;
        } else {
          alert('수치를 확인해 주세요.');
        }
      }
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post('/api/warning', setup)
      .then(alert('변경사항이 적용되었습니다.'), props.history.push('/warning'))
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
                    <Input
                      type="number"
                      onChange={oneAttention}
                      min={0}
                      size="large"
                      placeholder={firstAttention}
                    />
                  </div>
                  <div className="card_input_tag">
                    <span>주의: </span>
                    <Input
                      type="number"
                      onChange={oneCaution}
                      size="large"
                      min={0}
                      placeholder={firstCaution}
                    />
                  </div>
                  <div className="card_input_tag">
                    <span>경계: </span>
                    <Input
                      type="number"
                      min={0}
                      onChange={oneBoundary}
                      size="large"
                      placeholder={firstBoundary}
                      maxLength={2}
                    />
                  </div>
                  <div className="card_input_tag">
                    <span>심각: </span>
                    <Input
                      type="number"
                      min={0}
                      onChange={oneDanger}
                      size="large"
                      placeholder={firstDanger}
                      maxLength={2}
                    />
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
                    <Input
                      type="number"
                      min="0"
                      onChange={twoAttention}
                      size="large"
                      placeholder={secondAttention}
                      maxLength={2}
                    />
                  </div>
                  <div className="card_input_tag">
                    <span>주의: </span>
                    <Input
                      type="number"
                      min="0"
                      onChange={twoCaution}
                      size="large"
                      placeholder={secondCaution}
                      maxLength={2}
                    />
                  </div>
                  <div className="card_input_tag">
                    <span>경계: </span>
                    <Input
                      type="number"
                      min="0"
                      onChange={twoBoundary}
                      size="large"
                      placeholder={secondBoundary}
                      maxLength={2}
                    />
                  </div>
                  <div className="card_input_tag">
                    <span>심각: </span>
                    <Input
                      type="number"
                      min="0"
                      onChange={twoDanger}
                      size="large"
                      placeholder={secondDanger}
                      maxLength={2}
                    />
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
                    <Input
                      type="number"
                      min="0"
                      onChange={threeAttention}
                      size="large"
                      placeholder={thirdAttention}
                      maxLength={2}
                    />
                  </div>
                  <div className="card_input_tag">
                    <span>주의: </span>
                    <Input
                      type="number"
                      min="0"
                      onChange={threeCaution}
                      size="large"
                      placeholder={thirdCaution}
                      maxLength={2}
                    />
                  </div>
                  <div className="card_input_tag">
                    <span>경계: </span>
                    <Input
                      type="number"
                      min="0"
                      onChange={threeBoundary}
                      size="large"
                      placeholder={thirdBoundary}
                      maxLength={2}
                    />
                  </div>
                  <div className="card_input_tag">
                    <span>심각: </span>
                    <Input
                      type="number"
                      min="0"
                      onChange={threeDanger}
                      size="large"
                      placeholder={thirdDanger}
                      maxLength={2}
                    />
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
                    <Input
                      type="number"
                      min="0"
                      onChange={fourAttention}
                      size="large"
                      placeholder={fourthAttention}
                      maxLength={2}
                    />
                  </div>
                  <div className="card_input_tag">
                    <span>주의: </span>
                    <Input
                      type="number"
                      min="0"
                      onChange={fourCaution}
                      size="large"
                      placeholder={fourthCaution}
                      maxLength={2}
                    />
                  </div>
                  <div className="card_input_tag">
                    <span>경계: </span>
                    <Input
                      type="number"
                      min="0"
                      onChange={fourBoundary}
                      size="large"
                      placeholder={fourthBoundary}
                      maxLength={2}
                    />
                  </div>
                  <div className="card_input_tag">
                    <span>심각: </span>
                    <Input
                      type="number"
                      min="0"
                      onChange={fourDanger}
                      size="large"
                      placeholder={fourthDanger}
                      maxLength={2}
                    />
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
          <Button
            onClick={onSubmit}
            size="large"
            shape="round"
            style={{
              backgroundColor: '#7771F6',
              color: 'white',
              marginTop: 30,
              width: 200,
              height: 50,
              fontSize: 20,
            }}
          >
            변경
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default withRouter(Warning);
