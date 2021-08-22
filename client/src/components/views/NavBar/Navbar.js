import React from 'react';
import LeftMenu from './Sections/LeftMenu';
import './Sections/Navbar.css';

function Navbar() {
  return (
    <div>
      <p
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '2rem',
        }}
      >
        순천시 재난 정보 관리 시스템
      </p>
      <div>
        <LeftMenu />
      </div>
    </div>
  );
}

export default Navbar;
