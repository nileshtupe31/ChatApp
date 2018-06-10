import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  USER_LOGGING_IN,
  LOGIN_USER_FAILURE }
 from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  error: null,
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };

    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };

    case USER_LOGGING_IN:
    return { ...state, error: '', password: '', loading: true };

    case LOGIN_USER_SUCCESS:
    return { ...state,
      ...INITIAL_STATE,
      user: action.payload,
      };

    case LOGIN_USER_FAILURE:
    return { ...state, error: action.payload, password: '', loading: false };

    default:
    return state;
  }
};
