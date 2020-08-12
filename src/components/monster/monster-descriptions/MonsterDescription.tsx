/**
 * MonsterDescription.tsx
 * Handles the basic information of the monster.
 * Name - The general name of it
 * Size - The size of it selected from a list of Tiny to Gargantuan
 * Alignment - The monster's alignment based off the Lawful/Chaotic
 *             Good/Evil scale
 */

import React from 'react';
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
import PropTypes, { InferProps } from 'prop-types';

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

export function MonsterDescription({
  name,
  size,
  alignment,
  handleChange,
  classes,
}: InferProps<typeof MonsterDescription.propTypes>) {
  /**
   * A list of available sizes based on the 5e sizes chart
   */
  const availableSizes: Array<string> = [
    'Tiny',
    'Small',
    'Medium',
    'Large',
    'Huge',
    'Gargantuan',
  ];

  /**
   * A list of available alignments based on the 5e alignments chart
   */
  const availableAlignments: Array<string> = [
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

  return (
    <div className={classes.descriptionRoot}>
      <Box display="flex" flexDirection="row">
        <TextField
          className={(classes.inputField, classes.monsterName)}
          label="Monster Name"
          name="name"
          value={name}
          onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
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

MonsterDescription.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  alignment: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  classes: PropTypes.any,
};

export default withStyles(useStyles, { withTheme: true })(MonsterDescription);
