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
  padding-top: 1em;
  width: 30%;
  min-width: 300px;
  height: 300px;
  margin: 0 auto;
  border: 1px solid white;
  background: ${props => props.theme.black};
  h5 {
    margin: 0 auto;
    animation: ${showRefresh} 1s linear;
    color: white;
    font-size: 1.5em;
    font-weight: 400;
  }
`;

export default AnswerStyles;
