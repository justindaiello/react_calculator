import styled from 'styled-components';

const ButtonStyles = styled.button`
  background: ${props => props.theme.black};
  font-size: .85em;
  color: white;
  &:hover {
    cursor: pointer;
    border: 2px solid #FFD89B;
    color: #FFD89B;
    transition: all .8s;
  }
`;

export default ButtonStyles;