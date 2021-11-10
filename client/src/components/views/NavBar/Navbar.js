import React, { useEffect } from 'react';
import LeftMenu from './Sections/LeftMenu';
import RightMenu from './Sections/RightMenu';
import KioskNav from './Sections/KioskNav';
import KioskNav2 from './Sections/KioskNav2';
import '../../../Styles/Navbar.css';

function Navbar() {
  if (window.location.pathname === '/kiosk') return <div></div>;
  if (window.location.pathname === '/kiosktest') return <div></div>;
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
          <a href="/"></a>
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
