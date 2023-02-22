import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  fetchAllTransactions,
  addTransaction,
  deleteTransaction,
  upDateTransaction,
} from './transactionOperations';

const setError = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const setPending = state => {
  state.isLoading = true;
};

const extraActions = [
  fetchAllTransactions,
  addTransaction,
  deleteTransaction,
  upDateTransaction,
];
const createActions = type => {
  return extraActions.map(action => action[type]);
};

const totalBalanc = state => {
  let sum = state.finance.data.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.amount;
  }, 0);

  state.finance.totalBalance = sum;
};

const transactionSlice = createSlice({
  name: 'finance',
  initialState: {
    finance: {
      data: [],
      totalBalance: 0,
    },
    error: null,
    isLoading: false,
  },

  extraReducers: builder => {
    builder
      .addCase(fetchAllTransactions.fulfilled, (state, { payload }) => {
        state.finance.data = payload;
        totalBalanc(state);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addTransaction.fulfilled, (state, { payload }) => {
        state.finance.data.push(payload);
        totalBalanc(state);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteTransaction.fulfilled, (state, { payload }) => {
        const { data } = state.finance;
        state.finance.data = data.filter(trans => trans.id !== payload);
        totalBalanc(state);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(upDateTransaction.fulfilled, (state, { payload }) => {
        const { data } = state.finance;
        state.finance.data = data.map(obj =>
          obj.id === payload.id ? payload : obj
        );
        totalBalanc(state);
        state.isLoading = false;
        state.error = null;
      })
      .addMatcher(isAnyOf(...createActions('pending')), setPending)
      .addMatcher(isAnyOf(...createActions('rejected')), setError);
  },
});

export default transactionSlice.reducer;
