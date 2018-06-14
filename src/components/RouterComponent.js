import React from 'react';
import { Router, Scence, Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import LoginForm from './LoginForm';
import ChatListForm from './ChatListForm';
import CreateNewChatForm from './CreateNewChatForm';
import ChatBoxForm from './ChatBoxForm';

class RouterComponent extends React.Component {
    render() {
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
                key="chatBox"
                component={ChatBoxForm}
                title={this.props.title}
                rightTitle="Chat"
                onRight={() => { Actions.newChat({ defaultNumber: this.props.title }); }}
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
    }
}

const mapStateToProps = (state) => {
  return ({
    title: state.chatBox.number
  });
};

export default connect(mapStateToProps, {})(RouterComponent);
