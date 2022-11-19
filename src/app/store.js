import { configureStore } from '@reduxjs/toolkit';
import foodsReducer from '../features/FetchAPI/dataSlice';
import foodReducer from '../features/FetchAPI/detailSlice';

export const store = configureStore({
  reducer: {
    detail: foodReducer,
    list: foodsReducer,
  },
});
