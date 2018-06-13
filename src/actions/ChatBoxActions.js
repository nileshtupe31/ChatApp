import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { SELECT_CHAT } from './types';


export const selectChat = (number) => {
  return (dispatch) => {
    const { currentUser } = firebase.auth();
    const phone = currentUser.email.replace('@chatapp.com', '');

    const path = `/chatApp/users/${phone}/chats/${number}`;

    dispatch({
      type: SELECT_CHAT,
      payload: { path, number }
    });

    Actions.chatBox();
  };
};
