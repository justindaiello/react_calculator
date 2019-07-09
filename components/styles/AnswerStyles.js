import styled, { keyframes } from 'styled-components';

const showRefresh = keyframes`
  from {
    opacity: 0
  }
  to {
    opacity: 1
  }
`;

const AnswerStyles = styled.div`
  overflow: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 30%;
  height: 300px;
  margin: 0 auto;
  border: 1px solid black;
  h5 {
    margin: 0 auto;
    animation: ${showRefresh} 1s linear;
  }
`;

export default AnswerStyles;
