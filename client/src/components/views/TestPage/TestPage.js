import React from 'react';
import Date from './Sections/Date';
import DateTest from './Sections/DateTest';

function TestPage() {
  return (
    <div
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100vh',
      }}
    >
      {/* <DateTest /> */}
      <Date />
    </div>
  );
}

export default TestPage;
