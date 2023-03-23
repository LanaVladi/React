import { describe } from 'vitest';

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
