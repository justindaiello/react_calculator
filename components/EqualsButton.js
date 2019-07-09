import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import * as math from 'mathjs';

const CREATE_ANSWER_MUTATION = gql`
  mutation CREATE_ANSWER_MUTATION($answer: String) {
    createAnswer(answer: $answer) {
      id
      answer
    }
  }
`;



class EqualsButton extends Component {

  render() {
    return (
      <Mutation mutation={CREATE_ANSWER_MUTATION} >
        {(createAnswer, {loading, error}) => (
        <button 
        value={this.props.value} 
        onClick={async () => {
          this.props.handleChange();
          const res = await createAnswer({variables: {answer: this.props.input}});
          console.log(res);
        }}
        >
          {this.props.value}
        </button>
        )}
      </Mutation>
    )
  }
}

export default EqualsButton;
