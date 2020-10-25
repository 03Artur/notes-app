import { put, call } from 'redux-saga/effects';
import * as NotesActionCreators from '../actions/notesActionCreators';
import * as API from './../api';

export function* createNoteSaga(action) {
  try {
    const {
      payload: { data: actionData },
    } = action;
    const {
      data: { data },
    } = yield call(API.notes.create, actionData);
    yield put(NotesActionCreators.createNoteRequestSuccess(data));
  } catch (err) {
    yield put(NotesActionCreators.createNoteRequestFailed(err));
  }
}

export function* getNotesSaga(action) {
  try {
    const {
      payload: { query },
    } = action;
    const {
      data: { data },
    } = yield call(API.notes.getMany, query);
    yield put(NotesActionCreators.getNotesRequestSuccess(data));
  } catch (err) {
    yield put(NotesActionCreators.getNotesRequestFailed(err));
  }
}

export function* updateNoteSaga(action) {
  try {
    const {
      payload: { noteId, data: actionData },
    } = action;
    const {
      data: { data },
    } = yield call(API.notes.updateById, noteId, actionData);
    yield put(NotesActionCreators.updateNoteRequestSuccess(data));
  } catch (err) {
    yield put(NotesActionCreators.updatedNoteRequestFailed(err));
  }
}

export function* deleteNoteSaga(action) {
  try {
    const {
      payload: { noteId },
    } = action;
    const {
      data: { data },
    } = yield call(API.notes.deleteById, noteId);
    yield put(NotesActionCreators.deleteNoteRequestSuccess(data));
  } catch (err) {
    yield put(NotesActionCreators.deleteNoteRequestFailed(err));
  }
}
