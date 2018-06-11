import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button } from './common';
import { phoneNumberChanged, messageTextChanged, createNewChat } from '../actions';


class CreateNewChatForm extends Component {

  onButtonPress() {
    debugger;
    this.props.createNewChat(this.props.phone, this.props.textMsg);
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder="9999999999"
            label="Phone"
            keyboardType="phone-pad"
            value={this.props.phone}
            onChangeText={(value) => this.props.phoneNumberChanged(value)}

          />
          </CardSection>
          <CardSection>
          <Input
            placeholder="9999999999"
            label="Text"
            value={this.props.textMsg}
            onChangeText={(value) => this.props.messageTextChanged(value)}
          />
        </CardSection>
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}> Start </Button>
        </CardSection>

      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    phone: state.newChat.phoneNumber,
    textMsg: state.newChat.text,
  };
};

export default connect(mapStateToProps, {
  phoneNumberChanged,
  messageTextChanged,
  createNewChat
})(CreateNewChatForm);
