import { describe, it } from 'vitest';
import { screen } from '@testing-library/react';
import React from 'react';
import { Form } from '../components/form/Form';
import { renderWithProviders } from './test-utils';

describe('Form', () => {
  it('should have a sign in button', () => {
    renderWithProviders(<Form />);

    expect(screen.getByText('Sign in')).toBeInTheDocument();
  });
});
