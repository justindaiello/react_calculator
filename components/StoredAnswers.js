import React from 'react'
import styled from 'styled-components';

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

const StoredAnswers = props => (
  <AnswerStyles>
  {props.answers.map(answer => <p>{answer}</p>)}
  </AnswerStyles>
    )

export default StoredAnswers;
