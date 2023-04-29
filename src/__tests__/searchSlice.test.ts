import { SignInFormFields } from 'types';
import formReducer, { addNewCard } from '../store/formSlice';

const cardsState = {
  formCardsList: [],
};

describe('formSlice', () => {
  it('should return default cardsState when passed an empty action', () => {
    const result = formReducer(undefined, { type: '' });
    expect(result).toEqual({ formCardsList: [] });
  });

  it('should add new form card with "addNewCard" action', () => {});
  const formCard: SignInFormFields = {
    avatar:
      'stock-vector-black-and-white-vector-illustration-of-a-baby-elephant-with-mandala-drawn-on-his-skin-180625970.jpg',
    birthday: '1986-04-05',
    country: 'Japan',
    gender: 'female',
    remember: true,
    username: 'Alex',
  };
  const action = { type: addNewCard.type, payload: formCard };
  const result = formReducer(cardsState, action);
  expect(result.formCardsList[0].country).toBe('Japan');
  expect(result.formCardsList[0].gender).toBe('female');
  expect(result.formCardsList[0].username).toBe('Alex');
});
