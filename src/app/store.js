import { configureStore } from '@reduxjs/toolkit';
import foodsReducer from '../features/FetchAPI/dataSlice';

export const store = configureStore({
  reducer: foodsReducer,
});
