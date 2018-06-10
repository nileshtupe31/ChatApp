import { START_TEXT, PHONE_NUMBER, ON_CREATE_SUCCESS, CHAT_FETCH } from '../actions/types';

const INITIAL_STATE = {
  phoneNumber: '',
  text: '',
  chat: {}
};

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case START_TEXT:
      return { ...state, text: action.payload };

    case PHONE_NUMBER:
      return { ...state, phoneNumber: action.payload };

      case ON_CREATE_SUCCESS:
        return INITIAL_STATE;

        case CHAT_FETCH:
          return { ...state, chat: action.payload };

    default:
    return state;
  }
};
