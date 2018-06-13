import _ from 'lodash';
import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection } from './common';
import { selectChat } from '../actions';

class ChatListItem extends Component {

  render() {
    const chat = _.map(this.props.chatItem.chat, (val, uid) => {
      return { ...val, uid };
    });

    return (
      <TouchableWithoutFeedback
        onPress={() => {
          console.log('In touchable feedback');
          this.props.selectChat(this.props.chatItem.uid);
        }}
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
