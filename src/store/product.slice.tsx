/* eslint-disable no-unused-vars */

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  productList: [],
  getAllProductErr: ''
};
const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    getAllProduct(state) {},
    getAllProductStart(state) {
      state.getAllProductErr = '';
    },
    getAllProductSuccess(state, payload) {
      state.productList = payload.payload.productList;
    },
    getAllProductFailed(state, payload) {
      state.getAllProductErr = payload.payload.getAllProductErr;
    }
  }
});

export default productSlice;
