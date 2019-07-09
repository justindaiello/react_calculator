import styled from 'styled-components';

const CalculatorStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 350px;
  margin: 0 auto;
`;

const CalculatorRowStyles = styled.div`
  max-width: 1000px;
  height: 60px;
  width: 30%;
  min-width: 300px;
  background: ${props => props.theme.black};
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  box-shadow: ${props => props.theme.boxShadow};
`;

export { CalculatorStyles, CalculatorRowStyles };