import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <div className="logo-circle"></div>
        <span>Anywhere app.</span>
      </div>
      <nav className="navigation">
        <ul>
          <li><a href="#home" className='active'>Home</a></li>
          <li><a href="#Join" className="active">Join</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
