import React, { Component } from 'react'
import styled from 'styled-components';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const ALL_ANSWERS_QUERY = gql`
  query ALL_ANSWERS_QUERY{
    answers(orderBy: createdAt_DESC) {
      id
      answer
    }
  }
`;

const AnswerStyles = styled.div`
  position: absolute;
  top: 50%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 80%;
  margin: 0 auto;
  border: 1px solid black;
`;

class StoredAnswers extends Component {
  render() {
    return (
    <Query query={ALL_ANSWERS_QUERY}>
    {({ data, error, loading}) => {
      if (loading) return <p>Loading..</p>;
      if (error) return <p>Error: {error.message}</p>
      return <AnswerStyles>
      {data.answers.map(answer => <p>{answer.answer}</p>)}
    </AnswerStyles>
    }}
    </Query>
    )
  }
}

export default StoredAnswers;
