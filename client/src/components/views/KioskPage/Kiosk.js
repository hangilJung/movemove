import React from 'react';
import KioskPage from './KioskPage';
import Videos from './Videos';
import Snowfall from 'react-snowfall';

function Kiosk() {
  return (
    <div
      style={{
        overflowX: 'hidden',
        overflowY: 'hidden',
        margin: 0,
        // paddingLeft: 20,
      }}
    >
      <Snowfall snowflakeCount={450} style={{ zIndex: 9999, width: 530 }} />
      <div
        style={{
          width: 524,
          height: 614,
          // boxShadow: '5px 5px 3px #bbb, -5px -5px -3px #bbb',
          borderRadius: 10,
          marginBottom: 5,
        }}
      >
        <KioskPage />
      </div>
      <div
        style={{
          width: 524,
          height: 333,
          borderRadius: 5,
          margin: '0 0 5px 8px',
          backgroundColor: 'black',
        }}
      >
        <Videos />
      </div>
    </div>
  );
}

export default Kiosk;
