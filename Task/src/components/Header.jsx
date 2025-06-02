import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <div className="logo-circle"></div>
        <span className='logo-text'>Anywhere app.</span>
      </div>
      <nav className="nav">
        <ul>
          <li><a href="#home" >Home</a></li>
          <li><a href="#Join" >Join</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
