/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Row, Col, li, Button, Typography, Form, Card, Input } from 'antd';
import { withRouter } from 'react-router';
import '../../../../Styles/Setting.css';

function WarningSetting(props) {
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
        console.log(res.data.body);
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
        data.water_level_attention = e.target.value;
      }
    });
  };
  const oneCaution = (e) => {
    setup.map((data) => {
      if (data.place_id === 1) {
        data.water_level_caution = e.target.value;
      }
    });
  };
  const oneBoundary = (e) => {
    setup.map((data) => {
      if (data.place_id === 1) {
        data.water_level_boundary = e.target.value;
      }
    });
  };
  const oneDanger = (e) => {
    setup.map((data) => {
      if (data.place_id === 1) {
        data.water_level_danger = e.target.value;
      }
    });
  };

  const twoAttention = (e) => {
    setup.map((data) => {
      if (data.place_id === 2) {
        data.water_level_attention = e.target.value;
      }
    });
  };
  const twoCaution = (e) => {
    setup.map((data) => {
      if (data.place_id === 2) {
        data.water_level_caution = e.target.value;
      }
    });
  };
  const twoBoundary = (e) => {
    setup.map((data) => {
      if (data.place_id === 2) {
        data.water_level_boundary = e.target.value;
      }
    });
  };
  const twoDanger = (e) => {
    setup.map((data) => {
      if (data.place_id === 2) {
        data.water_level_danger = e.target.value;
      }
    });
  };

  const threeAttention = (e) => {
    setup.map((data) => {
      if (data.place_id === 3) {
        data.water_level_attention = e.target.value;
      }
    });
  };
  const threeCaution = (e) => {
    setup.map((data) => {
      if (data.place_id === 3) {
        data.water_level_caution = e.target.value;
      }
    });
  };
  const threeBoundary = (e) => {
    setup.map((data) => {
      if (data.place_id === 3) {
        data.water_level_boundary = e.target.value;
      }
    });
  };
  const threeDanger = (e) => {
    setup.map((data) => {
      if (data.place_id === 3) {
        data.water_level_danger = e.target.value;
      }
    });
  };

  const fourAttention = (e) => {
    setup.map((data) => {
      if (data.place_id === 4) {
        data.water_level_attention = e.target.value;
      }
    });
  };

  const fourCaution = (e) => {
    setup.map((data) => {
      if (data.place_id === 4) {
        data.water_level_caution = e.target.value;
      }
    });
  };

  const fourBoundary = (e) => {
    setup.map((data) => {
      if (data.place_id === 4) {
        data.water_level_boundary = e.target.value;
      }
    });
  };

  const fourDanger = (e) => {
    setup.map((data) => {
      if (data.place_id === 4) {
        data.water_level_danger = e.target.value;
      }
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const result = await axios
      .post('/api/warning', setup)
      .then(
        alert('변경사항이 적용되었습니다.'),
        props.history.push('/setting'),
        window.location.reload()
      );
  };
  return (
    <div
      style={{
        backgroundColor: '#F0F2F5',
        width: '100%',
        height: '100vh',
        fontFamily: 'Noto Sans CJK KR',
        fontStyle: 'normal',
        maxHeight: 855,
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
                      min="0"
                      onChange={oneAttention}
                      size="large"
                      placeholder={firstAttention}
                    />
                  </div>
                  <div className="card_input_tag">
                    <span>주의: </span>
                    <Input
                      type="number"
                      min="0"
                      onChange={oneCaution}
                      size="large"
                      placeholder={firstCaution}
                    />
                  </div>
                  <div className="card_input_tag">
                    <span>경계: </span>
                    <Input
                      type="number"
                      min="0"
                      onChange={oneBoundary}
                      size="large"
                      placeholder={firstBoundary}
                    />
                  </div>
                  <div className="card_input_tag">
                    <span>심각: </span>
                    <Input
                      type="number"
                      min="0"
                      onChange={oneDanger}
                      size="large"
                      placeholder={firstDanger}
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
                    />
                  </div>
                </div>
              </Card>
            </Col>
            <Col span={6}>
              <Card
                title="원용당교"
                bordered={true}
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

export default withRouter(WarningSetting);
