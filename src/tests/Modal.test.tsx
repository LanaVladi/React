import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { Modal } from '../components/modal-window/Modal';

const setActiveModal = () => {};

describe('Modal', () => {
  it('Renders button in Modal', () => {
    render(
      <Modal openedCard={undefined} setActiveModal={setActiveModal} displayIndicator={true} />
    );
    expect(screen.getAllByRole('button')).toBeDefined();
    expect(screen.getAllByText(/Data is loading.../i)).toBeDefined();
  });
});
