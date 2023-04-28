import { describe, it, vi } from 'vitest';
import { fireEvent, screen } from '@testing-library/react';
import React from 'react';
import { Modal } from '../components/modal/Modal';
import { CardType } from '../types';
import { Provider } from 'react-redux';
import { setupStore } from '../store/store';
import { renderWithProviders } from './test-utils';

const store = setupStore({});
const initialState = { mainCardsList: [] };
const initialStateSearcher = { searchText: '' };

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
  it('Renders close button in Modal and have "X" text', () => {
    const closeModal = vi.fn();
    const { getByText } = renderWithProviders(
      <Provider store={store}>
        <Modal openedCard={undefined} setActiveModal={setActiveModal} />
        {
          <div className="modal">
            <button className="modal-close-btn" data-testid="modal-close-btn" onClick={closeModal}>
              X
            </button>
          </div>
        }
      </Provider>,
      {
        preloadedState: {
          mainCards: initialState,
          searcher: initialStateSearcher,
        },
      }
    );

    const modalCloseBtn = screen.getAllByRole('button', { hidden: true });
    expect(modalCloseBtn).toBeDefined();

    expect(getByText('X')).toBeInTheDocument();
    fireEvent.click(getByText(/X/i));
    expect(closeModal).toBeCalledTimes(1);
  });

  it('Renders in Modal text Data is loading... ', () => {
    renderWithProviders(
      <Provider store={store}>
        <Modal openedCard={undefined} setActiveModal={setActiveModal} />
      </Provider>,
      {}
    );

    expect(screen.getAllByText(/Data is loading.../i)).toBeDefined();
  });
});

describe('Modal', () => {
  it('should have overlay in Modal', () => {
    renderWithProviders(
      <Provider store={store}>
        <Modal openedCard={openedCard} setActiveModal={setActiveModal} />
      </Provider>
    );
    const overlay = screen.getByTestId('modal-overlay') as HTMLDivElement;
    expect(overlay).toBeDefined();
    fireEvent.click(overlay);
  });
});

describe('Modal', () => {
  it('should have text fields such as Species, Gender, Status in Modal', () => {
    renderWithProviders(
      <Provider store={store}>
        <Modal openedCard={openedCard} setActiveModal={setActiveModal} />
        {
          <div className="modal-card-details">
            <h5 className="modal-card-name">{openedCard?.name}</h5>
            <p className="modal-card-species">{`Species: ` + openedCard?.species}</p>
            <p className="modal-card-gender">{`Gender: ` + openedCard?.gender}</p>
            <p className="modal-card-status">{`Status: ` + openedCard?.status}</p>
          </div>
        }
      </Provider>
    );
    expect(screen.getAllByText(/Species: Human/i)).toBeDefined();
    expect(screen.getAllByText(/Gender: Male/i)).toBeDefined();
    expect(screen.getAllByText(/Status: Alive/i)).toBeDefined();
  });
});
