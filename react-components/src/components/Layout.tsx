import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { CardList } from './CardList';

function Layout() {
  return (
    <>
      <header>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </header>

      <main className="container" {...CardList}>
        <Outlet />
      </main>

      <footer className="footer">2023</footer>
    </>
  );
}

export { Layout };
