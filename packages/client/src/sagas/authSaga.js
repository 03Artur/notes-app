import { call, put } from 'redux-saga/effects';
import * as AuthActionCreators from '../actions/authActionCreators';
import * as Api from '../api';
import { REFRESH_TOKEN_KEY } from '../constants';

export function* loginSaga(action) {
  try {
    const {
      payload: { data: actionData },
    } = action;
    const {
      data: { data },
    } = yield call(Api.loginUser, actionData);
    yield put(AuthActionCreators.authRequestSuccess(data));
  } catch (err) {
    yield put(AuthActionCreators.authRequestFail(err));
  }
}

export function* signUpSaga(action) {
  try {
    const {
      payload: { data: actionData },
    } = action;
    const {
      data: { data },
    } = yield call(Api.signUpUser, actionData);
    yield put(AuthActionCreators.authRequestSuccess(data));
  } catch (err) {
    yield put(AuthActionCreators.authRequestFail(err));
  }
}

export function* refreshAuthSaga(action) {
  try {
    const {
      payload: { data: actionData },
    } = action;
    const {
      data: { data },
    } = yield call(Api.refreshAuth, actionData);
    yield put(AuthActionCreators.authRequestSuccess(data));
  } catch (err) {
    yield put();
  }
}
