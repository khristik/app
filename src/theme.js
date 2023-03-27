import { createTheme, GlobalStyles as MuiGlobalStyles } from '@mui/material';
import { blueGrey, green, grey, purple, teal } from '@mui/material/colors';
import React from 'react';

export const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
      light: purple[300],
      dark: purple[700],
      contrastText: '#ffffff',
    },
    secondary: {
      main: green[600],
      contrastText: '#000',
    },
    text: {
      primary: blueGrey[600],
    },
    background: {
      // default: grey[50],
      //paper: grey[200]
    },
  },
});

export const GlobalStyles = () => (
  <MuiGlobalStyles
    styles={{
      body: {
        margin: 0,
        padding: 0,
      },
      p: {
        color: blueGrey[600],
        margin: 0,
      },
      a: {
        textDecoration: 'none',
      },
    }}
  />
);
