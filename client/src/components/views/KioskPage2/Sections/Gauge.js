import React from 'react';

function Gauge() {
  return (
    <div className="gauge">
      <ul>
        <li>위험 : 40M</li>
        <li>주의 : 20M</li>
      </ul>
      <img src="/img/gauge.png" />
    </div>
  );
}

export default Gauge;
