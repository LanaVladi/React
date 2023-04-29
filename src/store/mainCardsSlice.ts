import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CardType } from '../types';
import { RootState } from './store';

type mainCardsState = {
  mainCardsList: CardType[];
};

const initialState: mainCardsState = {
  mainCardsList: [],
};

const mainCardsSlice = createSlice({
  name: 'mainCards',
  initialState,
  reducers: {
    setMainCardsList(state, action: PayloadAction<CardType[]>) {
      state.mainCardsList.push(...Object.values(action.payload));
    },
  },
});

export const { setMainCardsList } = mainCardsSlice.actions;

export const selectCardsData = (state: RootState) => state.mainCards;

export default mainCardsSlice.reducer;
