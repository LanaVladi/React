import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { App } from '../App';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

describe('App', () => {
  it('Renders about us page', () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <App />
      </MemoryRouter>
    );
    expect(
      screen.getByRole('heading', {
        level: 1,
        name: 'About us',
      })
    ).toHaveTextContent('About us');
  });
});

describe('App', () => {
  it('should have home link', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    expect(
      screen.getByRole('link', {
        name: 'Home',
      })
    ).toHaveTextContent('Home');
  });
});

describe('App', () => {
  it('should have form link', () => {
    render(
      <MemoryRouter initialEntries={['/form']}>
        <App />
      </MemoryRouter>
    );
    expect(
      screen.getByRole('link', {
        name: 'Form',
      })
    ).toHaveTextContent('Form');
  });
});
