import { describe, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
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

describe('Card', () => {
  it('should have click event in Card', () => {
    render(
      <Card
        onClick={onClick}
        card={{
          id: 1,
          name: 'Rick Sanchez',
          image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
        }}
      />
    );
    const card = screen.getAllByTestId('card-elem');
    expect(screen.getByTestId('card-elem')).toBeInTheDocument();
    fireEvent.click(card[0]);
  });
});
