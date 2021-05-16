import React, { ReactElement } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Reset } from 'styled-reset';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './GlobalStyle';
import Clocks from './pages/Clocks';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import cyberpunk from './themes/cyberpunk';

function App(): ReactElement {
  return (
    <Router>
      {/* CSS reset */}
      <Reset />
      <ThemeProvider theme={cyberpunk}>
        {/* Global styles for styled components */}
        <GlobalStyle />
        {/* Actaul app. */}
        <Switch>
          <Route exact path="/">
            <Clocks />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
