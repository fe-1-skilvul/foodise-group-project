import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  foods: [],
  error: '',
};

export const fetchFoods = createAsyncThunk(
  'data/fetchFoods',
  async ({ query, category }) => {
    return axios
      .get(

        `https://api.spoonacular.com/recipes/complexSearch?apiKey=4da635c6a35347ce8cce85199806fd80&query=${query}&number=30&type=${category}&minProtein=10`

      )
      .then((res) => res.data.results);
  }
);

const foodSlice = createSlice({
  name: 'food',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchFoods.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchFoods.fulfilled, (state, action) => {
      state.loading = false;
      state.foods = action.payload;
      state.error = '';
    });
    builder.addCase(fetchFoods.rejected, (state, action) => {
      state.loading = false;
      state.foods = [];
      state.error = action.error.message;
    });
  },
});

export default foodSlice.reducer;
