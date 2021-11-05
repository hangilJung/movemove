import React, { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import FirstPoint from './Sections/FirstPoint';
import SecondPoint from './Sections/SecondPoint';
import ThirdPoint from './Sections/ThirdPoint';
import FourthPoint from './Sections/FourthPoint';
import { Row, Col, Card } from 'antd';
// import '../../../Styles/Kiosk.css';
// import '../../../Styles/Wave2.css';
import LiquidFillGauge from 'react-liquid-gauge';
import { color } from 'd3-color';
import 'animate.css';

function KioskPage() {
  const [data, setData] = useState([{}]);

  const [StartDate, setStartDate] = useState(moment());
  const [EndDate, setEndDate] = useState(moment());
  const [CreatedAt, setCreatedAt] = useState(moment());
  const waterData = data[data.length - 1].water_level;
  const preData = data[data.length - 1].precipitation;
  const tempData = data[data.length - 1].temperature;
  const humData = data[data.length - 1].humidity;

  let body = {
    placeId: 1,
    startDate: StartDate,
    endDate: EndDate,
    createdAt: CreatedAt,
  };

  useEffect(() => {
    axios
      .post('/api/daily/', { body })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const data2 = waterData * 10;

  const waterColor = data2 < 9 ? '#2f88ff' : data2 < 22 ? '#ffdd15' : '#ff0202';

  // const colorList = {
  //   color_1: color(waterColor),
  // };

  const gradientStops = [
    {
      key: '1%',
      stopColor: color(waterColor),
      stopOpacity: 0.8,
      offset: '.117',
    },
  ];

  console.log(waterData);

  console.log('data2value: ' + data2);

  return (
    <div
      className="kiosk-page"
      style={{
        backgroundImage: "url('/img/kioskbackground.png')",
        width: 550,
        height: 450,
        backgroundRepeat: 'no-repeat',
        margin: '0 auto',
      }}
    >
      <div
        className="testImage"
        style={{
          backgroundImage: "url('/img/GPS.png')",
          width: 100,
          height: 100,
          backgroundRepeat: 'no-repeat',
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        <div className="testGauge" style={{ paddingTop: 20 }}>
          <LiquidFillGauge
            style={{
              margin: '0 auto',
              // opacity: 0.8,
              backgroundColor: '#fff',
              borderRadius: 35,
            }}
            width={70}
            height={70}
            value={data2}
            percent="%"
            textSize={1}
            // riseAnimation
            waveAnimation
            waveFrequency={2}
            waveAmplitude={2}
            gradient
            gradientStops={gradientStops}
            circleStyle={{
              fill: color('transparent').toString(),
            }}
            textStyle={{
              fill: color('black').toString(),
            }}
            waveTextStyle={{
              fill: color('black').toString(),
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default KioskPage;
