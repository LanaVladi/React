import { CardType } from '../types';
import mainCardsReducer, { setMainCardsList } from '../store/mainCardsSlice';

const mainCardsState = {
  mainCardsList: [
    {
      id: 1,
      name: 'Rick Sanchez',
      species: 'Human',
      gender: 'Male',
      status: 'Alive',
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpg',
    },
    {
      id: 2,
      name: 'Morty Smith',
      species: 'Human',
      gender: 'Male',
      status: 'Alive',
      image: 'https://rickandmortyapi.com/api/character/avatar/2.jpg',
    },
  ],
};

describe('mainCardsSlice', () => {
  it('should return default cardsState when passed an empty action', () => {
    const result = mainCardsReducer(undefined, { type: '' });
    expect(result).toEqual({ mainCardsList: [] });
  });

  it('should add new form card with "setMainCardsList" action', () => {});
  const mainCardsList: CardType = {
    id: 1,
    name: 'Rick Sanchez',
    species: 'Human',
    gender: 'Male',
    status: 'Alive',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpg',
  };
  const action = { type: setMainCardsList.type, payload: mainCardsList };
  const result = mainCardsReducer(mainCardsState, action);
  expect(result.mainCardsList[0].gender).toBe('Male');
  expect(result.mainCardsList[0].name).toBe('Rick Sanchez');
  expect(result.mainCardsList[0].species).toBe('Human');
  expect(result.mainCardsList[0].status).toBe('Alive');
});
