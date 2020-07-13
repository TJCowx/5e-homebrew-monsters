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
import PropTypes from 'prop-types';

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

/** Setup the monster properties.s */
export interface MonsterPropertiesProps {
  immunities: Array<string>;
  resistances: Array<string>;
  weaknesses: Array<string>;
  languages: Array<string>;
  senses: Array<string>;
  challengeRating: string;
  rewardXP: string;
  handleChange: any;
  classes: any;
}

class MonsterProperties extends React.Component<MonsterPropertiesProps> {
  static propTypes: { [key in keyof MonsterPropertiesProps]: any } = {
    immunities: PropTypes.array.isRequired,
    resistances: PropTypes.array.isRequired,
    weaknesses: PropTypes.array.isRequired,
    languages: PropTypes.array.isRequired,
    senses: PropTypes.array.isRequired,
    challengeRating: PropTypes.string.isRequired,
    rewardXP: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    classes: PropTypes.object,
  };

  /**
   * Gets a list of damage types.s
   */
  private getDamageTypes(): Array<{ value: string; name: string }> {
    return [
      { value: 'acd', name: 'Acid' },
      { value: 'cld', name: 'Cold' },
      { value: 'fre', name: 'Fire' },
      { value: 'fce', name: 'Force' },
      { value: 'lgh', name: 'Lightning' },
      { value: 'nec', name: 'Necrotic' },
      { value: 'psn', name: 'Poison' },
      { value: 'psy', name: 'Psychic' },
      { value: 'rad', name: 'Radiant' },
      { value: 'thun', name: 'Thunder' },
      { value: 'nmag', name: 'Non-Magical' },
      { value: 'wmag', name: 'Magic Weapons' },
      { value: 'blu', name: 'Bludgeoning' },
      { value: 'slsh', name: 'Slashing' },
      { value: 'prc', name: 'Piercing' },
    ];
  }

  /**
   * Gets a list of senses that the user can select
   */
  private getSenses(): Array<{ value: string; name: string }> {
    return [
      { value: 'bld', name: 'Blindsight' },
      { value: 'drk', name: 'Darkvision' },
      { value: 'tmr', name: 'Tremorsense' },
      { value: 'tru', name: 'Truesight' },
    ];
  }

  /**
   * Gets a list of languagess
   */
  private getLanguages(): Array<{ value: string; name: string }> {
    return [
      { value: 'com', name: 'Common' },
      { value: 'dwv', name: 'Dwarvish' },
      { value: 'elv', name: 'Elvish' },
      { value: 'gnt', name: 'Giant' },
      { value: 'gnm', name: 'Gnomish' },
      { value: 'gob', name: 'Goblin' },
      { value: 'hfl', name: 'Halfling' },
      { value: 'orc', name: 'Orc' },
      { value: 'aby', name: 'Abyssal' },
      { value: 'cel', name: 'Celestial' },
      { value: 'dra', name: 'Draconic' },
      { value: 'dps', name: 'Deep Speech' },
      { value: 'inf', name: 'Infernal' },
      { value: 'pri', name: 'Primordial' },
      { value: 'syl', name: 'Sylvan' },
      { value: 'undr', name: 'Undercommon' },
    ];
  }

  render() {
    const {
      classes,
      immunities,
      resistances,
      weaknesses,
      senses,
      languages,
      challengeRating,
      rewardXP,
    } = this.props;

    // Setup the dropdown data.
    const damageTypes: Array<{
      value: string;
      name: string;
    }> = this.getDamageTypes();

    const availableSenses: Array<{
      value: string;
      name: string;
    }> = this.getSenses();

    const availableLanguages: Array<{
      value: string;
      name: string;
    }> = this.getLanguages();

    return (
      <div className={classes.descriptionRoot}>
        <Box display="flex" flexDirection="row">
          <FormControl className={classes.inputField} style={{ width: '33%' }}>
            <InputLabel id="immunities-label">Immunities</InputLabel>
            <Select
              name="immunities"
              multiple
              labelId="immunities-label"
              value={immunities}
              onChange={this.props.handleChange}
            >
              {damageTypes.map((damageType: { value: string; name: string }) => (
                <MenuItem key={damageType.value} value={damageType.value}>
                  {damageType.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl className={classes.inputField} style={{ width: '33%' }}>
            <InputLabel id="resistances-label">Resistances</InputLabel>
            <Select
              name="resistances"
              multiple
              labelId="resistances-label"
              value={resistances}
              onChange={this.props.handleChange}
            >
              {damageTypes.map((damageType: { value: string; name: string }) => (
                <MenuItem key={damageType.value} value={damageType.value}>
                  {damageType.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl className={classes.inputField} style={{ width: '33%' }}>
            <InputLabel id="weaknesses-label">Weaknesses</InputLabel>
            <Select
              name="weaknesses"
              multiple
              labelId="weaknesses-label"
              value={weaknesses}
              onChange={this.props.handleChange}
            >
              {damageTypes.map((damageType: { value: string; name: string }) => (
                <MenuItem key={damageType.value} value={damageType.value}>
                  {damageType.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Box display="flex" flexDirection="row">
          <FormControl className={classes.inputField} style={{ width: '25%' }}>
            <InputLabel id="senses-label">Senses</InputLabel>
            <Select
              name="senses"
              multiple
              labelId="senses-label"
              value={senses}
              onChange={this.props.handleChange}
            >
              {availableSenses.map((sense: { value: string; name: string }) => (
                <MenuItem key={sense.value} value={sense.value}>
                  {sense.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl className={classes.inputField} style={{ width: '25%' }}>
            <InputLabel id="languages-label">Languages</InputLabel>
            <Select
              name="languages"
              multiple
              labelId="languages-label"
              value={languages}
              onChange={this.props.handleChange}
            >
              {availableLanguages.map(
                (language: { value: string; name: string }) => (
                  <MenuItem key={language.value} value={language.value}>
                    {language.name}
                  </MenuItem>
                )
              )}
            </Select>
          </FormControl>
          <TextField
            className={classes.inputField}
            style={{ width: '25%' }}
            id="standard-basic"
            label="Challenge Rating"
            name="challengeRating"
            value={challengeRating}
            onChange={this.props.handleChange}
          />
          <TextField
            className={classes.inputField}
            style={{ width: '25%' }}
            id="standard-basic"
            label="Reward XP"
            name="rewardXP"
            value={rewardXP}
            onChange={this.props.handleChange}
          />
        </Box>
      </div>
    );
  }
}

export default withStyles(useStyles, { withTheme: true })(MonsterProperties);
