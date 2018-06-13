import { SELECT_CHAT } from '../actions/types';

const INITIAL_STATE = {
  path: '',
  number: ''
};


export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SELECT_CHAT:
      return { ...state, path: action.payload.path, number: action.payload.number };

    default:
      return state;
  }
};
