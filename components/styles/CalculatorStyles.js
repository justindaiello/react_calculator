import styled from 'styled-components';

const CalculatorStyles = styled.div`
  padding-top: 2em;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 80%;
  margin: 0 auto;
  border: 1px solid black;
`;

const CalculatorRowStyles = styled.div`
  max-width: 1000px;
  height: 40px;
  width: 50%;
  background: red;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

export { CalculatorStyles, CalculatorRowStyles };