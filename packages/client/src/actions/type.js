const ACTION_TYPE = {
  // authentication action type
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  SIGN_UP_REQUEST: 'SIGN_UP_REQUEST',
  REFRESH_AUTH_REQUEST: 'REFRESH_AUTH_REQUEST',
  AUTH_REQUEST_SUCCESS: 'USER_AUTH_REQUEST_SUCCESS',
  AUTH_REQUEST_FAILED: 'USER_AUTH_REQUEST_FAILED',

  // notes action types
  CREATE_NOTE_REQUEST: 'CREATE_NOTE_REQUEST',
  CREATE_NOTE_REQUEST_SUCCESS: 'CREATE_NOTE_REQUEST_SUCCESS',
  CREATE_NOTE_REQUEST_FAIL: 'CREATE_NOTE_REQUEST_FAIL',

  GET_NOTES_REQUEST: 'GET_NOTES_REQUEST',
  GET_NOTES_REQUEST_SUCCESS: 'GET_NOTES_REQUEST_SUCCESS',
  GET_NOTES_REQUEST_FAIL: 'GET_NOTES_REQUEST_FAIL',

  UPDATE_NOTE_REQUEST: 'UPDATE_NOTE_REQUEST',
  UPDATE_NOTE_REQUEST_SUCCESS: 'UPDATE_NOTE_REQUEST_SUCCESS',
  UPDATE_NOTE_REQUEST_FAIL: 'UPDATE_NOTE_REQUEST_FAIL',

  DELETE_NOTE_REQUEST: 'DELETE_NOTE_REQUEST',
  DELETE_NOTE_REQUEST_SUCCESS: 'DELETE_NOTE_REQUEST_SUCCESS',
  DELETE_NOTE_REQUEST_FAIL: 'DELETE_NOTE_REQUEST_FAIL',
};

export default ACTION_TYPE;