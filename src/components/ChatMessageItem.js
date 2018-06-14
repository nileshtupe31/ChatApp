import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { Card, CardSection } from './common';

class ChatMessageItem extends Component {

  render() {
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
              <Text> {this.props.chatItem.phone} </Text>
              <Text> {this.props.chatItem.textMsg} </Text>
            </CardSection>
          </Card>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default ChatMessageItem;
