import { store } from '../store';

export const getAccessToken = (): string => {
  const state = store.getState();
  return state.auth.accessToken;
};
