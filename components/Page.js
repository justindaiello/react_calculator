import React, { Component } from 'react';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import * as math from 'mathjs';
import Meta from './Meta';
import Header from './Header';
import SubHeader from './SubHeader';
import Display from './Display';
import Button from './Button';
import EqualsButton from './EqualsButton';
import StoredAnswers from './StoredAnswers';
import { CalculatorStyles, CalculatorRowStyles } from './styles/CalculatorStyles';



const theme = {
  offWhite: '#EDEDED',
  black: '#393939',
  boxShadow: '0 12px 24px 0 rgba(0,0,0,.09)'
}

const StyledPage = styled.div`
  color: ${props => props.theme.black};
`;

injectGlobal`
  html, 
  body {
    box-sizing: border-box;
    font-size: 10px;
    height: 100vh;
    background: linear-gradient(to bottom right, #19547b, #ffd89b);
  }
  body {
    padding: 0;
    margin: 0;
    font-family: 'Lato', sans-serif;
    font-size: 1.5rem;
  }
`;

class Page extends Component {

  state = {
    input: 0, 
  }

  handleInput = e => {
    if (this.state.input === 0) {
      this.setState({ input: e.target.value });
    } else {
      this.setState({ input: this.state.input + e.target.value });
    }
  }

  handleOutput = () => {
    if (this.state.input === '=') {
      alert('wrong');
      this.setState({ input: 0 });
      return
    }
    this.setState({ input: math.format(math.evaluate(this.state.input), {precision: 2}) });
  }

  handleClear = () => {
    this.setState({ input: 0, hasError: false });
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Meta />
          <Header />
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
              <EqualsButton value={"="} handleChange={this.handleOutput} input={this.state.input}/>
              <Button value={'/'} handleChange={this.handleInput} />
            </CalculatorRowStyles>

            <CalculatorRowStyles>
              <Button value={"CLEAR"} handleChange={this.handleClear} />
            </CalculatorRowStyles>
          </CalculatorStyles>
            <SubHeader>10 Most recent Calculations</SubHeader>
            <StoredAnswers answers={this.state.answers}/>
        </StyledPage>
      </ThemeProvider>
    )
  }
}

export default Page;