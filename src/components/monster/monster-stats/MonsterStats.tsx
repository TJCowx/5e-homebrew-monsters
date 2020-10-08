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
  acField: {
    width: '33%',
    '@media (max-width: 767px)': {
      width: '100%',
    },
  },
  hpField: {
    width: '50%',
  },
  hpWrapper: {
    width: '66%',
    display: 'flex',
    'flex-direction': 'row',
    '@media (max-width: 767px)': {
      width: '100%',
    },
  },
  baseStatWrapper: {
    width: '100%',
    display: 'flex',
    'flex-direction': 'row',
    '@media (max-width: 767px)': {
      display: 'inline-block',
    },
  },
  statField: {
    width: '50%',
    '@media (max-width: 767px)': {
      width: '100%',
    },
  },
  rowWrapper: {
    width: '100%',
    display: 'flex',
    'flex-direction': 'row',
    '@media (max-width: 767px)': {
      display: 'inline-block',
    },
  },
  profBonus: {
    width: '20%',
    '@media (max-width: 767px)': {
      width: '100%',
    },
  },
  bottomRowSelects: {
    width: '40%',
    '@media (max-width: 767px)': {
      width: '100%',
    },
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
      <Box className={classes.rowWrapper}>
        <TextField
          className={`${classes.inputField} ${classes.acField}`}
          value={armourClass}
          name="armourClass"
          label="Armour Class"
          onChange={handleIntChange}
        />
        <Box className={classes.hpWrapper}>
          <TextField
            className={`${classes.inputField} ${classes.hpField}`}
            label="Hit Points"
            value={hitPoints}
            name="hitPoints"
            onChange={handleIntChange}
          />
          <TextField
            className={`${classes.inputField} ${classes.hpField}`}
            label="Hit Die"
            value={hitDie}
            name="hitDie"
            onChange={handleChange}
          />
        </Box>
      </Box>

      <Box className={classes.baseStatWrapper}>
        <Box display="flex" flexDirection="row">
          <TextField
            className={`${classes.inputField} ${classes.statField}`}
            label="Strength"
            value={str}
            name="str"
            onChange={handleIntChange}
          />
          <TextField
            className={`${classes.inputField} ${classes.statField}`}
            label="Dexerity"
            value={dex}
            name="dex"
            onChange={handleIntChange}
          />
        </Box>
        <Box display="flex" flexDirection="row">
          <TextField
            className={`${classes.inputField} ${classes.statField}`}
            label="Constitution"
            value={con}
            name="con"
            onChange={handleIntChange}
          />
          <TextField
            className={`${classes.inputField} ${classes.statField}`}
            label="Intelligence"
            value={int}
            name="int"
            onChange={handleIntChange}
          />
        </Box>
        <Box display="flex" flexDirection="row">
          <TextField
            className={`${classes.inputField} ${classes.statField}`}
            label="Wisdom"
            value={wis}
            name="wis"
            onChange={handleIntChange}
          />
          <TextField
            className={`${classes.inputField} ${classes.statField}`}
            label="Charisma"
            value={chr}
            name="chr"
            onChange={handleIntChange}
          />
        </Box>
      </Box>

      <Box className={classes.rowWrapper}>
        <TextField
          className={`${classes.profBonus} ${classes.inputField}`}
          label="Proficiency Bonus"
          value={profBonus}
          name="profBonus"
          onChange={handleIntChange}
        />
        <FormControl className={`${classes.bottomRowSelects} ${classes.inputField}`}>
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
        <FormControl className={`${classes.bottomRowSelects} ${classes.inputField}`}>
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
  proficiencies: PropTypes.array.isRequired,
  savingThrows: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired,
  classes: PropTypes.any,
};

export default withStyles(useStyles, { withTheme: true })(MonsterStats);
