import React from 'react';

const Button = props => (
  <button 
    value={props.value} 
    onClick={props.handleChange}
  >
    {props.value}
  </button>
)

export default Button;