import React, { Component } from 'react';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import Meta from './Meta';
import Display from './Display';

const theme = {
  offWhite: '#EDEDED',
  black: '#393939',
  boxShadow: '0 12px 24px 0 rgba(0,0,0,.09)'
}

const StyledPage = styled.div`
  background: ${props => props.theme.offWhite};
  color: ${props => props.theme.black};
`;

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,400&display=swap');
  html, 
  body {
    height: 100vh;
  }

  html {
    box-sizing: border-box;
    /* make font base 10 */
    font-size: 10px;
    scroll-behavior: smooth;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: 'Source Sans Pro', sans-serif;
  }
`;

const CalculatorStyles = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 80%;
  margin: 0 auto;
  border: 1px solid black;
`;

const CalculatorRowStyles = styled.div`
  width: 100%;
  background: red;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

class Page extends Component {

  state = {
    display: 0
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Meta />
          <CalculatorStyles>
            <Display display={this.state.display}/>
            <CalculatorRowStyles>
              <button>7</button>
              <button>8</button>
              <button>9</button>
              <button>*</button>
            </CalculatorRowStyles>

            <CalculatorRowStyles>
              <button>4</button>
              <button>5</button>
              <button>6</button>
              <button>-</button>
            </CalculatorRowStyles>

            <CalculatorRowStyles>
              <button>1</button>
              <button>2</button>
              <button>3</button>
              <button>+</button>
            </CalculatorRowStyles>

            <CalculatorRowStyles>
              <button>0</button>
              <button>.</button>
              <button>=</button>
              <button>/</button>
            </CalculatorRowStyles>
          </CalculatorStyles>
        </StyledPage>
      </ThemeProvider>
    )
  }
}

export default Page;