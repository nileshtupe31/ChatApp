import firebase from 'firebase';
import _ from 'lodash';
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

export const fetchChat = () => {
    return (dispatch) => {
      const { currentUser } = firebase.auth();
      debugger;
      const phone = currentUser.email.replace('@chatapp.com', '');
      firebase.database().ref(`/chatApp/users/${phone}/chats`)
      .on('value', snapshot => {
        dispatch({
          type: CHAT_FETCH,
          payload: snapshot.val()
        });
    });
  };
};

export const createNewChat = (number, textMsg, uid) => {
  console.log(number, textMsg);

  return (dispatch) => {
    const { currentUser } = firebase.auth();
    debugger;
    const phone = currentUser.email.replace('@chatapp.com', '');
    firebase.database().ref(`/chatApp/users/${phone}/chats/${number}/chat`)
    .push({ phone, textMsg })
    .then(() => {
      debugger;
      firebase.database().ref(`/chatApp/users/${number}/chats/${phone}/chat`)
      .push({ phone, textMsg })
      .then(() => {
        dispatch({
          type: ON_CREATE_SUCCESS
        });
      });
    });
  };
};
