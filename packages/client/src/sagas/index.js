import { takeLatest } from 'redux-saga/effects';
import ACTION_TYPE from '../actions/type';
import * as AuthSagas from './authSagas';
import * as NotesSagas from './notesSagas';

function* rootSaga() {
  // AUTH
  yield takeLatest(ACTION_TYPE.LOGIN_REQUEST, AuthSagas.loginSaga);
  yield takeLatest(ACTION_TYPE.SIGN_UP_REQUEST, AuthSagas.signUpSaga);
  yield takeLatest(ACTION_TYPE.REFRESH_AUTH_REQUEST, AuthSagas.refreshAuthSaga);
  // NOTES
  yield takeLatest(ACTION_TYPE.CREATE_NOTE_REQUEST, NotesSagas.createNoteSaga);
  yield takeLatest(ACTION_TYPE.GET_NOTES_REQUEST, NotesSagas.getNotesSaga);
  yield takeLatest(ACTION_TYPE.UPDATE_NOTE_REQUEST, NotesSagas.updateNoteSaga);
  yield takeLatest(ACTION_TYPE.DELETE_NOTE_REQUEST, NotesSagas.deleteNoteSaga);
}

export default rootSaga;
