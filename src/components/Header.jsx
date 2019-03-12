import React from 'react';
import '../stylesheets/Header.css'

const Header = ({ navClickHandler }) => (
  <header>
    <div>
      <h1>John C Raiss MD</h1>
      <nav>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">FAQ</a>
        <a href="#">Useful Links</a>
        <a href="#">Blog</a>
        <a href="#">Contact</a>
      </nav>
    </div>
  </header>
);

export default Header;
