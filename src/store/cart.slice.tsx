import { createSlice } from '@reduxjs/toolkit';

const initialState: any = {
  productList: []
};

const cartSlice = createSlice({
  name: 'slice',
  initialState,
  reducers: {
    addToCart(state, payload) {
      state.productList.push(payload.payload.product);
    }
  }
});
