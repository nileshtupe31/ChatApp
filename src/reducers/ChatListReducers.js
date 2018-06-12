import { ON_FETCH_ERROR, FETCH_CHAT_LIST, FETCHING_CHAT_LIST } from '../actions/types';

const INITIAL_STATE = {
  chat: {},
  isLoading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_CHAT_LIST:
      return { chat: action.payload, isLoading: false };

    case FETCHING_CHAT_LIST:
      return { ...state, isLoading: true };

    case ON_FETCH_ERROR:
      return { ...state, chat: {}, isLoading: false };
    default:
      return state;
  }
};
