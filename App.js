import React, { Component } from 'react';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import RouterComponent from './src/components/RouterComponent';

export default class App extends Component {

  componentWillMount() {
    console.disableYellowBox = true;

    const config = {
      apiKey: 'AIzaSyAaykZpjXtQGYSQt7SB9ZBszJkfLUD4Ynk',
      authDomain: 'expense-tracker-51732.firebaseapp.com',
      databaseURL: 'https://expense-tracker-51732.firebaseio.com',
      projectId: 'expense-tracker-51732',
      storageBucket: 'expense-tracker-51732.appspot.com',
      messagingSenderId: '796602455940'
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <RouterComponent />
      </Provider>
    );
  }
}
