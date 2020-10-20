/**
 * MonsterDescription.tsx
 * Handles the basic information of the monster.
 * Name - The general name of it
 * Size - The size of it selected from a list of Tiny to Gargantuan
 * Alignment - The monster's alignment based off the Lawful/Chaotic
 *             Good/Evil scale
 */

import React, { ChangeEvent } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import {
  TextField,
  Theme,
  Box,
  Select,
  InputLabel,
  MenuItem,
  FormControl,
  makeStyles,
  createStyles,
} from '@material-ui/core';
import monster from '../../../reducers/monsterReducer';

/** Setup the styling for the inputs */
const useStyles = makeStyles((theme: Theme) => createStyles({
  descriptionRoot: {
    width: '100%',
  },
  inputField: {
    display: 'flex',
    width: '50%',
    margin: theme.spacing(1),
  },
}));

type Props = {
  name: string;
  size: string;
  type: string;
  alignment: string;
  updateProperty: (property: string, value: string) => unknown;
}

const mapDispatch = (dispatch: Dispatch) => ({
  updateProperty: (property: string, value: string) => dispatch(monster.actions.updateProperty({property, value})),
})

const MonsterDescription = connect(null, mapDispatch)(({
  name,
  size,
  type,
  alignment,
  updateProperty,
}: Props) => {

  const classes = useStyles();

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

  /**
   * The types of monsters that are available to 5e
   */
  const availableTypes: Array<string> = [
    'Aberration',
    'Beast',
    'Celestial',
    'Construct',
    'Dragon',
    'Elemental',
    'Fey',
    'Fiend',
    'Giant',
    'Humanoid',
    'Monstrosity',
    'Ooze',
    'Plant',
    'Undead',
  ];

  /** Update the property when there is a change */
  const handleChange = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    updateProperty(event.target.name, event.target.value);
  }

  return (
    <div className={classes.descriptionRoot}>
      <Box display="flex" flexDirection="row">
        <TextField
          className={classes.inputField}
          label="Monster Name"
          name="name"
          value={name}
          onChange={handleChange}
        />

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
      <Box display="flex" flexDirection="row">
        <FormControl className={classes.inputField}>
          <InputLabel id="type-label">Type</InputLabel>
          <Select
            name="type"
            labelId="type-label"
            id="type-select"
            value={type}
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {/* Map out the sizes available */}
            {availableTypes.map((type: string) => (
              <MenuItem key={type} value={type}>
                {type}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

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
    </div>
  );
})

export default MonsterDescription;
