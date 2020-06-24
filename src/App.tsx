import React from 'react';
import Header from './components/layout/Header';
import Monster from './components/monster/Monster';
import { Container, makeStyles } from '@material-ui/core';
import './App.css';

const useStyles = makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
}));

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Header />
      <div className={classes.appBarSpacer} />
      <Container maxWidth="lg">
        <Monster />
      </Container>
    </div>
  );
}

export default App;
