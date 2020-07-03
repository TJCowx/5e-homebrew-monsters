/**
 * MonsterDescription.tsx
 * Handles the basic information of the monster.
 * Name - The general name of it
 * Size - The size of it selected from a list of Tiny to Gargantuan
 * Alignment - The monster's alignment based off the Lawful/Chaotic
 *             Good/Evil scale
 */

import React, { Component } from 'react';
import {
  TextField,
  Theme,
  Box,
  Select,
  InputLabel,
  MenuItem,
  FormControl,
  withStyles,
} from '@material-ui/core';
import PropTypes from 'prop-types';

/** Setup the styling for the inputs */
const useStyles = (theme: Theme) => ({
  descriptionRoot: {
    width: '100%',
  },
  inputField: {
    display: 'flex',
    margin: theme.spacing(1),
  },
  monsterName: {
    width: '100%',
  },
});

/** The props for this component */
export interface MonsterDescriptionProps {
  name: string;
  size: string;
  alignment: string;
  handleChange: any;
  classes: any;
}

class MonsterDescription extends Component<MonsterDescriptionProps> {
  static propTypes: { [key in keyof MonsterDescriptionProps]: any } = {
    name: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    alignment: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    classes: PropTypes.object,
  };

  /**
   * Gets a list of available sizes based on the 5e sizes chart
   */
  private getAvailableSizes(): Array<string> {
    return ['Tiny', 'Small', 'Medium', 'Large', 'Huge', 'Gargantuan'];
  }

  /**
   * Gets a list of available Alignments based on the 5e alignment chart
   */
  private getAvailableAlignments(): Array<string> {
    return [
      'Lawful Good',
      'Neutral Good',
      'Chaotic Good',
      'Lawful Neutral',
      'Pure Neutral',
      'Chaotic Neutral',
      'Lawful Evil',
      'Neutral Evil',
      'Chaotic Evil',
    ];
  }

  render() {
    const { classes, name, size, alignment } = this.props;

    // Populate the sizes and alignments dropdowns
    const availableSizes: Array<string> = this.getAvailableSizes();
    const availableAlignments: Array<string> = this.getAvailableAlignments();

    return (
      <div className={classes.descriptionRoot}>
        <Box display="flex" flexDirection="row">
          <TextField
            className={(classes.inputField, classes.monsterName)}
            label="Monster Name"
            name="name"
            value={name}
            onChange={this.props.handleChange}
          />
        </Box>
        <Box display="flex" flexDirection="row">
          <Box width="50%">
            <FormControl className={classes.inputField}>
              <InputLabel id="size-label">Size</InputLabel>
              <Select
                name="size"
                labelId="size-label"
                id="size-select"
                value={size}
                onChange={this.props.handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {/* Map out the sizes available */}
                {availableSizes.map((availableSize: string) => (
                  <MenuItem key={availableSize} value={availableSize}>
                    {availableSize}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box width="50%">
            <FormControl className={classes.inputField}>
              <InputLabel id="alignment-label">Alignment</InputLabel>
              <Select
                name="alignment"
                labelId="alignment-label"
                id="alignment-select"
                value={alignment}
                onChange={this.props.handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {/* Map out the alignments available */}
                {availableAlignments.map((availableAlignment: string) => (
                  <MenuItem key={availableAlignment} value={availableAlignment}>
                    {availableAlignment}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </Box>
      </div>
    );
  }
}

export default withStyles(useStyles, { withTheme: true })(MonsterDescription);
