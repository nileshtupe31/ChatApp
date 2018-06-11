import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import { PHONE_NUMBER, START_TEXT, CHAT_FETCH, ON_CREATE_SUCCESS } from './types';

export const phoneNumberChanged = (number) => {
  return {
    type: PHONE_NUMBER,
    payload: number
  };
};

export const messageTextChanged = (textMsg) => {
  return {
    type: START_TEXT,
    payload: textMsg
  };
};

export const createNewChat = (number, textMsg) => {
  console.log(number, textMsg);

  return (dispatch) => {
    const { currentUser } = firebase.auth();
    const phone = currentUser.email.replace('@chatapp.com', '');
    firebase.database().ref(`/chatApp/users/${phone}/chats/${number}/chat`)
    .push({ phone, textMsg })
    .then(() => {
      firebase.database().ref(`/chatApp/users/${number}/chats/${phone}/chat`)
      .push({ phone, textMsg })
      .then(() => {
        Actions.pop();
        dispatch({
          type: ON_CREATE_SUCCESS
        });
      });
    });
  };
};
