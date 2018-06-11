import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import { fetchChatList } from '../actions';
import { ChatListItem } from './ChatListItem';
import { Spinner } from './common';

class ChatListForm extends Component {

  componentWillMount() {
    this.props.fetchChatList();
  }

  renderRow(chatItem) {
    debugger;
    return (
      <ChatListItem chatItem={chatItem} />
    );
  }

  render() {
    debugger;
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
    return (
      <Spinner />
    );
  }
}

export const mapStateToProps = (state) => {
  const chatList = _.map(state.chatList.chat, (val, uid) => {
      return { ...val, uid };
  });

  return {
    chatList
  };
};

export default connect(mapStateToProps, {
  fetchChatList
})(ChatListForm);
