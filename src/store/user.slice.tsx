/* eslint-disable no-undef */

import { createSlice } from '@reduxjs/toolkit';

export interface IUser {
  id: string;
  username: string;
  email: string;
  birth: Date | string | number;
  avatar: string;
  phone: string;
  gender: string;
}
const initialState: IUser = {
  id: '',
  username: '',
  email: '',
  birth: '',
  avatar: '',
  phone: '',
  gender: ''
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    saveUserInformation(state, payload) {
      state.id = payload.payload.id;
      state.username = payload.payload.username;
      state.email = payload.payload.email;
      state.birth = payload.payload.birth;
      state.phone = payload.payload.phone;
      state.gender = payload.payload.gender;
    },
    deleteUserInfo(state) {
      state.id = '';
      state.username = '';
      state.email = '';
      state.birth = '';
      state.avatar = '';
      state.phone = '';
      state.gender = '';
    }
  }
});

export default userSlice;
