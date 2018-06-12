import _ from 'lodash';
import React from 'react';
import { Text, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection } from './common';
import { selectChat } from '../actions';

const ChatListItem = (props) => {
  const chat = _.map(props.chatItem.chat, (val, uid) => {
    return { ...val, uid };
  });

  return (
    <TouchableWithoutFeedback onPress={() => this.props.selectChat(props.chatItem.uid)} >
      <Card>
        <CardSection style={{ flexDirection: 'column' }}>
          <Text> {props.chatItem.uid} </Text>
          <Text> {chat[0].textMsg} </Text>
        </CardSection>
      </Card>
    </TouchableWithoutFeedback>
  );
};

export default connect(null, { selectChat })(ChatListItem);
