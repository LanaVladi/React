import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { Confirmation } from '../components/form/confirmation/Confirmation';

describe('Confirmation', () => {
  it('Renders paragraph in Confirmation', () => {
    render(<Confirmation />);
    expect(screen.getAllByRole('heading', { name: /Data has been saved!/i })).toBeDefined();
  });
});
