import React from 'react';
import '../../../Styles/Footer.css';

function Footer() {
  if (window.location.pathname === '/kiosk') return null;
  return (
    <div className="footer">
      <div className="footer-text">
        <p>순천시 재난정보 관리 시스템</p>
      </div>
      <div className="footer-img">
        <img src="img/순천시.png" />
        <img src="img/진흥원.png" />
      </div>
    </div>
  );
}

export default Footer;
