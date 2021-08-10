import React from 'react';
import MeasurementGraph from './Sections/MeasurementGraph';
import MeasurementTable from './Sections/MeasurementTable';

function MeasurementDetailPage() {
  return (
    <div
      style={{
        textAlign: 'center',
      }}
    >
      <h1>측정정보 상세페이지</h1>
      <br />
      <MeasurementGraph />
      <br />
      <MeasurementTable />
    </div>
  );
}

export default MeasurementDetailPage;
