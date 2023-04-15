import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import React from 'react';
import { HomePage } from '../pages/HomePage';
import { BrowserRouter } from 'react-router-dom';

describe('HomePage', async () => {
  it('should renders container cards-list-container in HomePage', () => {
    const { container } = render(<HomePage />, { wrapper: BrowserRouter });
    expect(container.getElementsByClassName('cards-list-container')[0]).toBeInTheDocument();
  });
});

describe('HomePage', async () => {
  it('should renders div wrapper for Searcher component in HomePage', () => {
    const { container } = render(<HomePage />, { wrapper: BrowserRouter });
    expect(container.getElementsByTagName('div')[0]).toBeInTheDocument();
  });
});
