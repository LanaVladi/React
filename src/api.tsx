import { CardType } from 'types';

const getAPIData = async (name: string): Promise<CardType[]> => {
  const baseUrl = `https://rickandmortyapi.com/api/character/?${name}`;
  const response = await fetch(baseUrl);
  const data = await response.json();
  return data.results;
};

const getAPIDataById = async (id: number): Promise<CardType> => {
  const baseUrl = `https://rickandmortyapi.com/api/character/${id}`;
  const response = await fetch(baseUrl);
  const data = await response.json();
  return data;
};

export { getAPIData, getAPIDataById };
