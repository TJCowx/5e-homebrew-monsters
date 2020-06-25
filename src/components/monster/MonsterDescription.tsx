/**
 * MonsterDescription.tsx
 * Handles the basic information of the monster.
 * Name - The general name of it
 * Size - The size of it
 * Alignment - The monster's alignment
 */
import React from 'react';
import { TextField, makeStyles, Theme } from '@material-ui/core';
import { spacing } from '@material-ui/system';

const useStyles = makeStyles((theme: Theme) => ({
  descriptionRoot: {
    width: '100%',
  },
  inputField: {
    display: 'flex',
    paddingRight: '8px',
  },
  monsterName: {
    width: '100%',
  },
  descriptorFields: {
    width: '50%',
  },
}));

export default function MonsterDescription() {
  const classes = useStyles();
  return (
    <div className={classes.descriptionRoot}>
      <TextField
        className={(classes.inputField, classes.monsterName)}
        style={{}}
        label="Monster Name"
      />
      <TextField
        className={(classes.inputField, classes.descriptorFields)}
        label="Size"
      />
      <TextField
        className={(classes.inputField, classes.descriptorFields)}
        label="Alignment"
      />
    </div>
  );
}
