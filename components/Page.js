import React, { Component } from 'react';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import Meta from './Meta';

class Page extends Component {
  render() {
    return (
      <>
      <Meta />
      <p>Hi, page is hooked up.</p>
      </>
    )
  }
}

export default Page;