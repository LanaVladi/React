import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type searchRequestState = {
  searchText: string;
};

const initialState: searchRequestState = {
  searchText: '',
};

const searchSlice = createSlice({
  name: 'searcher',
  initialState,
  reducers: {
    setSearchText(state, action: PayloadAction<string>) {
      state.searchText = action.payload;
    },
  },
});

export const { setSearchText } = searchSlice.actions;
export default searchSlice.reducer;
