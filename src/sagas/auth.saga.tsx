/* eslint-disable no-unused-vars */

import { call, put, takeLatest } from 'redux-saga/effects';
import { IUserRegisterParams, loginUser, registerUser } from '../api/auth';
import { actions } from '../store';

const TAG = 'auth.saga';
function* callLoginAPI(action: any): any {
  const body = action.payload;
  yield put(actions.auth.loginStart());
  try {
    const response = yield call(loginUser, { username: body.username, password: body.password });
    if (response.status === 200 && !response.hasErrors) {
      const userInfo = response.data.content;
      const accessToken = userInfo.token;
      delete userInfo.token;
      yield put(actions.user.saveUserInformation(userInfo));
      yield put(actions.auth.loginSuccess({ accessToken: accessToken }));
    } else yield put(actions.auth.loginFailed({ errorLogin: JSON.stringify(response) }));
  } catch (e) {
    yield put(actions.auth.loginFailed({ errorLogin: JSON.stringify(e) }));
  }
}

function* callRegisterAPI(action: any): any {
  const body = action.payload as IUserRegisterParams;
  yield put(actions.auth.registerStart());
  try {
    console.log(body);

    const response = yield call(registerUser, body);
    if (response.status === 200 && !response.hasErrors) {
      yield put(actions.auth.login({ username: body.username, password: body.password }));
    } else yield put(actions.auth.registerFailed({ errorLogin: JSON.stringify(response) }));
  } catch (e) {
    yield put(actions.auth.registerFailed({ errorLogin: JSON.stringify(e) }));
  }
}
function* callLogOutActions(): any {
  yield put(actions.user.deleteUserInfo());
}

export function* actionAuthWatcher() {
  yield takeLatest('auth/login', callLoginAPI);
  yield takeLatest('auth/logout', callLogOutActions);
  yield takeLatest('auth/register', callRegisterAPI);
}
