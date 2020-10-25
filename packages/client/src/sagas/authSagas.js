import { call, put } from 'redux-saga/effects';
import * as AuthActionCreators from '../actions/authActionCreators';
import * as API from '../api';
export function* loginSaga(action) {
  try {
    const {
      payload: { data: actionData },
    } = action;
    const {
      data: { data },
    } = yield API.auth.login(actionData);
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
    } = yield call(API.auth.signUp, actionData);
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
    } = yield API.auth.refresh(actionData);
    yield put(AuthActionCreators.authRequestSuccess(data));
  } catch (err) {
    yield put(AuthActionCreators.authRequestFail(err));
  }
}
