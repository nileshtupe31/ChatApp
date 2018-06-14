import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  SELECT_CHAT, FETCHING_CHAT, FETCH_CHAT, ON_FETCH_CHAT_ERROR
 } from './types';


export const selectChat = (number) => {
  return (dispatch) => {
    const { currentUser } = firebase.auth();
    const phone = currentUser.email.replace('@chatapp.com', '');

    const path = `/chatApp/users/${phone}/chats/${number}/chat`;

    dispatch({
      type: SELECT_CHAT,
      payload: { path, number }
    });

    Actions.chatBox();
  };
};

export const fetchChatForPath = (path) => {
  return (dispatch) => {
    dispatch({
      type: FETCHING_CHAT
    });
    firebase.database().ref(path)
    .on('value', snapshot => {
      const payload = snapshot.val();
      if (payload !== null) {
        dispatch({
            type: FETCH_CHAT,
            payload
          });
      } else {
        dispatch({
          type: ON_FETCH_CHAT_ERROR
        });
      }
    }, error => {
      console.error(error);
      dispatch({
        type: ON_FETCH_CHAT_ERROR
      });
    });
  };
};
