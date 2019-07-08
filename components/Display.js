import React from 'react';
import styled from 'styled-components';

const DisplayStyles = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 50%;
  border: 1px solid black;
  padding-right: 1em;
`;

const Display = props => (
  <DisplayStyles>{props.input}</DisplayStyles>
)

export default Display;