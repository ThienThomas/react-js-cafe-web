/* eslint-disable no-unused-vars */

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  accessToken: '',
  errorLogin: ''
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, payload) {
      console.log(11);
    },
    loginStart(state) {
      state.errorLogin = '12';
    },
    loginSuccess(state, payload) {
      state.accessToken = payload.payload.accessToken;
      state.errorLogin = '12';
    },
    loginFailed(state, payload) {
      state.accessToken = '';
      state.errorLogin = payload.payload.errorLogin;
    }
  }
});

export default authSlice;
