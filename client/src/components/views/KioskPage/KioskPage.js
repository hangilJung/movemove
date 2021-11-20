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

function KioskPage(props) {
  let timer = null;

  const [time, setTime] = useState(moment());

  useEffect(() => {
    timer = setInterval(() => {
      setTime(moment());
    }, 10000);
  }, []);

  return (
    <div>
      <div
        style={{
          width: 530,
          margin: 0,
          padding: 0,
          fontFamily: 'Noto Sans CJK KR',
          fontStyle: 'normal',
          borderRadius: 50,
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
              style={{ width: 370, margin: '5px 0 0 10px' }}
              alt="profile"
            />
          </div>
          <div style={{ marginRight: -10 }}>
            {time.format('YYYY. MM. DD. (dd) HH:mm')}
          </div>
          <div
            style={{
              width: 160,
              position: 'absolute',
              margin: '8px 0 0 370px',
              borderRadius: '10px',
              backgroundColor: '#fff',
              boxShadow: '0px 0px 5px #bbb',
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
            <div
              style={{
                position: 'absolute',
                zIndex: 1,
                marginTop: 80,
                left: -10,
              }}
            >
              <img
                src="img/river.png"
                style={{
                  width: 550,
                  height: 'auto',
                  // boxShadow: '0 0 15px 10px #bbb',
                }}
                alt="profile"
              />
            </div>
          </div>
          <div
            style={{ position: 'absolute', top: 315, left: 365, zIndex: 999 }}
          >
            <img
              src="img/GaugeBar.png"
              style={{ width: 160, height: 'auto' }}
              alt="profile"
            />
          </div>
          {/* -------------------------이미지 안 게이지----------------------- */}
          <div
            style={{
              position: 'absolute',
              top: 225,
              left: 48,
              zIndex: 999,
            }}
          >
            <SmallFirstPoint />
          </div>
          <div
            style={{
              position: 'absolute',
              top: 92,
              left: 60,
              zIndex: 999,
            }}
          >
            <SmallSecondPoint />
          </div>
          <div
            style={{
              position: 'absolute',
              top: 148,
              left: 297,
              zIndex: 999,
            }}
          >
            <SmallThirdPoint />
          </div>
          <div
            style={{
              position: 'absolute',
              top: 173,
              left: 455,
              zIndex: 999,
            }}
          >
            <SmallFourthPoint />
          </div>
        </div>
        {/* --------------------------------아래 게이지 ---------------------------*/}
        <br />
        <div
          style={{
            margin: '345px 0 0 0',
            position: 'absolute',
            paddingLeft: 15,
            zIndex: 999,
            width: 530,
            // boxShadow: '5px 5px 5px #bbb',
          }}
        >
          <div
            style={{ float: 'left', width: 110, margin: '5px 0px 5px 0px ' }}
          >
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
            <FirstWeather style={{}} />
          </div>
          <div
            style={{ float: 'left', width: 110, margin: '5px 10px 5px 10px ' }}
          >
            <p
              style={{
                margin: '0 0 5px 0',
                textAlign: 'center',
                fontSize: 20,
                fontFamily: 'Noto Sans CJK KR',
                fontStyle: 'normal',
              }}
            >
              조곡교
            </p>
            <SecondPoint />
            <SecondWeather />
          </div>
          <div
            style={{ float: 'left', width: 110, margin: '5px 10px 5px 10px ' }}
          >
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
          <div
            style={{ float: 'left', width: 110, margin: '5px 10px 5px 10px ' }}
          >
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
    </div>
  );
}

export default KioskPage;
