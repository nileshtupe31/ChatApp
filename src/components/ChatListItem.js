import _ from 'lodash';
import React from 'react';
import { Text } from 'react-native';
import { Card, CardSection } from './common';

export const ChatListItem = (props) => {
  const chat = _.map(props.chatItem.chat, (val, uid) => {
    return { ...val, uid };
  });

  return (
    <Card>
      <CardSection style={{ flexDirection: 'column' }}>
        <Text> {props.chatItem.uid} </Text>
        <Text> {chat[0].textMsg} </Text>
      </CardSection>

    </Card>
  );
};
