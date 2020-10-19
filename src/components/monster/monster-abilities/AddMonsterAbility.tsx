/**
 * AddMonsterProperty.tsx
 * Handles adding an individual monster property with the title and description
 */
import React, { useState, useEffect } from 'react';
import { TextField, Button, Box, makeStyles, createStyles, Theme } from '@material-ui/core';
import MonsterAbility from '../../../models/MonsterAbility';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    display: 'flex',
    'flex-direction': 'row',
    width: '100%',
    justifyContent: 'space-between',
    '@media (max-width: 767px)': {
      display: 'inline-block',
    },
  },
  inputField: {
    display: 'flex',
    margin: theme.spacing(1),
  },
  nameWrapper: {
    width: '40%',
    '@media (max-width: 767px)': {
      width: '100%',
    },
  },
  descriptionWrapper: {
    width: '65%',
    '@media (max-width: 767px)': {
      width: '100%',
    },
  },
  actionWrapper: {
    width: '15%',
    minWidth: '150px',
    '@media (max-width: 767px)': {
      width: '100%',
    },
  },
  saveButton: {
    marginLeft: 'auto',
    '@media (max-width: 767px)': {
      display: 'inline-block',
    },
  },
}));

type Props = {
  addMonsterAbility: (ability: MonsterAbility) => unknown;
  updateMonsterAbility: (ability: MonsterAbility) => unknown;
  editAbility: MonsterAbility;
}

function AddMonsterAbility({
  addMonsterAbility,
  updateMonsterAbility,
  editAbility,
}: Props) {
  const [ability, setAbility] = useState({ name: '', description: ''} as MonsterAbility);
  const [isNew, setIsNew] = useState(true);

  const classes = useStyles();

  /**
   * An effect that checks if the editAbility prop has been change
   * When it does, it sets the ability being editted to that if it isn't null
   * and sets the isNew state to false. If it is null it just creates a
   * new blank monster ability and sets the isNew state to false
   */
  useEffect(() => {
    if (editAbility == null) {
      setIsNew(true);
      setAbility({name: '', description: ''} as MonsterAbility);
    } else {
      setIsNew(false);
      setAbility(editAbility);
    }

    return () => {
      setAbility({name: '', description: ''} as MonsterAbility);
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

  /** Sets the state to the default new ability state */
  const newAbilityState = () => {
    setAbility({name: '', description: ''} as MonsterAbility);
    setIsNew(true);
  }

  /**
   * Add or edit a monster ability by passing it up to the parent
   * and then reset the state
   */
  const addAbility = () => {
    addMonsterAbility(ability);
    newAbilityState();
  };

  /** Updates the monster ability that has been passed in */
  const updateAbility = () => {
    updateMonsterAbility(ability);
    newAbilityState();
  }

  return (
    <>
      <Box className={classes.root}>
        <Box className={classes.nameWrapper} width="25%">
          <TextField
            label="Name"
            aria-label="Ability Name"
            name="name"
            value={ability.name}
            onChange={handleChange}
            className={classes.inputField}
          />
        </Box>
        <Box className={classes.descriptionWrapper} width="60%">
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
          className={classes.actionWrapper}
          justifyContent="flex-end"
          display="flex"
          alignItems="center"
        >
          <Button
            color="primary"
            variant="contained"
            aria-label="Save Ability"
            onClick={isNew ? addAbility : updateAbility}
          >
            {isNew ? 'Save' : 'Update'}
          </Button>
          {!isNew && (
            <Button
              color="secondary"
              variant="contained"
              aria-label="Cancel Edit"
              style={{ marginLeft: '8px' }}
              onClick={newAbilityState}
            >
              Cancel
            </Button>
          )}
        </Box>
      </Box>
    </>
  );
}

export default AddMonsterAbility;
