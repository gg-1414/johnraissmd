import React from 'react';
import '../stylesheets/Header.css'

const Header = ({ navClickHandler }) => (
  <header>
    <div>
      <h1>John C Raiss MD</h1>
      <nav onClick={ navClickHandler }>
        <button>About</button>
        <button>Services</button>
        <button>FAQ</button>
        <button>Resources</button>
        <button>Blog</button>
        <button>Contact</button>
      </nav>
    </div>
  </header>
);

export default Header;
