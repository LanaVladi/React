import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './header.css';

function Header() {
  const location = useLocation();
  const currentLocation =
    location.pathname.slice(1) === ''
      ? location.pathname.replace('/', 'home').toUpperCase()
      : location.pathname.slice(1).toUpperCase();

  return (
    <header>
      <h1>{currentLocation}</h1>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About us</NavLink>
      <NavLink to="/form">Form</NavLink>
    </header>
  );
}

export { Header };
