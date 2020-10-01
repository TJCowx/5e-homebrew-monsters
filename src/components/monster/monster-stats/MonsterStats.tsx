/**
 * MonsterStats.tsx
 * Handles the stats for the monster.
 * Unfortunately a few of these fields which should be number can't
 * due to the material UI's number input fields not working how I would
 * like, so I made a work around making it so only numbers can be put
 * in normal textfields which forces the types to have to be strings
 */
import React from 'react';
import {
  TextField,
  Box,
  Theme,
  withStyles,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core';
import { getStats, getProficiencies } from '../../../hooks/getTypeMaps';
import PropTypes, { InferProps } from 'prop-types';

/** Setup the styling for these inputs */
const useStyles = (theme: Theme) => ({
  descriptionRoot: {
    width: '100%',
  },
  inputField: {
    display: 'flex',
    margin: theme.spacing(1),
  },
});

function MonsterStats({
  classes,
  armourClass,
  hitPoints,
  str,
  dex,
  con,
  int,
  wis,
  chr,
  profBonus,
  proficiencies,
  savingThrows,
  hitDie,
  speed,
  handleChange,
}: InferProps<typeof MonsterStats.propTypes>) {
  const availableProfs: object = getProficiencies();
  const availableSavingThrows: object = getStats();

  /**
   * Takes an input event and checks to see if it was an integer input
   * before trying to update the state
   * @param event The event passed in from material UI onChange
   */
  const handleIntChange = (event: { target: { name: any; value: any } }) => {
    // If it's null or a number value we will let it update the state in the parent
    if (event.target.value == null || /^-?[0-9]*$/.test(event.target.value)) {
      handleChange(event);
    }
  };

  return (
    <div className={classes.descriptionRoot}>
      <Box display="flex" flexDirection="row">
        <TextField
          style={{ width: '20%' }}
          className={classes.inputField}
          value={armourClass}
          name="armourClass"
          label="Armour Class"
          onChange={handleIntChange}
        />
        <TextField
          style={{ width: '20%' }}
          className={classes.inputField}
          label="Hit Points"
          value={hitPoints}
          name="hitPoints"
          onChange={handleIntChange}
        />
        <TextField
          style={{ width: '20%' }}
          className={classes.inputField}
          label="Hit Die"
          value={hitDie}
          name="hitDie"
          onChange={handleChange}
        />
      </Box>

      <Box display="flex" flexDirection="row">
        <TextField
          className={classes.inputField}
          label="Strength"
          value={str}
          name="str"
          onChange={handleIntChange}
        />
        <TextField
          className={classes.inputField}
          label="Dexerity"
          value={dex}
          name="dex"
          onChange={handleIntChange}
        />
        <TextField
          className={classes.inputField}
          label="Constitution"
          value={con}
          name="con"
          onChange={handleIntChange}
        />
        <TextField
          className={classes.inputField}
          label="Intelligence"
          value={int}
          name="int"
          onChange={handleIntChange}
        />
        <TextField
          className={classes.inputField}
          label="Wisdom"
          value={wis}
          name="wis"
          onChange={handleIntChange}
        />
        <TextField
          className={classes.inputField}
          label="Charisma"
          value={chr}
          name="chr"
          onChange={handleIntChange}
        />
      </Box>

      <Box display="flex" flexDirection="row">
        <TextField
          className={classes.inputField}
          label="Proficiency Bonus"
          value={profBonus}
          name="profBonus"
          onChange={handleIntChange}
          style={{ width: '20%' }}
        />
        <FormControl className={classes.inputField} style={{ width: '40%' }}>
          <InputLabel id="skillProf-label">Skill Proficiencies</InputLabel>
          <Select
            name="proficiencies"
            multiple
            labelId="skillProf-label"
            id="skillProf-select"
            value={proficiencies}
            onChange={handleChange}
          >
            {Object.entries(availableProfs).map(([value, name]) => {
              return (
                <MenuItem key={value} value={value}>
                  {name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <FormControl className={classes.inputField} style={{ width: '40%' }}>
          <InputLabel id="savingThrows-label">Saving Throws</InputLabel>
          <Select
            name="savingThrows"
            multiple
            labelId="savingThrows-label"
            value={savingThrows}
            onChange={handleChange}
          >
            {Object.entries(availableSavingThrows).map(([value, name]) => {
              return (
                <MenuItem key={value} value={value}>
                  {name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Box>
    </div>
  );
}

MonsterStats.propTypes = {
  armourClass: PropTypes.string.isRequired,
  hitPoints: PropTypes.string.isRequired,
  str: PropTypes.string.isRequired,
  dex: PropTypes.string.isRequired,
  con: PropTypes.string.isRequired,
  int: PropTypes.string.isRequired,
  wis: PropTypes.string.isRequired,
  chr: PropTypes.string.isRequired,
  profBonus: PropTypes.string.isRequired,
  hitDie: PropTypes.string.isRequired,
  speed: PropTypes.string.isRequired,
  proficiencies: PropTypes.array.isRequired,
  savingThrows: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired,
  classes: PropTypes.any,
};

export default withStyles(useStyles, { withTheme: true })(MonsterStats);
