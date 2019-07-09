import React from 'react';
import DisplayStyles from './styles/DisplayStyles';

const Display = props => (
  <DisplayStyles>
    <h1>{props.input}</h1>
  </DisplayStyles>
)

export default Display;