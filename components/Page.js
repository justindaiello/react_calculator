import React, { Component } from 'react';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import * as math from 'mathjs';
import Meta from './Meta';
import Display from './Display';
import Button from './Button';
import StoredAnswers from './StoredAnswers';
import { CalculatorStyles, CalculatorRowStyles } from './styles/CalculatorStyles';



const theme = {
  offWhite: '#EDEDED',
  black: '#393939',
  boxShadow: '0 12px 24px 0 rgba(0,0,0,.09)'
}

const StyledPage = styled.div`
  background: white;
  color: ${props => props.theme.black};
`;

injectGlobal`
  html, 
  body {
    height: 100vh;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
  }
`;

class Page extends Component {

  state = {
    input: 0, 
    answers: ['1+1=2', '2+2=4']
  }

  handleInput = e => {
    if (this.state.input === 0) {
      this.setState({ input: e.target.value });
    } else {
      this.setState({ input: this.state.input + e.target.value });
    }
    
  }

  handleOutput = () => {
    let currentInput = this.state.input;
    let answer = math.evaluate(this.state.input);
    this.setState({ input: math.evaluate(this.state.input) });
    this.setState({ answers: [...this.state.answers, `${currentInput} = ${answer}`] });  
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
              <Button value={'/'} handleChange={this.handleInput} />
            </CalculatorRowStyles>
            <CalculatorRowStyles>
              <Button value={"CLEAR"} handleChange={this.handleClear} />
            </CalculatorRowStyles>
          </CalculatorStyles>
          <StoredAnswers answers={this.state.answers}/>
        </StyledPage>
      </ThemeProvider>
    )
  }
}

export default Page;