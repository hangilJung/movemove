import React, { useEffect, useState } from 'react';
import axios from 'axios';
import accessToken from '../../../lib/accessToken';
import FirstPoint from './Sections/FirstPoint';
import SecondPoint from './Sections/SecondPoint';
import ThirdPoint from './Sections/ThirdPoint';
import FourthPoint from './Sections/FourthPoint';
import { Row, Col, Card, Progress } from 'antd';
import moment from 'moment';
import '../../../Styles/Kiosk.css';

function KioskPage(props) {
  useEffect(() => {
    setTimeout(() => {
      window.location.reload();
      console.log('reload' + moment());
    }, 300000);
  }, []);
  const [data, setData] = useState([]);

  const [placeId, setPlaceId] = useState('1');
  const [startDate, setStartDate] = useState(moment());
  const [endDate, setEndDate] = useState(moment());
  const [createdAt, setCreatedAt] = useState(moment());

  const today = () => {
    const year = moment().format('YYYY');
    const month = moment().format('MM');
    const day = moment().format('DD');

    return year + '년 ' + month + '월 ' + day + '일 ';
  };

  let body = {
    placeId: placeId,
    startDate: startDate,
    endDate: endDate,
    createdAt: createdAt,
  };

  useEffect(() => {
    console.log('11');
    accessToken(props);

    axios
      .post('/api/daily/', { body })
      .then((res) => {
        setData(res.data);
        console.log('render' + res.data);
      })
      .catch((err) => console.log(err));
    console.log('22');
    console.log('useEffeft' + data);
  }, []);

  // let humidityKiosk = data[data.length - 1].humidity;

  // console.log(humidityKiosk);

  console.log(data);

  return (
    <div className="kiosk-page">
      {/* <Progress type="circle" percent={dat} /> */}

      <Row gutter={16}>
        <Col span={12}>
          <Card title="용당교" bordered={false}>
            <FirstPoint />
          </Card>
        </Col>
        <Col span={12}>
          <Card title="풍덕교" bordered={false}>
            <SecondPoint />
          </Card>
        </Col>
        <Col span={12}>
          <Card title="천변주차장" bordered={false}>
            <ThirdPoint />
          </Card>
        </Col>
        <Col span={12}>
          <Card title="순천만습지" bordered={false}>
            <FourthPoint />
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default KioskPage;
