/**
 * MonsterProperties.tsx
 * Handles the monster's properties.
 */
import React, { ChangeEvent } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import {
  TextField,
  Theme,
  InputLabel,
  FormControl,
  Select,
  MenuItem,
  Box,
  createStyles,
  makeStyles,
} from '@material-ui/core';
import { getDamageTypes } from '../../../hooks/getDamageTypes';
import monster from '../../../reducers/monsterReducer';


/** Setup the styling for these inputs */
const useStyles = makeStyles((theme: Theme) => createStyles({
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
}));

type Props = {
  immunities: Array<string>;
  resistances: Array<string>;
  weaknesses: Array<string>;
  condImmunities: Array<string>;
  languages: Array<string>;
  challengeRating: string;
  rewardXP: string;
  updateProperty: (property: string, value: string) => unknown;
}

const mapDispatch = (dispatch: Dispatch) => ({
  updateProperty: (property: string, value: string) => dispatch(monster.actions.updateProperty({property, value})),
})


const MonsterProperties = connect(null, mapDispatch)(({
  immunities,
  resistances,
  weaknesses,
  condImmunities,
  languages,
  challengeRating,
  rewardXP,
  updateProperty,
}: Props) => {

  const classes = useStyles();

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

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    updateProperty(event.target.name, event.target.value);
  }

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
});

export default MonsterProperties;
