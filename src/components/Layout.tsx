import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './header/Header';
import { CardList } from './card-list/CardList';

function Layout() {
  return (
    <>
      <Header />
      <main className="container" {...CardList}>
        <Outlet />
      </main>

      <footer className="footer">2023</footer>
    </>
  );
}

export { Layout };
