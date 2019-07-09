import React from 'react';
import styled from 'styled-components';

const DisplayStyles = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 65px;
  min-width: 300px;
  width: 30%;
  border: 1px solid black;
  h1 {
    padding-right: .5em;
  }
`;

const Display = props => (
  <DisplayStyles>
    <h1>{props.input}</h1>
  </DisplayStyles>
)

export default Display;