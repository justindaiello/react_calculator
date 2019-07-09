import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

const CREATE_ANSWER_MUTATION = gql`
  mutation CREATE_ANSWER_MUTATION($answer: String!) {
    addAnswer(answer: $answer) {
      id
    }
  }
`;



class EqualsButton extends Component {
  render() {
    return (
      <Mutation mutation={CREATE_ANSWER_MUTATION} variables={this.props.answer}>
        {(addAnswer, {loading, error}) => (
        <button 
        value={this.props.value} 
        onClick={this.props.handleChange}
        >
          {this.props.value}
        </button>
        )}
      </Mutation>
    )
  }
}

export default EqualsButton;
