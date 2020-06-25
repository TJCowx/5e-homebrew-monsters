import React from 'react';
import { TextField } from '@material-ui/core';
import AddMonsterProperty from './AddMonsterProperty';

export default function MonsterProperties() {
  return (
    <div>
      <TextField id="standard-basic" label="Immunities" />
      <TextField id="standard-basic" label="Resistences" />
      <TextField id="standard-basic" label="Weaknesses" />
      <TextField id="standard-basic" label="Senses" />
      <TextField id="standard-basic" label="Languages" />
      <TextField id="standard-basic" label="Challenge Rating" />
      <TextField id="standard-basic" label="Reward XP" />

      <div>List of properties</div>
      <AddMonsterProperty />
    </div>
  );
}
