import { describe, it } from 'vitest';
import { screen } from '@testing-library/react';
import { App } from '../App';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { renderWithProviders } from './test-utils';

describe('App', () => {
  it('renderWithProviderss about us page', () => {
    renderWithProviders(
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
    renderWithProviders(
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
    renderWithProviders(
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
