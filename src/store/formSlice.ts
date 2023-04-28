import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SignInFormFields } from '../types';

export type cardsState = {
  formCardsList: SignInFormFields[];
};

const initialState: cardsState = {
  formCardsList: [],
};

const formSlice = createSlice({
  name: 'formCards',
  initialState,
  reducers: {
    addNewCard(state, action: PayloadAction<SignInFormFields>) {
      state.formCardsList.push(action.payload);
    },
  },
});

export const { addNewCard } = formSlice.actions;
export default formSlice.reducer;
