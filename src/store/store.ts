import { PreloadedState, combineReducers, configureStore } from '@reduxjs/toolkit';
import { APIDataSlice } from './APIDataSlice';
import formReducer from './formSlice';
import searcherReducer from './searchSlice';
import mainCardsReducer from './mainCardsSlice';

export const rootReducer = combineReducers({
  formCards: formReducer,
  searcher: searcherReducer,
  mainCards: mainCardsReducer,
  [APIDataSlice.reducerPath]: APIDataSlice.reducer,
});

const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(APIDataSlice.middleware),
    preloadedState,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

export { setupStore };
