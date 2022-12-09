import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <header>
    <h1>Bookstore CMS</h1>
    <nav>
      <Link to="/">Books</Link>
      <Link to="/categories">Categories</Link>
    </nav>
  </header>
);

export default NavBar;
