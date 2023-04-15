import { describe, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { Modal } from '../components/modal/Modal';
import { CardType } from 'types';

const setActiveModal = () => {};

const openedCard: CardType = {
  id: 1,
  name: 'Rick Sanchez',
  status: 'Alive',
  species: 'Human',
  image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  gender: 'Male',
};

describe('Modal', () => {
  it('Renders button in Modal and text Data is loading... ', () => {
    render(
      <Modal openedCard={undefined} setActiveModal={setActiveModal} displayIndicator={true} />
    );
    expect(screen.getAllByRole('button')).toBeDefined();
    expect(screen.getAllByText(/Data is loading.../i)).toBeDefined();
  });
});

describe('Modal', () => {
  it('should have click event in Modal close button', () => {
    render(
      <Modal openedCard={openedCard} setActiveModal={setActiveModal} displayIndicator={true} />
    );
    const btn = screen.getByTestId('modal-close-btn');
    expect(btn).toBeInTheDocument();
    fireEvent.click(btn);
  });
});

describe('Modal', () => {
  it('should have overlay in Modal', () => {
    render(
      <Modal openedCard={openedCard} setActiveModal={setActiveModal} displayIndicator={true} />
    );
    const overlay = screen.getByTestId('modal-overlay') as HTMLDivElement;
    expect(overlay).toBeDefined();
  });
});

describe('Modal', () => {
  it('should have text fields such as Species, Gender, Status in Modal', () => {
    render(
      <Modal openedCard={openedCard} setActiveModal={setActiveModal} displayIndicator={false} />
    );
    expect(screen.getAllByText(/Species: Human/i)).toBeDefined();
    expect(screen.getAllByText(/Gender: Male/i)).toBeDefined();
    expect(screen.getAllByText(/Status: Alive/i)).toBeDefined();
  });
});
