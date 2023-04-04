import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { SignInCard } from '../components/form/sign-in-card/SignInCard';

describe('signInCard', () => {
  it('Renders images in signInCard', () => {
    render(
      <SignInCard
        signInCard={{
          username: '',
          birthday: '',
          gender: '',
          country: '',
          avatar: '',
          remember: false,
        }}
      />
    );
    expect(screen.getAllByRole('img')).toBeDefined();
  });
});
