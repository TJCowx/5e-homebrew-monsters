import { configureStore } from "@reduxjs/toolkit";
import monsterSlice from '../reducers/monsterReducer';

export const makeStore = () => 
  configureStore({
    reducer: monsterSlice.reducer,
  });

export type AppState = ReturnType<typeof monsterSlice.reducer>;