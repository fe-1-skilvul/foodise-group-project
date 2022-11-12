import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../pages/home/TodoSlice';

export const store = configureStore({
  reducer: {
    todolist: todoReducer,
  },
});
