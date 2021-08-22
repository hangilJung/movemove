import React from 'react';
import DateSearchGraph from './Sections/DateSearchGraph';

function DateSearchPage() {
  return (
    <div
      style={{
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1rem',
        textAlign: 'center',
      }}
    >
      <br />
      <br />
      <h2>조회 기간별 데이터 수치 변화</h2>
      <DateSearchGraph />
      <br />
    </div>
  );
}

export default DateSearchPage;
