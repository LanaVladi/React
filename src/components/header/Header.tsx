import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

class Header extends React.Component {
  state = { path: window.location.pathname.slice(1) };
  render(): React.ReactNode {
    return (
      <header>
        <h1>{this.state.path}</h1>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/form">Form</NavLink>
      </header>
    );
  }
}

export default Header;
