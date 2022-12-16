/* eslint-disable no-unused-vars */

import { call, put, takeLatest } from 'redux-saga/effects';
import { loginUser } from '../api/auth';
import { actions } from '../store';

const TAG = 'auth.saga';
function* callLoginAPI(action: any): any {
  console.log('action', action);

  const data = action.payload;
  console.log('data', data);
  yield put(actions.auth.loginStart());
  try {
    const response = yield call(loginUser, { username: data.username, password: data.password });
    console.log('response', response);
  } catch (e) {
    console.log(e);
  }
}

export function* actionAuthWatcher() {
  yield takeLatest('auth/login', callLoginAPI);
}
