import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchSummary = createAsyncThunk(
  'summary/fetchAll',
  async ({ month, year }, thunkAPI) => {
    try {
      const { data } = await axios.get(`/transactions-summary?month=${month}&year=${year}`);
      return data;
    } catch (error) {
      console.error(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
