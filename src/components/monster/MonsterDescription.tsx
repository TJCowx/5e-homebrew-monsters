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
      <TextField label="Monster Name" />
      <TextField label="Size" />
      <TextField label="Alignment" />
    </div>
  );
}
