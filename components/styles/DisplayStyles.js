import styled from 'styled-components'

const DisplayStyles = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 65px;
  min-width: 300px;
  width: 30%;
  background: ${props => props.theme.black};
  h1 {
    font-size: 2em;
    font-weight: 400;
    padding-right: .5em;
    color: white;
  }
`;

export default DisplayStyles;