/**
 * Header.js - The header component for this App.
 */

import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import LogoSVG from './LogoSVG';

/** Styling for this component */
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    background: '#004d00',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header() {
  // Make sure the component is using the styles
  const classes = useStyles();

  return (
    <div>
      <AppBar className={classes.root}>
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit">
            <LogoSVG />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            5e Homebrew Monsters Test
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
