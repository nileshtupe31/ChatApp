import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, View, Text } from 'react-native';
import { fetchChatForPath } from '../actions';
import ChatMessageItem from './ChatMessageItem';
import { Spinner } from './common';

class ChatBoxForm extends Component {

  componentWillMount() {
    this.props.fetchChatForPath(this.props.path);
  }

  renderRow(chatMessage) {
    return (
      <ChatMessageItem chatItem={chatMessage} />
    );
  }

  render() {
    if (this.props.chatList.length > 0) {
      const ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      });
      this.dataSource = ds.cloneWithRows(this.props.chatList);
      return (
        <ListView
          dataSource={this.dataSource}
          renderRow={this.renderRow}
        />
      );
    }
    if (this.props.isLoading === true) {
      return (
        <Spinner />
      );
    }
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text> Its lonely here</Text>
          <Text> Tap on New chat and talk to someone !!!</Text>
      </View>
    );
  }
}

export const mapStateToProps = (state) => {
  const chatList = _.map(state.chatBox.chat, (val, uid) => {
      return { ...val, uid };
  });

  if (chatList.length > 0) {
    console.log(chatList);
  }

  return {
    chatList,
    isLoading: state.chatList.isLoading,
    path: state.chatBox.path
  };
};

export default connect(mapStateToProps, {
  fetchChatForPath
})(ChatBoxForm);
