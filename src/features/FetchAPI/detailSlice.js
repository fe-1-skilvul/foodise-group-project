import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  food: {},
  error: '',
};

export const fetchDetail = createAsyncThunk(
  'food/fetchFood',
  async ({ id }) => {
    return axios
      .get(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=4da635c6a35347ce8cce85199806fd80&includeNutrition=true`
      )
      .then((res) => res.data);
  }
);

const detailSlice = createSlice({
  name: 'detail',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchDetail.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchDetail.fulfilled, (state, action) => {
      state.loading = false;
      state.food = action.payload;
      state.error = '';
    });
    builder.addCase(fetchDetail.rejected, (state, action) => {
      state.loading = false;
      state.food = [];
      state.error = action.error.message;
    });
  },
});

export default detailSlice.reducer;
