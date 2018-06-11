import React from 'react';
import { Text } from 'react-native';
import { Card, CardSection } from './common';

export const ChatListItem = (props) => {
  debugger
    return (
      <Card>
        <CardSection>
          <Text> {props.chatItem.uid} </Text>
        </CardSection>
      </Card>
    );
};
