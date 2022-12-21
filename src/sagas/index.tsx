import { fork } from 'redux-saga/effects';
import { actionAuthWatcher } from './auth.saga';

export function* rootSaga() {
  yield fork(actionAuthWatcher);
}
