import React from 'react';
import ButtonStyles from './styles/ButtonStyles';

const Button = props => (
  <ButtonStyles 
    value={props.value} 
    onClick={props.handleChange}
  >
    {props.value}
  </ButtonStyles>
)

export default Button;