import React from 'react';
import LeftMenu from './Sections/LeftMenu';
import RightMenu from './Sections/RightMenu';
import KioskNav from './Sections/KioskNav';
import '../../../Styles/Navbar.css';

function Navbar() {
  if (window.location.pathname === '/kiosk')
    return (
      <div
        style={{
          textAlign: 'center',
          margin: '0 auto',
        }}
      >
        <KioskNav />
      </div>
    );

  return (
    <nav className="menu">
      <div>
        <div>
          <img src="img/루미뚱이.png" />
        </div>
        <div className="menu-title">
          <a href="/">순천시 재난 정보 관리 시스템</a>
        </div>
      </div>
      <div className="menu__container">
        <div className="menu_left">
          <LeftMenu mode="horizontal" />
        </div>
        <div className="menu_right">
          <RightMenu mode="horizontal" />
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
