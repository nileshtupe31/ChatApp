import {
  SELECT_CHAT,
  FETCH_CHAT,
  ON_FETCH_CHAT_ERROR,
  FETCHING_CHAT
} from '../actions/types';

const INITIAL_STATE = {
  path: '',
  number: '',
  isLoading: false,
  chat: {}
};


export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SELECT_CHAT:
      return { ...state, path: action.payload.path, number: action.payload.number };
    case FETCH_CHAT:
      return { ...state, chat: action.payload };
    case FETCHING_CHAT:
      return { ...state, isLoading: true };
    case ON_FETCH_CHAT_ERROR:
      return { ...state, chat: {}, isLoading: false };
    default:
      return state;
  }
};
