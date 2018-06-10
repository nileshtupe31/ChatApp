import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import {
   EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS,
   LOGIN_USER_FAILURE, USER_LOGGING_IN
 } from './types';

export const emailChanged = (text) => {
  return {
      type: EMAIL_CHANGED,
      payload: text
  };
};

export const passwordChanged = (text) => {
  return {
      type: PASSWORD_CHANGED,
      payload: text
  };
};

export const loginUser = (email, password) => {
  return (dispatch) => {
    dispatch({
      type: USER_LOGGING_IN
    });

    const emailAddress = `${email}@chatapp.com`;
    firebase.auth().signInWithEmailAndPassword(emailAddress, password)
    .then(user => {
       onLoginSuccess(user, dispatch);
    })
    .catch(() => {
      firebase.auth().createUserWithEmailAndPassword(emailAddress, password)
      .then(user => {
        onCreateNewUser(user);
        onLoginSuccess(user, dispatch);
      })
      .catch((error) => onLoginFailure(dispatch, error));
    });
  };
};

const onCreateNewUser = (user) => {
  const phone = user.user.email.replace('@chatapp.com', '');
  firebase.database().ref(`/chatApp/users/${phone}/chats`)
  .push({ phone });
};

const onLoginFailure = (dispatch, error) => {
  dispatch({
    type: LOGIN_USER_FAILURE,
    payload: error
  });
};

const onLoginSuccess = (user, dispatch) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });

  Actions.main();
};
