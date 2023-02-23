import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './authOperations';

const setError = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
  // console.log(action.payload);
};

const setPending = state => {
  state.isLoading = true;
};
const initialState = {
  user: { username: null, email: null, balance: null, id: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
  error: null,
};
const extraActions = [register, logIn, logOut, refreshUser];
const createActions = type => {
  return extraActions.map(action => action[type]);
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoading = false;
        state.error = null;
        state.isLoggedIn = true;
        console.log(payload);
      })

      .addCase(logIn.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoading = false;
        state.error = null;
        state.isLoggedIn = true;
        console.log(payload);
      })

      .addCase(logOut.fulfilled, state => {
        state.user = { username: null, email: null, balance: null, id: null };
        state.isLoading = false;
        state.token = null;
        state.isLoggedIn = false;
      })

      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.isRefreshing = false;
        state.user = payload;
        state.isLoggedIn = true;
      })
      .addMatcher(isAnyOf(...createActions('pending')), setPending)
      .addMatcher(isAnyOf(...createActions('rejected')), setError);
  },
});

export const authReducer = authSlice.reducer;


