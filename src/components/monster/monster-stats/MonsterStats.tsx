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

export function MonsterStats({
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
  /**
   * A list of skill proficiencies available to 5e
   */
  const availableProficiencies: Array<{ value: string; name: string }> = [
    { value: 'ath', name: 'Athletics' },
    { value: 'acr', name: 'Acrobatics' },
    { value: 'soh', name: 'Sleight of Hand' },
    { value: 'sth', name: 'Stealth' },
    { value: 'arc', name: 'Arcana' },
    { value: 'hst', name: 'History' },
    { value: 'inv', name: 'Investigation' },
    { value: 'nat', name: 'Nature' },
    { value: 'rel', name: 'Religion' },
    { value: 'anh', name: 'Animal Handling' },
    { value: 'ins', name: 'Insight' },
    { value: 'med', name: 'Medicine' },
    { value: 'per', name: 'Perception' },
    { value: 'svl', name: 'Survival' },
    { value: 'dec', name: 'Deception' },
    { value: 'imd', name: 'Intimidation' },
    { value: 'pfm', name: 'Performance' },
    { value: 'psn', name: 'Persuasion' },
  ];

  /**
   * A list of saving throws available to 5e
   */
  const availableSavingThrows: Array<{ value: string; name: string }> = [
    { value: 'str', name: 'Strength' },
    { value: 'dex', name: 'Dexterity' },
    { value: 'con', name: 'Constitution' },
    { value: 'int', name: 'Wisdom' },
    { value: 'chr', name: 'Charisma' },
  ];

  /**
   * Takes an input event and checks to see if it was an integer input
   * before trying to update the state
   * @param event The event passed in from material UI onChange
   */
  const handleIntChange = (event: { target: { name: any; value: any } }) => {
    // If it's null or a number value we will let it update the state in the parent
    if (event.target.value == null || /^-?[0-9]*$/.test(event.target.value)) {
      // event.target.value = Number(event.target.value);
      event.target.value = parseInt(event.target.value);
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
        <TextField
          style={{ width: '40%' }}
          className={classes.inputField}
          label="Speed"
          value={speed}
          name="speed"
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
            {availableProficiencies.map((prof: { value: string; name: string }) => (
              <MenuItem key={prof.value} value={prof.value}>
                {prof.name}
              </MenuItem>
            ))}
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
            {availableSavingThrows.map(
              (savingThrow: { value: string; name: string }) => (
                <MenuItem key={savingThrow.value} value={savingThrow.value}>
                  {savingThrow.name}
                </MenuItem>
              )
            )}
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
