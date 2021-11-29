import React from 'react';
import GlobalStyle from './theme/GlobalStyle';
import theme from './theme/theme';
import { ThemeProvider } from 'styled-components';
import GlobalStructure from './components/atoms/GlobalStructure/GlobalStructure';
import Sidebar from './components/molecules/Sidebar/Sidebar';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <GlobalStructure>
        <Sidebar/>
      </GlobalStructure>
    </ThemeProvider>
  )
}

export default App;
