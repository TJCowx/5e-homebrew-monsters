/**
 * MonsterProperties.tsx
 * Handles the monster's properties.
 */
import React from 'react';
import { TextField, withStyles, Theme } from '@material-ui/core';
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

export interface MonsterPropertiesProps {
  immunities: Array<string>;
  resistances: Array<string>;
  weaknesses: Array<string>;
  languages: Array<string>;
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
    challengeRating: PropTypes.string.isRequired,
    rewardXP: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    classes: PropTypes.object,
  };

  private getImmunities(): Array<{ value: string; name: string }> {
    return [];
  }

  private getResistances(): Array<{ value: string; name: string }> {
    return [];
  }

  private getWeaknesses(): Array<{ value: string; name: string }> {
    return [];
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

  private getLanguages(): Array<{ value: string; name: string }> {
    return [];
  }

  render() {
    return (
      <div>
        <TextField id="standard-basic" label="Immunities" />
        <TextField id="standard-basic" label="Resistances" />
        <TextField id="standard-basic" label="Weaknesses" />
        <TextField id="standard-basic" label="Senses" />
        <TextField id="standard-basic" label="Languages" />
        <TextField id="standard-basic" label="Challenge Rating" />
        <TextField id="standard-basic" label="Reward XP" />
      </div>
    );
  }
}

export default withStyles(useStyles, { withTheme: true })(MonsterProperties);
