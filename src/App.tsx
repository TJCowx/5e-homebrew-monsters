import React from 'react';
import Header from './components/layout/Header';
import Monster from './components/monster/Monster';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core';
import './App.css';

const useStyles = makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
  monster: {
    paddingTop: theme.spacing(2),
  },
}));

const theme = createMuiTheme({
  spacing: 8,
  palette: {
    primary: {
      main: '#004d00',
      light: '#3a7a2d',
      dark: '#002500',
    },
    secondary: {
      main: '#4D0026',
      light: '#002500',
      dark: '#2a0000',
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
        <div className={classes.monster}>
          <Monster />
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
