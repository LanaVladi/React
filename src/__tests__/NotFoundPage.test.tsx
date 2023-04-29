import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { NotFoundPage } from '../pages/NotFoundPage';
import { BrowserRouter } from 'react-router-dom';

describe('NotFoundPage', async () => {
  it('should renders heading in NotFoundPage', () => {
    render(<NotFoundPage />, { wrapper: BrowserRouter });
    expect(screen.queryByText('This page not found!')).toBeInTheDocument();
  });
});

describe('NotFoundPage', async () => {
  it('should navigate to error page if route is wrong', () => {
    render(<NotFoundPage />, { wrapper: BrowserRouter });
    expect(screen.queryByText('wrong-route')).not.toBeInTheDocument();
  });
});
