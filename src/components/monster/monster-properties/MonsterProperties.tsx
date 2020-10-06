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
   * A list of available senses in 5e
   */
  const availableSenses: Array<string> = [
    'Blindsight',
    'Darkvision',
    'Tremorsense',
    'Truesight',
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
      <Box display="flex" flexDirection="row">
        <FormControl className={classes.inputField} style={{ width: '50%' }}>
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
        <FormControl className={classes.inputField} style={{ width: '50%' }}>
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
      <Box display="flex" flexDirection="row">
        <FormControl className={classes.inputField} style={{ width: '50%' }}>
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
        <FormControl className={classes.inputField} style={{ width: '50%' }}>
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
      <Box display="flex" flexDirection="row">
        <FormControl className={classes.inputField} style={{ width: '33%' }}>
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
        <TextField
          className={classes.inputField}
          style={{ width: '33%' }}
          id="standard-basic"
          label="Challenge Rating"
          name="challengeRating"
          value={challengeRating}
          onChange={handleChange}
        />
        <TextField
          className={classes.inputField}
          style={{ width: '33%' }}
          id="standard-basic"
          label="Reward XP"
          name="rewardXP"
          value={rewardXP}
          onChange={handleChange}
        />
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
