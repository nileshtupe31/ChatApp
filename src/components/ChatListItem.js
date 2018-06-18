import _ from 'lodash';
import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection } from './common';
import { selectChat } from '../actions';

class ChatListItem extends Component {

  onCellTap() {
    debugger;
    this.props.selectChat(this.props.chatItem.uid);
  }

  render() {
    const chat = _.map(this.props.chatItem.chat, (val, uid) => {
      return { ...val, uid };
    });

    if (chat.length <= 0) {
      return (
          <View />
      );
    }

    return (
      <TouchableWithoutFeedback
        onPress={this.onCellTap.bind(this)}
      >
        <View>
          <Card>
            <CardSection style={{ flexDirection: 'column' }}>
              <Text> {this.props.chatItem.uid} </Text>
              <Text> {chat[0].textMsg} </Text>
            </CardSection>
          </Card>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default connect(null, { selectChat })(ChatListItem);
