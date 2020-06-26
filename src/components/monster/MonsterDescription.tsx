/**
 * MonsterDescription.tsx
 * Handles the basic information of the monster.
 * Name - The general name of it
 * Size - The size of it
 * Alignment - The monster's alignment
 */
import React from 'react';
import { TextField, makeStyles, Theme, Box } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  descriptionRoot: {
    width: '100%',
    '& .MuiTextField-root': {
      display: 'flex',
      margin: theme.spacing(1),
    },
  },
  inputField: {
    display: 'flex',
  },
  monsterName: {
    width: '100%',
  },
}));

export default function MonsterDescription() {
  const classes = useStyles();
  return (
    <div className={classes.descriptionRoot}>
      <Box display="flex" flexDirection="row">
        <TextField
          className={(classes.inputField, classes.monsterName)}
          label="Monster Name"
          variant="outlined"
        />
      </Box>
      <Box display="flex" flexDirection="row">
        <Box width="50%">
          <TextField
            className={classes.inputField}
            label="Size"
            variant="outlined"
          />
        </Box>
        <Box width="50%">
          <TextField
            className={classes.inputField}
            label="Alignment"
            variant="outlined"
          />{' '}
        </Box>
      </Box>
    </div>
  );
}
