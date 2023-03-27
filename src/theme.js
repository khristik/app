import React from 'react';
import { createTheme, GlobalStyles as MuiGlobalStyles } from '@mui/material';
import { blueGrey, green, grey, purple, teal } from '@mui/material/colors';

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
     // contrastText: '#000',
    },
    background: {
      //default: grey[50],
      //paper: grey[200]
    },
  },
    typography:{
        body1: {
            color: blueGrey[600],
        },
        h1: {
            //color: theme.palette.secondary.main
        },
    }
});

export const GlobalStyles = () => (
  <MuiGlobalStyles
    styles={{
      body: {
        margin: 0,
        padding: 0,
      },
      a: {
        textDecoration: 'none',
      },
    }}
  />
);
