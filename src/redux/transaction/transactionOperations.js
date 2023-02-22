import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { closeModalAddTransaction} from 'redux/global/globalSlice';
import { closeModalUpDateTransaction } from 'redux/global/globalSlice';
import { closeModalConfirmation } from 'redux/global/globalSlice';

export const fetchAllTransactions = createAsyncThunk(
  'transactions/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/transactions');

      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);


export const addTransaction = createAsyncThunk(
  'transactions/addTransaction',
  async (dataInfo, thunkAPI) => {
    try {
      const { data } = await axios.post('/transactions', dataInfo);
      thunkAPI.dispatch(closeModalAddTransaction());
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteTransaction = createAsyncThunk(
  'transactions/deleteTransactions',
  async (transactionId, thunkAPI) => {
    try {
      await axios.delete(`/transactions/${transactionId}`);
      thunkAPI.dispatch(closeModalConfirmation());
      return transactionId;

    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const upDateTransaction = createAsyncThunk(
  'transactions/upDateTransaction',
  async ({ transactionId, dataInfo }, thunkAPI) => {
    try {
      const { data } = await axios.patch(
        `/transactions/${transactionId}`,
        dataInfo
      );
      thunkAPI.dispatch(closeModalUpDateTransaction())
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);