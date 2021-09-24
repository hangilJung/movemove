import React from 'react';
import '../../../Styles/Footer.css';

function Footer() {
  if (window.location.pathname === '/kiosk') return null;
  return (
    <div className="footer">
      <div className="footer-img">
        <a href="https://www.suncheon.go.kr/kr/" type="_blank">
          <img src="img/순천시.png" />
        </a>
        <a href="http://www.jcia.or.kr/cf/index.do" type="_blank">
          <img src="img/진흥원.png" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
