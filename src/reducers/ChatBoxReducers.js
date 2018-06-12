import { SELECT_CHAT } from '../actions/types';

const INITIAL_STATE = {
  path: ''
};


export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SELECT_CHAT:
      return { ...state, path: action.payload };

    default:
      return state;
  }
};
