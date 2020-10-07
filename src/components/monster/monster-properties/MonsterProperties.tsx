/**
 * MonsterProperties.tsx
 * Handles the monster's properties.
 */
import React from 'react';
import {
  TextField,
  withStyles,
  Theme,
  InputLabel,
  FormControl,
  Select,
  MenuItem,
  Box,
} from '@material-ui/core';
import PropTypes, { InferProps } from 'prop-types';
import { getDamageTypes } from '../../../hooks/getDamageTypes';

/** Setup the styling for these inputs */
const useStyles = (theme: Theme) => ({
  descriptionRoot: {
    width: '100%',
  },
  inputField: {
    display: 'flex',
    margin: theme.spacing(1),
  },
  crWrapper: {
    display: 'flex',
    'flex-direction': 'row',
    width: '66%',
    '@media (max-width: 767px)': {
      width: '100%',
    },
  },
  rowWrapper: {
    display: 'flex',
    'flex-direction': 'row',
    width: '100%',
    '@media (max-width: 767px)': {
      display: 'inline-block',
    },
  },
  twoItemRow: {
    width: '50%',
    '@media (max-width: 767px)': {
      width: '100%',
    },
  },
  langField: {
    width: '33%',
    '@media (max-width: 767px)': {
      width: '100%',
    },
  },
});

function MonsterProperties({
  classes,
  immunities,
  resistances,
  weaknesses,
  condImmunities,
  languages,
  challengeRating,
  rewardXP,
  handleChange,
}: InferProps<typeof MonsterProperties.propTypes>) {
  /**
   * A list of available damage types in 5e
   */
  const damageTypes: Array<string> = getDamageTypes();

  /**
   * A list of available conditions available in 5e
   */
  const conditionTypes: Array<string> = [
    'Blinded',
    'Charmed',
    'Deafened',
    'Frightened',
    'Grappled',
    'Incapacitated',
    'Invisible',
    'Paralyzed',
    'Petrified',
    'Poisoned',
    'Prone',
    'Restrained',
    'Stunned',
    'Unconscious',
  ];

  /**
   * A list of available languages in 5e
   */
  const availableLanguages: Array<string> = [
    'Dwarvish',
    'Common',
    'Elvish',
    'Giant',
    'Gnomish',
    'Goblin',
    'Halfling',
    'Orc',
    'Abyssal',
    'Celestial',
    'Draconic',
    'Deep Speech',
    'Infernal',
    'Primordial',
    'Sylvan',
    'Undercommon',
  ];

  return (
    <div className={classes.descriptionRoot}>
      <Box className={classes.rowWrapper}>
        <FormControl className={`${classes.inputField} ${classes.twoItemRow}`}>
          <InputLabel id="immunities-label">Damage Immunities</InputLabel>
          <Select
            name="immunities"
            multiple
            labelId="immunities-label"
            value={immunities}
            onChange={handleChange}
          >
            {damageTypes.map((damageType: string) => (
              <MenuItem key={damageType} value={damageType}>
                {damageType}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl className={`${classes.inputField} ${classes.twoItemRow}`}>
          <InputLabel id="condition-label">Condition Immunities</InputLabel>
          <Select
            name="condImmunities"
            multiple
            labelId="condition-label"
            value={condImmunities}
            onChange={handleChange}
          >
            {conditionTypes.map((condType: string) => (
              <MenuItem key={condType} value={condType}>
                {condType}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Box className={classes.rowWrapper}>
        <FormControl className={`${classes.inputField} ${classes.twoItemRow}`}>
          <InputLabel id="resistances-label">Resistances</InputLabel>
          <Select
            name="resistances"
            multiple
            labelId="resistances-label"
            value={resistances}
            onChange={handleChange}
          >
            {damageTypes.map((damageType: string) => (
              <MenuItem key={damageType} value={damageType}>
                {damageType}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl className={`${classes.inputField} ${classes.twoItemRow}`}>
          <InputLabel id="weaknesses-label">Weaknesses</InputLabel>
          <Select
            name="weaknesses"
            multiple
            labelId="weaknesses-label"
            value={weaknesses}
            onChange={handleChange}
          >
            {damageTypes.map((damageType: string) => (
              <MenuItem key={damageType} value={damageType}>
                {damageType}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Box className={classes.rowWrapper}>
        <FormControl className={`${classes.inputField} ${classes.langField}`}>
          <InputLabel id="languages-label">Languages</InputLabel>
          <Select
            name="languages"
            multiple
            labelId="languages-label"
            value={languages}
            onChange={handleChange}
          >
            {availableLanguages.map((language: string) => (
              <MenuItem key={language} value={language}>
                {language}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Box className={classes.crWrapper}>
          <TextField
            className={classes.inputField}
            style={{ width: '50%' }}
            id="standard-basic"
            label="Challenge Rating"
            name="challengeRating"
            value={challengeRating}
            onChange={handleChange}
          />
          <TextField
            className={classes.inputField}
            style={{ width: '50%' }}
            id="standard-basic"
            label="Reward XP"
            name="rewardXP"
            value={rewardXP}
            onChange={handleChange}
          />
        </Box>
      </Box>
    </div>
  );
}

MonsterProperties.propTypes = {
  immunities: PropTypes.array.isRequired,
  condImmunities: PropTypes.array.isRequired,
  resistances: PropTypes.array.isRequired,
  weaknesses: PropTypes.array.isRequired,
  languages: PropTypes.array.isRequired,
  challengeRating: PropTypes.string.isRequired,
  rewardXP: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  classes: PropTypes.any,
};

export default withStyles(useStyles, { withTheme: true })(MonsterProperties);
