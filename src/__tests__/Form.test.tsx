import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { Form } from '../components/form/Form';

describe('Form', () => {
  it('should have a sign in button', () => {
    render(<Form addNewCard={function (): void {}} />);

    expect(screen.getByText('Sign in')).toBeInTheDocument();
  });
});
