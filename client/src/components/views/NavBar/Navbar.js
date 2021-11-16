import React, { useEffect } from 'react';
import LeftMenu from './Sections/LeftMenu';
import RightMenu from './Sections/RightMenu';
import KioskNav from './Sections/KioskNav';
import '../../../Styles/Navbar.css';
import { GiRingBox } from 'react-icons/gi';

function Navbar() {
  if (window.location.pathname === '/kiosk') return <div></div>;
  if (window.location.pathname === '/kiosktest') return <div></div>;

  if (window.location.pathname === '/login') return <></>;

  return (
    <div>
      <nav
        className="menu"
        style={{
          position: 'fixed',
          zIndex: 5,
          width: '100%',
          display: 'inline-block',
        }}
      >
        <div>
          <text
            style={{
              float: 'left',
              width: '50%',
              margin: '12px 0 0 100px',
              fontSize: 30,
              color: '#7975f6',
            }}
          >
            순천시 도시하천 모니터링 시스템
          </text>
        </div>
        <div className="menu__container">
          <div className="menu_right">
            <RightMenu mode="horizontal" />
          </div>
        </div>
      </nav>
      <div className="menu_left">
        <LeftMenu />
      </div>
    </div>
  );
}
export default Navbar;
