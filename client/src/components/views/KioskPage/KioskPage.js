import React, { useEffect, useState } from 'react';
import FirstPoint from './PointSections/FirstPoint';
import SecondPoint from './PointSections/SecondPoint';
import ThirdPoint from './PointSections/ThirdPoint';
import FourthPoint from './PointSections/FourthPoint';
import Five from './PointSections/Five';
import Weather from './PointSections/Weather';
import 'animate.css';

function KioskPage() {
  return (
    <div style={{ width: 550, margin: 0, padding: 0 }}>
      <div style={{ fontSize: 25, textAlign: 'center' }}>
        <p style={{ margin: 0 }}>순천시 도시하천 실시간 모니터링 시스템</p>
      </div>
      <div
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          position: 'relative',
        }}
      >
        <div style={{ position: 'absolute', zIndex: -1 }}>
          <img src="img/Monitor.png" />
        </div>
        {/* <div style={{ width: 40 }}>
          <img src="img/GaugeBar.png" />
        </div> */}
      </div>
      <br />
      <div style={{ margin: '280px 0 0 15px', position: 'absolute' }}>
        <div style={{ float: 'left', width: 110, margin: 10 }}>
          <FirstPoint />
        </div>
        <div style={{ float: 'left', width: 110, margin: 10 }}>
          <SecondPoint />
        </div>
        <div style={{ float: 'left', width: 110, margin: 10 }}>
          <ThirdPoint />
        </div>
        <div style={{ float: 'left', width: 110, margin: 10 }}>
          <FourthPoint />
        </div>
        {/* <div style={{ float: 'left', width: 130 }}>
          <Five />
        </div> */}
      </div>

      <div
        style={{
          position: 'absolute',
          margin: '0 0 0 380px',
          borderRadius: '10px',
          backgroundColor: 'rgb(255, 255, 255, 0.6)',
          boxShadow: '0px 0px 5px black',
        }}
      >
        <Weather />
      </div>
    </div>
  );
}

export default KioskPage;
