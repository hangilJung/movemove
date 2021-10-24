import React, { useEffect } from 'react';
import LeftMenu from './Sections/LeftMenu';
import RightMenu from './Sections/RightMenu';
import KioskNav from './Sections/KioskNav';
import KioskNav2 from './Sections/KioskNav2';
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
  if (window.location.pathname === '/kiosk2')
    return (
      <div
        style={{
          textAlign: 'center',
          margin: '0 auto',
        }}
      >
        <KioskNav2 />
      </div>
    );
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
        <div className="menu__logo">
          <a href="/">
            <img src="img/루미뚱이2.png" />
            <h3></h3>
          </a>
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
