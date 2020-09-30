/**
 * Header.js - The header component for this App.
 */

import React, { useState } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import LogoSVG from './LogoSVG';
import NavMenu from './NavMenu';

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
  const [openNav, setOpenNav] = useState(false);

  return (
    <div>
      <AppBar className={classes.root}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={() => setOpenNav(true)}
          >
            <MenuIcon />
          </IconButton>
          <IconButton className={classes.menuButton} color="inherit">
            <LogoSVG />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            5e Homebrew Monsters
          </Typography>
        </Toolbar>
      </AppBar>

      <NavMenu open={openNav} closeDrawer={() => setOpenNav(false)} />
    </div>
  );
}
