import React, { ReactElement } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Reset } from 'styled-reset';
import GlobalStyle from './GlobalStyle';
import Clocks from './pages/Clocks';
import NotFound from './pages/NotFound';

function App(): ReactElement {
  return (
    <Router>
      {/* CSS reset */}
      <Reset />
      {/* Global styles for styled components */}
      <GlobalStyle />
      {/* Actaul app. */}
      <Switch>
        <Route exact path="/">
          <Clocks />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
