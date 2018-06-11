import { FETCH_CHAT_LIST } from '../actions/types';

const INITIAL_STATE = {
  chat: {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_CHAT_LIST:
      return { chat: action.payload };
    default:
      return INITIAL_STATE;
  }
};
