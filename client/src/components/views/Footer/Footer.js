import React from 'react';
import '../../../Styles/Footer.css';

function Footer() {
  if (window.location.pathname === '/kiosk') return null;
  return (
    <div className="footer">
      <p>
        본 시스템은 (재)전남정보문화산업진흥원의 지원을 받아 제작된
        시스템입니다.
      </p>
    </div>
  );
}

export default Footer;
