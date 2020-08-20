/**
 * AddMonsterProperty.tsx
 * Handles adding an individual monster property with the title and description
 */
import React from 'react';
import { TextField, Button, Box, Theme, withStyles } from '@material-ui/core';
import PropTypes, { InferProps } from 'prop-types';

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
  classes,
}: InferProps<typeof AddMonsterAbility.propTypes>) {
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
            className={classes.inputField}
          />
        </Box>
        <Box width="60%">
          <TextField
            multiline
            label="Description"
            aria-label="Ability Description"
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
            Save
          </Button>
        </Box>
      </Box>
    </>
  );
}

AddMonsterAbility.propTypes = {
  classes: PropTypes.any,
};

export default withStyles(useStyles, { withTheme: true })(AddMonsterAbility);
