/* eslint-disable no-unused-vars */

import { store } from '../store';
import { ProductGroupType } from '../store/product.slice';

export const getAccessToken = (): string => {
  const state = store.getState();
  return state.auth.accessToken;
};

export const getProductGroup = (): ProductGroupType[] => {
  const state = store.getState();
  return state.product.productGroup;
};
