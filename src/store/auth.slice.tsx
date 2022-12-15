import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  accessToken: Math.random().toString(),
  accessTokenForwarded: Math.random().toString()
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    saveAccessToken(state, action) {
      state.accessToken = action.payload.accessToken;
      state.accessTokenForwarded = action.payload.accessTokenForwarded;
    },
    removeAccessToken(state) {
      state.accessToken = '';
    }
  }
});

export default authSlice;
