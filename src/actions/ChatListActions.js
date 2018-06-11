import firebase from 'firebase';
import { FETCH_CHAT_LIST } from './types';

export const fetchChatList = () => {
    return (dispatch) => {
      const { currentUser } = firebase.auth();
      const phone = currentUser.email.replace('@chatapp.com', '');
      firebase.database().ref(`/chatApp/users/${phone}/chats`)
      .on('value', snapshot => {
        debugger;
        dispatch({
          type: FETCH_CHAT_LIST,
          payload: snapshot.val()
        });
    });
  };
};
