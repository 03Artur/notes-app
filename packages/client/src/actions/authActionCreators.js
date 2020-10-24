import ACTION_TYPE from './type';

export const loginRequest = (data) => {
  return {
    type: ACTION_TYPE.LOGIN_REQUEST,
    payload: {
      data,
    },
  };
};

export const signUpRequest = (data) => ({
  type: ACTION_TYPE.SIGN_UP_REQUEST,
  payload: {
    data,
  },
});

export const refreshAuth = (data) => ({
  type: ACTION_TYPE.REFRESH_AUTH_REQUEST,
  payload: {
    data,
  },
});

export const authRequestSuccess = (data) => ({
  type: ACTION_TYPE.AUTH_REQUEST_SUCCESS,
  payload: {
    data,
  },
});

export const authRequestFail = (err) => ({
  type: ACTION_TYPE.AUTH_REQUEST_FAILED,
  payload: {
    error: err,
  },
});
