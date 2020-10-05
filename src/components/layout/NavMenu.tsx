import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Typography,
} from '@material-ui/core';
import React from 'react';
import PropTypes, { InferProps } from 'prop-types';

const useStyles = makeStyles(() => ({
  bottomPush: {
    position: 'fixed',
    bottom: 0,
    textAlign: 'center',
    padding: '8px 18px',
  },
}));

function NavMenu({ open, closeDrawer }: InferProps<typeof NavMenu.propTypes>) {
  const classes = useStyles();

  return (
    <Drawer anchor="left" open={open} onClose={closeDrawer}>
      <List style={{ width: '250px' }}>
        <ListItem
          button
          component="a"
          href="https://tjcowx.github.io/5e-homebrew-items/"
        >
          <ListItemText primary="5e Homebrew Items" />
        </ListItem>
        <ListItem
          button
          component="a"
          href="https://roll20.net/compendium/dnd5e/Monsters#content"
        >
          <ListItemText primary="Roll20 Help" />
        </ListItem>
        <ListItem
          button
          component="a"
          href="https://github.com/TJCowx/5e-homebrew-monsters"
        >
          <ListItemText primary="View on Github" />
        </ListItem>
      </List>

      <div className={classes.bottomPush}>
        <Typography>Version [AIV]{'{version}'}[/AIV]</Typography>
      </div>
    </Drawer>
  );
}

NavMenu.propTypes = {
  open: PropTypes.bool.isRequired,
  closeDrawer: PropTypes.func.isRequired,
};

export default NavMenu;
