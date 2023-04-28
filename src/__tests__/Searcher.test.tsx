import { Searcher } from '../components/searcher/Searcher';
import { describe } from 'vitest';
import { fireEvent, screen } from '@testing-library/react';
import React from 'react';
import { renderWithProviders } from './test-utils';

const initialStateSearcher = { searchText: 'test' };

const setLocalStorage = (id: string, data: { data: string }) => {
  window.localStorage.setItem(id, JSON.stringify(data));
};

test('data is added into localStorage', () => {
  const mockId = '5';
  const mockJson = { data: 'json data' };
  setLocalStorage(mockId, mockJson);
  expect(localStorage.getItem(mockId)).toEqual(JSON.stringify(mockJson));
});

describe('Set localStorage item', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  test('data is added into localStorage', () => {
    const mockId = '13';
    const mockJson = { data: 'json data' };
    setLocalStorage(mockId, mockJson);
    expect(localStorage.getItem(mockId)).toEqual(JSON.stringify(mockJson));
  });
});

describe('Searcher', async () => {
  it('should renders placeholder in searcher HomePage', () => {
    renderWithProviders(<Searcher />);
    expect(screen.getByPlaceholderText(/Search by name/i)).toBeInTheDocument();
  });

  it('should renders form in searcher in HomePage', () => {
    renderWithProviders(<Searcher />);
    const form = screen.getByTestId('form');
    expect(form).toBeInTheDocument();
    fireEvent.submit(form);
  });

  it('should have value "test" from redux store ', () => {
    renderWithProviders(<Searcher />, {
      preloadedState: {
        searcher: initialStateSearcher,
      },
    });
    expect(screen.getByRole('textbox')).toHaveValue('test');
  });
});
