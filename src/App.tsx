import React from 'react';
import GlobalStyle from './theme/GlobalStyle';
import theme from './theme/theme';
import { ThemeProvider } from 'styled-components';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App;
