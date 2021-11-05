import React, { useEffect } from 'react';
import FirstPoint from './Sections/FirstPoint';
import SecondPoint from './Sections/SecondPoint';
import ThirdPoint from './Sections/ThirdPoint';
import FourthPoint from './Sections/FourthPoint';
import { Row, Col, Card } from 'antd';
import '../../../Styles/Kiosk.css';
import '../../../Styles/Wave2.css';
import 'animate.css';

function KioskPage() {
  useEffect(() => {
    setTimeout(() => {
      window.location.reload();
    }, 60000);
  }, []);

  return (
    <div style={{ width: '100%' }}>
      <div style={{ float: 'left', width: 500 }}>
        <p>1번</p>
        <SecondPoint />
      </div>
      <div style={{ float: 'left', width: 500 }}>
        <p>2번</p>
        <SecondPoint />
      </div>
      <div style={{ float: 'left', width: 500 }}>
        <p>3번</p>
        <SecondPoint />
      </div>
      <div style={{ float: 'left', width: 500 }}>
        <p>4번</p>
        <SecondPoint />
      </div>
    </div>
  );
}

export default KioskPage;
