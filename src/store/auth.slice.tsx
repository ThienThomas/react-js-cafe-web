/* eslint-disable no-unused-vars */

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  accessToken: '',
  isLoggedIn: false,
  errorLogin: '',
  errorRegister: ''
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, payload) {},
    loginStart(state) {
      state.errorLogin = '';
      state.isLoggedIn = false;
      state.errorRegister = '';
    },
    loginSuccess(state, payload) {
      state.accessToken = payload.payload.accessToken;
      state.errorLogin = '';
      state.isLoggedIn = true;
    },
    loginFailed(state, payload) {
      state.accessToken = '';
      state.errorLogin = payload.payload.errorLogin;
      state.isLoggedIn = false;
    },
    logout(state) {
      state.accessToken = '';
      state.errorLogin = '';
      state.isLoggedIn = false;
    },
    register(state, payload) {
      console.log('payload', payload);
    },
    registerStart(state) {
      state.errorRegister = '';
      state.isLoggedIn = false;
    },
    registerFailed(state, payload) {
      state.errorRegister = payload.payload.errorRegister;
    }
  }
});

export default authSlice;
