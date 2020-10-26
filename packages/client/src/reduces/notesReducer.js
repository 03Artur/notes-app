/* eslint-disable no-param-reassign */
import produce from 'immer';
import ACTION_TYPE from '../actions/type';
import createReducer from './helpers/createReducer';

const initialState = {
  notes: [],
  currentIndex: -1,
  error: null,
  isFetching: false,
};

const handlers = {
  [ACTION_TYPE.CREATE_NOTE_REQUEST]: produce((draftState, action) => {}),
  [ACTION_TYPE.CREATE_NOTE_REQUEST_SUCCESS]: produce((draftState, action) => {
    const {
      payload: { data },
    } = action;

    draftState.notes.unshift(data);
    draftState.currentIndex = 0;
  }),
  [ACTION_TYPE.CREATE_NOTE_REQUEST_FAILED]: produce((draftState, action) => {}),
  [ACTION_TYPE.GET_NOTES_REQUEST]: produce((draftState, action) => {
    draftState.isFetching = true;
  }),
  [ACTION_TYPE.GET_NOTES_REQUEST_SUCCESS]: produce((draftState, action) => {
    const {
      payload: { data },
    } = action;
    draftState.isFetching = false;
    draftState.notes.push(...data);
  }),
  [ACTION_TYPE.GET_NOTES_REQUEST_FAILED]: produce((draftState, action) => {}),
  [ACTION_TYPE.UPDATE_NOTE_REQUEST]: produce((draftState, action) => {}),
  [ACTION_TYPE.UPDATE_NOTE_REQUEST_SUCCESS]: produce((draftState, action) => {
    const {
      payload: { data },
    } = action;
    const index = draftState.notes.findIndex((n) => n.id === data.id);
    draftState.notes[index] = data;
  }),
  [ACTION_TYPE.UPDATE_NOTE_REQUEST_FAILED]: produce((draftState, action) => {}),
  [ACTION_TYPE.DELETE_NOTE_REQUEST]: produce((draftState, action) => {}),
  [ACTION_TYPE.DELETE_NOTE_REQUEST_SUCCESS]: produce((draftState, action) => {
    const {
      payload: { data },
    } = action;
    const index = draftState.notes.findIndex((n) => n.id == data.id);
    draftState.notes.splice(index, 1);
  }),
  [ACTION_TYPE.DELETE_NOTE_REQUEST_FAILED]: produce((draftState, action) => {}),
  [ACTION_TYPE.SELECT_NOTE]: produce((draftState, action) => {
    const {
      payload: { index },
    } = action;
    draftState.currentIndex = index;
  }),
};

const notesReducer = createReducer(initialState, handlers);

export default notesReducer;
