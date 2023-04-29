import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { AboutUsPage } from './pages/AboutUsPage';
import { Layout } from './components/Layout';
import { FormPage } from './pages/FormPage';

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutUsPage />} />
            <Route path="form" element={<FormPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export { App };
