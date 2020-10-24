import produce from 'immer';
import createReducer from './helpers/createReducer';
import ACTION_TYPE from '../actions/type';

const initialState = {
  user: null,
  error: null,
  isFetching: false,
};

const handlers = {
  [ACTION_TYPE.LOGIN_REQUEST]: produce((draftState, action) => {
    draftState.isFetching = true;
  }),
  [ACTION_TYPE.SIGN_UP_REQUEST]: produce((draftState, action) => {
    draftState.isFetching = true;
  }),
  [ACTION_TYPE.AUTH_REQUEST_SUCCESS]: produce((draftState, action) => {
    const {
      payload: { data },
    } = action;
    draftState.isFetching = false;
    draftState.user = data.user;
  }),
  [ACTION_TYPE.AUTH_REQUEST_FAILED]: produce((draftState, action) => {
    const {
      payload: { error },
    } = action;
    draftState.isFetching = false;
    draftState.error = error;
  }),
};

const authReducer = createReducer(initialState, handlers);

export default authReducer;
