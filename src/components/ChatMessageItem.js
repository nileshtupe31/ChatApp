import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card, CardSection } from './common';

class ChatMessageItem extends Component {

  render() {
    return (
      <View>
        <Card>
          <CardSection style={{ flexDirection: 'column' }}>
            <Text> {this.props.chatItem.phone} </Text>
            <Text> {this.props.chatItem.textMsg} </Text>
          </CardSection>
        </Card>
      </View>
    );
  }
}

export default ChatMessageItem;
