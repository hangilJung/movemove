import React from 'react';
import DailyStatisticsGraph from './Sections/DailyStatisticsGraph';

function DailyStatisticsPage() {
  return (
    <div
      style={{
        textAlign: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <DailyStatisticsGraph />
    </div>
  );
}

export default DailyStatisticsPage;
