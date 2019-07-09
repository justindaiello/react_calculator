import React from 'react';
import styled from 'styled-components';

const DisplayStyles = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 65px;
  min-width: 300px;
  width: 30%;
  border: 1px solid white;
  background: ${props => props.theme.black};
  h1 {
    font-size: 1.8em;
    font-weight: 400;
    padding-right: .5em;
    color: white;
  }
`;

const Display = props => (
  <DisplayStyles>
    <h1>{props.input}</h1>
  </DisplayStyles>
)

export default Display;