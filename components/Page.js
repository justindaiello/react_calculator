import React, { Component } from 'react';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import Meta from './Meta';

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

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Meta />
          <p>Hi, page is hooked up.</p>
        </StyledPage>
      </ThemeProvider>
    )
  }
}

export default Page;