/**
 * MonsterDescription.tsx
 * Handles the basic information of the monster.
 * Name - The general name of it
 * Size - The size of it
 * Alignment - The monster's alignment
 */
import React from 'react';
import { TextField } from '@material-ui/core';

export default function MonsterDescription() {
  return (
    <div>
      <TextField id="standard-basic" label="Monster Name" />
      <TextField id="standard-basic" label="Size" />
      <TextField id="standard-basic" label="Alignment" />
    </div>
  );
}
