/**
 * AddMonsterProperty.tsx
 * Handles adding an individual monster property with the title and description
 */
import React, { useState, useEffect } from 'react';
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
  editAbility,
  classes,
}: InferProps<typeof AddMonsterAbility.propTypes>) {
  const [ability, setAbility] = useState(new MonsterAbility({}));
  const [isNew, setIsNew] = useState(true);

  /**
   * An effect that checks if the editAbility prop has been change
   * When it does, it sets the ability being editted to that if it isn't null
   * and sets the isNew state to false. If it is null it just creates a
   * new blank monster ability and sets the isNew state to false
   */
  useEffect(() => {
    if (editAbility == null) {
      setIsNew(true);
      setAbility(new MonsterAbility({}));
    } else {
      setIsNew(false);
      setAbility(editAbility);
    }

    return () => {
      setAbility(new MonsterAbility({}));
    };
  }, [editAbility]);

  /**
   * Handles updating the state on both the inputs
   * @param event The event from the input
   */
  const handleChange = (event: any) => {
    setAbility({
      ...ability,
      [event.target.name]: event.target.value,
    } as MonsterAbility);
  };

  /**
   * Add or edit a monster ability by passing it up to the parent
   * and then reset the state
   */
  const addAbility = () => {
    addMonsterAbility(ability);
    setAbility(new MonsterAbility());
    setIsNew(true);
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
          <Button
            color="primary"
            variant="contained"
            aria-label="Save Ability"
            onClick={addAbility}
          >
            {isNew ? 'Save' : 'Update'}
          </Button>
        </Box>
      </Box>
    </>
  );
}

AddMonsterAbility.propTypes = {
  addMonsterAbility: PropTypes.func.isRequired,
  editAbility: PropTypes.instanceOf(MonsterAbility),
  classes: PropTypes.any,
};

export default withStyles(useStyles, { withTheme: true })(AddMonsterAbility);
