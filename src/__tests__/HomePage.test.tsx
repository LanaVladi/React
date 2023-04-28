import { describe, it } from 'vitest';
import React from 'react';
import { HomePage } from '../pages/HomePage';
import { BrowserRouter } from 'react-router-dom';
import { renderWithProviders } from './test-utils';
import { Provider } from 'react-redux';
import { setupStore } from '../store/store';

const store = setupStore({});

describe('HomePage', async () => {
  it('should renders cards-list-container in HomePage', () => {
    const { container } = renderWithProviders(
      <Provider store={store}>
        <HomePage />
      </Provider>,
      {
        wrapper: BrowserRouter,
      }
    );
    expect(container.getElementsByTagName('section')[0]).toBeInTheDocument();
  });

  it('should renders div wrapper for Searcher component in HomePage', () => {
    const { container } = renderWithProviders(
      <Provider store={store}>
        <HomePage />
      </Provider>,
      {
        wrapper: BrowserRouter,
      }
    );
    expect(container.getElementsByTagName('div')[0]).toBeInTheDocument();
  });
});
