/**
 * AddMonsterProperty.tsx
 * Handles adding an individual monster property with the title and description
 */
import React, { useState } from 'react';
import { TextField, Button, Box, Theme, withStyles } from '@material-ui/core';
import PropTypes, { InferProps } from 'prop-types';
import MonsterAbility from '../../../models/MonsterAbility';

const useStyles = (theme: Theme) => ({
  inputField: {
    display: 'flex',
    margin: theme.spacing(1),
  },
  saveButton: {
    marginLeft: 'auto',
  },
});

function AddMonsterAbility({
  addMonsterAbility,
  classes,
}: InferProps<typeof AddMonsterAbility.propTypes>) {
  const [ability, setAbility] = useState(new MonsterAbility({}));
  const [isNew, setIsNew] = useState(true);

  const handleChange = (event: any) => {
    // Update the passed in key with it's value pair
    const newState = { [event.target.name]: event.target.value } as Pick<
      MonsterAbility,
      keyof MonsterAbility
    >;

    setAbility(newState);
  };

  return (
    <>
      <Box
        display="flex"
        flexDirection="row"
        width="100%"
        justifyContent="space-between"
      >
        <Box width="25%">
          <TextField
            label="Name"
            aria-label="Ability Name"
            name="name"
            value={ability.name}
            onChange={handleChange}
            className={classes.inputField}
          />
        </Box>
        <Box width="60%">
          <TextField
            multiline
            label="Description"
            aria-label="Ability Description"
            name="description"
            value={ability.description}
            onChange={handleChange}
            className={classes.inputField}
          />
        </Box>
        <Box
          width="15%"
          justifyContent="flex-end"
          display="flex"
          alignItems="center"
        >
          <Button color="primary" variant="contained" aria-label="Save Ability">
            {isNew ? 'Save' : 'Update'}
          </Button>
        </Box>
      </Box>
    </>
  );
}

AddMonsterAbility.propTypes = {
  addMonsterAbility: PropTypes.func.isRequired,
  classes: PropTypes.any,
};

export default withStyles(useStyles, { withTheme: true })(AddMonsterAbility);
