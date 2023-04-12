import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { Card } from '../components/Card';

const onClick = () => () => {};

describe('Card', () => {
  it('Renders images in Card', () => {
    render(
      <Card
        card={{
          id: 0,
          name: '',
          image: '',
        }}
        onClick={onClick}
      />
    );
    expect(screen.getAllByRole('img')).toBeDefined();
  });
});
