import React from 'react';
import LeftMenu from './Sections/LeftMenu';
import '../../../Styles/Navbar.css';

function Navbar() {
  if (window.location.pathname === '/login') return <div></div>;

  return (
    <div>
      <div className="menu_left">
        <LeftMenu />
      </div>
    </div>
  );
}
export default Navbar;
