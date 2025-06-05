import React from 'react';
import MenuLink from '../MenuLink/MenuLink';
import './HeaderContent.css'; // Import the new CSS file

function HeaderContent() {
  return (
    <header className="header-container">
      <div className="header-logo">Header Logo</div>
      <nav className="navbar">
        <MenuLink linkname="Generate a Cover Letters" url="/cover-letter" />
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
