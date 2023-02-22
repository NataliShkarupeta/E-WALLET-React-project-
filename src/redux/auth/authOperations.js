import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { closeModalLogOut } from 'redux/global/globalSlice';

axios.defaults.baseURL = `https://wallet.goit.ua/api`;

const authTokenHandler = {
  setToken(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },

  clearToken() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk(
  '/auth/sign-up',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/auth/sign-up', credentials);
      authTokenHandler.setToken(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  '/auth/sign-in',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/auth/sign-in', credentials);
      authTokenHandler.setToken(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk(
  '/auth/sign-out',
  async (_, thunkAPI) => {
    try {
      await axios.delete('/auth/sign-out');
      authTokenHandler.clearToken();
      thunkAPI.dispatch(closeModalLogOut());
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    authTokenHandler.setToken(persistedToken);

    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
