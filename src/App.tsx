import React from 'react';
import Header from './components/layout/Header';
import Monster from './components/monster/Monster';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core';
import './App.css';

const useStyles = makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
}));

const theme = createMuiTheme({
  spacing: 8,
  overrides: {
    /** Set the styling for input fields to use the green of the header */
    MuiOutlinedInput: {
      root: {
        '& $notchedOutline': {
          borderColor: 'rgba(0, 0, 0, 0.23)',
        },
        '&:hover:not($disabled):not($focused):not($error) $notchedOutline': {
          borderColor: '#004d00',
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            borderColor: 'rgba(0, 0, 0, 0.23)',
          },
        },
        '&$focused $notchedOutline': {
          borderColor: '#004d00',
          borderWidth: 1,
        },
        display: 'flex',
      },
    },
    MuiInputLabel: {
      root: {
        '&$focused': {
          color: '#004d00',
        },
      },
    },
  },
});

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Header />
      <div className={classes.appBarSpacer} />
      <ThemeProvider theme={theme}>
        <Monster />
      </ThemeProvider>
    </div>
  );
}

export default App;
