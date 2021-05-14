import React, { ReactElement } from 'react';
import { Reset } from 'styled-reset';
import GlobalStyle from './GlobalStyle';
import Clocks from './pages/Clocks';

function App(): ReactElement {
  return (
    <>
      {/* CSS reset */}
      <Reset />
      {/* Global styles for styled components */}
      <GlobalStyle />
      {/* Actaul app. */}
      <Clocks />
    </>
  );
}

export default App;
