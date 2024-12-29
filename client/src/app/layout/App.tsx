import React, { useState } from 'react'
import Catalog from '../../features/catalog/Catalog.tsx';
import Header from './Header.tsx';
import { Container, createTheme, CssBaseline, ThemeProvider } from '@mui/material';

const App = () => {
  const [darkMode, setDarkMode] = useState(false); 
  const paletteType = darkMode ? 'dark' : 'light';
  const theme = createTheme({
    palette: {
      mode: 'dark',
    }
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Container>
        <Catalog />
      </Container>
    </ThemeProvider>
  )
}

export default App;