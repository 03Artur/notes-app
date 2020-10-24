import { takeLatest } from 'redux-saga/effects';
import ACTION_TYPE from '../actions/type';
import * as AuthSagas from './authSaga';

function* rootSaga() {
  yield takeLatest(ACTION_TYPE.LOGIN_REQUEST, AuthSagas.loginSaga);
  yield takeLatest(ACTION_TYPE.SIGN_UP_REQUEST, AuthSagas.signUpSaga);
  yield takeLatest(ACTION_TYPE.REFRESH_AUTH_REQUEST, AuthSagas.refreshAuthSaga);
}

export default rootSaga;
