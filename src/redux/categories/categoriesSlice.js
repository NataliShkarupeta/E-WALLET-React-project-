import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchCategories } from './categoriesOperations';

const setError = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const setPending = state => {
  state.isLoading = true;
};

const extraActions = [fetchCategories];
const createActions = type => {
  return extraActions.map(action => action[type]);
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [],
    isLoading: false,
    error: null,
  },

  extraReducers: builder => {
    builder
      .addCase(fetchCategories.fulfilled, (state, { payload }) => {
        state.categories = payload;
        state.isLoading = false;
        state.error = null;
      })

      .addMatcher(isAnyOf(...createActions('pending')), setPending)
      .addMatcher(isAnyOf(...createActions('rejected')), setError);
  },
});

export default categoriesSlice.reducer;
