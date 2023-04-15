import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { NotFound } from '../components/not-found/NotFound';

describe('NotFound', () => {
  it('Renders heading in NotFound', () => {
    render(<NotFound />);
    expect(
      screen.getAllByRole('heading', { name: /CARD NOT FOUND! PLEASE TRY AGAIN!/i })
    ).toBeDefined();
  });
});
