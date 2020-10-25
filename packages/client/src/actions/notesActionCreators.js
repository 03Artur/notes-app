import ACTION_TYPE from './type';

// create note
export const createNoteRequest = (data) => ({
  type: ACTION_TYPE.CREATE_NOTE_REQUEST,
  payload: {
    data,
  },
});

export const createNoteRequestSuccess = (data) => ({
  type: ACTION_TYPE.CREATE_NOTE_REQUEST_SUCCESS,
  payload: {
    data,
  },
});

export const createNoteRequestFailed = (err) => ({
  type: ACTION_TYPE.CREATE_NOTE_REQUEST_FAILED,
  payload: {
    error: err,
  },
});

// get notes
export const getNotesRequest = (query = {}) => ({
  type: ACTION_TYPE.GET_NOTES_REQUEST,
  payload: {
    query,
  },
});

export const getNotesRequestSuccess = (data) => ({
  type: ACTION_TYPE.GET_NOTES_REQUEST_SUCCESS,
  payload: {
    data,
  },
});

export const getNotesRequestFailed = (err) => ({
  type: ACTION_TYPE.GET_NOTES_REQUEST_FAILED,
  payload: {
    error: err,
  },
});

// update note

export const updateNoteRequest = (noteId, data) => ({
  type: ACTION_TYPE.UPDATE_NOTE_REQUEST,
  payload: {
    noteId,
    data,
  },
});

export const updateNoteRequestSuccess = (data) => ({
  type: ACTION_TYPE.UPDATE_NOTE_REQUEST_SUCCESS,
  payload: {
    data,
  },
});

export const updatedNoteRequestFailed = (err) => ({
  type: ACTION_TYPE.UPDATE_NOTE_REQUEST_FAILED,
  payload: {
    error: err,
  },
});

// delete note

export const deleteNoteRequest = (noteId) => ({
  type: ACTION_TYPE.DELETE_NOTE_REQUEST,
  payload: {
    noteId,
  },
});

export const deleteNoteRequestSuccess = (data) => ({
  type: ACTION_TYPE.DELETE_NOTE_REQUEST_SUCCESS,
  payload: {
    data,
  },
});

export const deleteNoteRequestFailed = (err) => ({
  type: ACTION_TYPE.DELETE_NOTE_REQUEST_FAILED,
  payload: {
    error: err,
  },
});

// select

export const selectNote = (index) => ({
  type: ACTION_TYPE.SELECT_NOTE,
  payload: {
    index,
  },
});
