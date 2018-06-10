import React from 'react';
import { Router, Scence, Actions } from 'react-native-router-flux';
import LoginForm from './LoginForm';
import ChatListForm from './ChatListForm';
import CreateNewChatForm from './CreateNewChatForm';

const RouterComponent = () => {
    return (
      <Router>
        <Scence key="root" hideNavBar >
          <Scence key="login" initial>
            <Scence key="login" component={LoginForm} title="Log In" />
          </Scence>
          <Scence key="main">
            <Scence
              key="chatList"
              component={ChatListForm}
              title="Chats"
              rightTitle="New Chat"
              onRight={() => { Actions.newChat(); }}
            />
            <Scence
              key="newChat"
              title="New Chat"
              component={CreateNewChatForm}
            />
          </Scence>
        </Scence>
      </Router>
    );
};

export default RouterComponent;
