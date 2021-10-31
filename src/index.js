//React imports
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//MUI imports
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import darkScrollbar from '@mui/material/darkScrollbar';

const theme = createTheme({

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: darkScrollbar()
      },
    },
  },

  palette: {
    primary: {
      main: "#FDC23E",
    },
    secondary: {
      main: "#C4DAE3",
    },
    dark:{
      main: "#F7FBFF",
    },
    text:{
      primary: "#13212A",
      light: "#F7FBFF"
    },
    background:{
      default: "#F7FBFF",
    },
    contrastThreshold: 3,
    tonalOffset: 0.1,
  },

})

ReactDOM.render(

  <ThemeProvider theme={theme}>
    <CssBaseline/>
    <App/>
  </ThemeProvider>,

  document.getElementById('root')
);