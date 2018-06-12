import firebase from 'firebase';
import { FETCH_CHAT_LIST, FETCHING_CHAT_LIST, ON_FETCH_ERROR } from './types';

export const fetchChatList = () => {
  return (dispatch) => {
    dispatch({
      type: FETCHING_CHAT_LIST
    });

    const { currentUser } = firebase.auth();
    const phone = currentUser.email.replace('@chatapp.com', '');
    firebase.database().ref(`/chatApp/users/${phone}/chats`)
    .on('value', snapshot => {
      const payload = snapshot.val();
      if (payload !== null) {
        dispatch({
            type: FETCH_CHAT_LIST,
            payload
          });
      } else {
        dispatch({
          type: ON_FETCH_ERROR
        });
      }
    }, error => {
      console.error(error);
      dispatch({
        type: ON_FETCH_ERROR
      });
    });
  };
};
