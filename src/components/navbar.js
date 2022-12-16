import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const NavBar = () => (
  <header>
    <div className="nav-one">
      <h1>Bookstore CMS</h1>
      <nav>
        <Link to="/">Books</Link>
        <Link to="/categories">Categories</Link>
      </nav>
    </div>
    <div className="nav-two">
      <button type="button">icon</button>
    </div>

  </header>
);

export default NavBar;
