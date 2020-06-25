import React from 'react';
import { TextField } from '@material-ui/core';

export default function MonsterStats() {
  return (
    <div>
      <TextField id="standard-basic" label="Armour Class" />
      <TextField id="standard-basic" label="Hit Points" />
      <TextField id="standard-basic" label="Hit Die" />
      <TextField id="standard-basic" label="Speed" />

      <TextField id="standard-basic" label="Strength" />
      <TextField id="standard-basic" label="Dex" />
      <TextField id="standard-basic" label="Con" />
      <TextField id="standard-basic" label="Int" />
      <TextField id="standard-basic" label="Wis" />
      <TextField id="standard-basic" label="Charisma" />
      <TextField id="standard-basic" label="Proficiency Bonus" />

      <TextField id="standard-basic" label="Saving Throws" />
      <TextField id="standard-basic" label="Skill Proficiencies" />
    </div>
  );
}
