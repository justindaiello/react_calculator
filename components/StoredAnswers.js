import React, { Component } from 'react'
import AnswerStyles from './styles/AnswerStyles';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const ALL_ANSWERS_QUERY = gql`
  query ALL_ANSWERS_QUERY($skip: Int = 0, $first: Int = 10){
    answers(orderBy: createdAt_DESC, first: $first, skip: $skip) {
      id
      answer
    }
  }
`;

class StoredAnswers extends Component {
  render() {
    return (
    <Query query={ALL_ANSWERS_QUERY} pollInterval={0} >
    {({ data, error, loading}) => {
      {/* if (loading) return <p>Loading..</p>; */}
      if (error) return <p>Error: {error.message}</p>
      return <AnswerStyles>
      {data.answers.map(answer => <h5 key={answer.id}>{answer.answer}</h5>)}
    </AnswerStyles>
    }}
    </Query>
    )
  }
}

export default StoredAnswers;
