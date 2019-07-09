import styled from 'styled-components';

const ButtonStyles = styled.button`
  background: ${props => props.theme.black};
  font-size: 1em;
  color: white;
  cursor: pointer;
  &:hover {
    color: #FFD89B;
    transition: all .8s;
  }
`;

export default ButtonStyles;