import React from 'react';
import MenuLink from '../MenuLink/MenuLink';
import './HeaderContent.css';

function HeaderContent() {
  return (
    <header className="header-container">
      <div className="header-logo">
        <img
          src="/images/progress-logo-black.png"
          alt="BrewMyJob Logo"
          className="header-logo-img"
        />
      </div>
      <nav className="navbar">
        <MenuLink linkname="Cover Letters" url="/cover-letter" />
        <MenuLink linkname="Pricing & Plans" url="/" />
        <MenuLink linkname="Home" url="/" />
        <MenuLink linkname="Blog" url="/blog" />
        <MenuLink linkname="About Us" url="/about" />
        <MenuLink linkname="Contact Us" url="/contact" />
      </nav>
    </header>
  );
}

export default HeaderContent;
