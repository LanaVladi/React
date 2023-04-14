import { baseUrl } from './constants';

const getAPIData = async (queries: string) => {
  try {
    const response = await fetch(`${baseUrl}?name=${queries}`);
    const data = await response.json();
    return response.status === 200 ? data.results : '';
  } catch {
    return console.error('CARD NOT FOUND! PLEASE TRY AGAIN!');
  }
};

const getAPIDataById = async (id: number) => {
  try {
    const response = await fetch(`${baseUrl}${id}`);
    const data = await response.json();
    return data;
  } catch {
    return console.error('CARD NOT FOUND! PLEASE TRY AGAIN!');
  }
};

export { getAPIData, getAPIDataById };
