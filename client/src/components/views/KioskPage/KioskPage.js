import React, { useEffect, useState } from 'react';
import SmallFirstPoint from './SmallPointSections/SmallFirstPoint';
import SmallSecondPoint from './SmallPointSections/SmallSecondPoint';
import SmallThirdPoint from './SmallPointSections/SmallThirdPoint';
import SmallFourthPoint from './SmallPointSections/SmallFourthPoint';
import FirstPoint from './PointSections/FirstPoint';
import SecondPoint from './PointSections/SecondPoint';
import ThirdPoint from './PointSections/ThirdPoint';
import FourthPoint from './PointSections/FourthPoint';
import FirstWeather from './WeatherSection/FirstWeather';
import SecondWeather from './WeatherSection/SecondWeather';
import ThirdWeather from './WeatherSection/ThirdWeather';
import FourthWeather from './WeatherSection/FourthWeather';
import Weather from './WeatherSection/Weather';
import moment from 'moment';
import 'animate.css';

function KioskPage() {
  const toDay = moment().format('YYYY. MM. DD. (dd) HH:mm:ss');
  return (
    <div
      style={{
        width: 550,
        margin: 0,
        padding: 0,
        fontFamily: 'Noto Sans CJK KR',
        fontStyle: 'normal',
      }}
    >
      <div style={{ textAlign: 'center', height: 30 }}>
        <div
          style={{
            width: 360,
            float: 'left',
            marginTop: 20,
            fontFamily: 'Noto Sans CJK KR',
            fontStyle: 'normal',
          }}
        >
          <img
            src="img/title.png"
            style={{ width: 370, margin: '10px 0 0 10px' }}
          />
        </div>
        {toDay}
        <div
          style={{
            width: 150,
            position: 'absolute',
            margin: '10px 0 0 380px',
            borderRadius: '10px',
            backgroundColor: 'rgb(255, 255, 255, 0.6)',
            boxShadow: '0px 0px 5px black',
          }}
        >
          <Weather />
        </div>
      </div>
      <div
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          position: 'relative',
        }}
      >
        <div>
          <div style={{ position: 'absolute', zIndex: -1, marginTop: 100 }}>
            <img
              src="img/riverImg.png"
              style={{ width: 550, height: 'auto' }}
            />
          </div>
          <div style={{ position: 'absolute', zIndex: -1, top: 258, left: -7 }}>
            <img
              src="img/suncheon.png"
              style={{ width: 250, height: 'auto' }}
            />
          </div>
        </div>
        <div style={{ position: 'absolute', top: 340, left: 375 }}>
          <img src="img/GaugeBar.png" style={{ width: 160, height: 'auto' }} />
        </div>
        {/* -------------------------이미지 안 게이지----------------------- */}
        <div
          style={{
            position: 'absolute',
            top: 275,
            left: 50,
          }}
        >
          <SmallFirstPoint />
        </div>
        <div
          style={{
            position: 'absolute',
            top: 120,
            left: 40,
          }}
        >
          <SmallSecondPoint />
        </div>
        <div
          style={{
            position: 'absolute',
            top: 180,
            left: 340,
          }}
        >
          <SmallThirdPoint />
        </div>
        <div
          style={{
            position: 'absolute',
            top: 205,
            left: 445,
          }}
        >
          <SmallFourthPoint />
        </div>
      </div>
      {/* --------------------------------아래 게이지 ---------------------------*/}
      <br />
      <div style={{ margin: '370px 0 0 15px', position: 'absolute' }}>
        <div style={{ float: 'left', width: 110, margin: 10 }}>
          <p
            style={{
              margin: '0 0 5px 0',
              textAlign: 'center',
              fontSize: 20,
              fontFamily: 'Noto Sans CJK KR',
              fontStyle: 'normal',
            }}
          >
            순천만 습지
          </p>
          <FirstPoint style={{ width: 110, height: 110 }} />
          <FirstWeather />
        </div>
        <div style={{ float: 'left', width: 110, margin: 10 }}>
          <p
            style={{
              margin: '0 0 5px 0',
              textAlign: 'center',
              fontSize: 20,
              fontFamily: 'Noto Sans CJK KR',
              fontStyle: 'normal',
            }}
          >
            풍덕교
          </p>
          <SecondPoint />
          <SecondWeather />
        </div>
        <div style={{ float: 'left', width: 110, margin: 10 }}>
          <p
            style={{
              margin: '0 0 5px 0',
              textAlign: 'center',
              fontSize: 20,
              fontFamily: 'Noto Sans CJK KR',
              fontStyle: 'normal',
            }}
          >
            용당교
          </p>
          <ThirdPoint />
          <ThirdWeather />
        </div>
        <div style={{ float: 'left', width: 110, margin: 10 }}>
          <p
            style={{
              margin: '0 0 5px 0',
              textAlign: 'center',
              fontSize: 20,
              fontFamily: 'Noto Sans CJK KR',
              fontStyle: 'normal',
            }}
          >
            원용당교
          </p>
          <FourthPoint />
          <FourthWeather />
        </div>
      </div>
    </div>
  );
}

export default KioskPage;
