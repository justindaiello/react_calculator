import React, { Component } from 'react';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import * as math from 'mathjs';
import Meta from './Meta';
import Display from './Display';
import Button from './Button';


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
    input: 0
  }

  handleInput = e => {
    if (this.state.input === 0) {
      this.setState({ input: e.target.value });
    } else {
      this.setState({ input: this.state.input + e.target.value });
    }
  }

  handleOutput = () => {
    this.setState({ input: math.evaluate(this.state.input) });
  }

  handleClear = () => {
    this.setState({ input: 0 });
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Meta />
          <CalculatorStyles>
            <Display input={this.state.input}/>
            <CalculatorRowStyles>
              <Button value={7} handleChange={this.handleInput} />
              <Button value={8} handleChange={this.handleInput} />
              <Button value={9} handleChange={this.handleInput} />
              <Button value={"*"} handleChange={this.handleInput} />            
              </CalculatorRowStyles>

            <CalculatorRowStyles>
              <Button value={4} handleChange={this.handleInput} />
              <Button value={5} handleChange={this.handleInput} />
              <Button value={6} handleChange={this.handleInput} />
              <Button value={"-"} handleChange={this.handleInput} />
            </CalculatorRowStyles>

            <CalculatorRowStyles>
              <Button value={1} handleChange={this.handleInput} />
              <Button value={2} handleChange={this.handleInput} />
              <Button value={3} handleChange={this.handleInput} />
              <Button value={"+"} handleChange={this.handleInput} />
            </CalculatorRowStyles>

            <CalculatorRowStyles>
              <Button value={0} handleChange={this.handleInput} />
              <Button value={"."} handleChange={this.handleInput} />
              <Button value={"="} handleChange={this.handleOutput} />
              <Button value={7} handleChange={this.handleInput} />
            </CalculatorRowStyles>
            <CalculatorRowStyles>
              <Button value={"CLEAR"} handleChange={this.handleClear} />
            </CalculatorRowStyles>
          </CalculatorStyles>
        </StyledPage>
      </ThemeProvider>
    )
  }
}

export default Page;