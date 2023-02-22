import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchSummary } from './summaryOperationst';

const setError = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const setPending = state => {
  state.isLoading = true;
};

const extraActions = [fetchSummary];
const createActions = type => {
  return extraActions.map(action => action[type]);
};

const summarySlice = createSlice({
  name: 'summary',
  initialState: {
    summaryData: [],
    isLoading: false,
    error: null,
  },

  extraReducers: builder => {
    builder
      .addCase(fetchSummary.fulfilled, (state, { payload }) => {
        state.summaryData = payload;
        state.isLoading = false;
        state.error = null;
      })

      .addMatcher(isAnyOf(...createActions('pending')), setPending)
      .addMatcher(isAnyOf(...createActions('rejected')), setError);
  },
});

export default summarySlice.reducer;
