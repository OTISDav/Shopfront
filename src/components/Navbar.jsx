import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>E-Commerce</h1>
      <ul>
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/categories">Catégories</Link></li>
        <li><Link to="/products">Produits</Link></li>
        <li><Link to="/checkout">Panier</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
