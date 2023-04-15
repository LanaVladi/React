import { Searcher } from '../components/searcher/Searcher';
import { describe } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

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

const startSearch = () => {};

describe('HomePage', async () => {
  it('should renders placeholder in searcher HomePage', () => {
    render(<Searcher startSearch={startSearch} />);
    expect(screen.getByPlaceholderText(/Search by name/i)).toBeInTheDocument();
  });
});

describe('Searcher', async () => {
  it('should renders form in searcher in HomePage', () => {
    render(<Searcher startSearch={startSearch} />);
    const form = screen.getByTestId('form');
    expect(form).toBeInTheDocument();
    fireEvent.submit(form);
  });
});
