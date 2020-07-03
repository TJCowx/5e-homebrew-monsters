/**
 * Handles the monster's stats
 */
import React from 'react';
import { TextField, Box } from '@material-ui/core';

class MonsterStats extends React.Component {
  render() {
    return (
      <div>
        <Box>
          <TextField id="standard-basic" label="Armour Class" />
          <TextField id="standard-basic" label="Hit Points" />
          <TextField id="standard-basic" label="Hit Die" />
          <TextField id="standard-basic" label="Speed" />
        </Box>

        <Box>
          <TextField id="standard-basic" label="Strength" />
          <TextField id="standard-basic" label="Dex" />
          <TextField id="standard-basic" label="Con" />
          <TextField id="standard-basic" label="Int" />
          <TextField id="standard-basic" label="Wis" />
          <TextField id="standard-basic" label="Charisma" />
          <TextField id="standard-basic" label="Proficiency Bonus" />
        </Box>

        <Box>
          <TextField id="standard-basic" label="Saving Throws" />
          <TextField id="standard-basic" label="Skill Proficiencies" />
        </Box>
      </div>
    );
  }
}

export default MonsterStats;
