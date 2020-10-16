/**
 * AddMonsterAction.tsx
 * Handles adding a singular action for a monster
 * whether it be a regular action, legendary, or lair
 */
import React, { useState, useEffect } from 'react';
import {
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  FormControlLabel,
  Theme,
  withStyles,
  Button,
  makeStyles,
  createStyles,
} from '@material-ui/core';
import MonsterAction from '../../../models/MonsterAction';
import { getDamageTypes } from '../../../hooks/getDamageTypes';

const useStyles = makeStyles((theme: Theme) => createStyles({
  inputField: { display: 'flex', margin: theme.spacing(1) },
  topRowContainer: {
    display: 'flex',
    'flex-direction': 'row',
    width: '100%',
    '@media (max-width: 767px)': {
      display: 'inline-block',
    },
  },
  nameTypeContainer: {
    display: 'flex',
    'flex-direction': 'row',
    width: '66%',
    '@media (max-width: 767px)': {
      width: '100%',
    },
  },
  isAttack: {
    width: '33%',
    margin: theme.spacing(1),
    '@media (max-width: 767px)': {
      width: '100%',
      margin: '0',
      marginTop: '8px',
    },
  },
  attackRowContainer: {
    display: 'flex',
    'flex-direction': 'row',
    width: '100%',
    '@media (max-width: 767px)': {
      display: 'inline-block',
    },
  },
  attackTypeWrapper: {
    width: '33%',
    '@media (max-width: 767px)': {
      width: '100%',
    },
  },
  attackStatContainer: {
    display: 'flex',
    width: '66%',
    '@media (max-width: 767px)': {
      width: '100%',
    },
  },
  bottomRowContainer: {
    display: 'flex',
    'flex-direction': 'row',
    width: '100%',
    '@media (max-width: 767px)': {
      display: 'inline-block',
    },
  },
  descriptionWrapper: {
    width: '85%',
    '@media (max-width: 767px)': {
      width: '100%',
    },
  },
  actionContainer: {
    width: '15%',
    minWidth: '150px',
    justifyContent: 'flex-end',
    display: 'flex',
    alignItems: 'center',
    '@media (max-width: 767px)': {
      marginTop: '8px',
      width: '100%',
    },
  },
}));

type Props = {
  addMonsterAction: (action: MonsterAction) => unknown;
  editAction: MonsterAction;
}
function AddMonsterAction({
  addMonsterAction,
  editAction
}: Props) {
  const [action, setAction] = useState(new MonsterAction({}));
  const [isNew, setIsNew] = useState(true);

  const classes = useStyles();

  /** List of action types available in 5e */
  const actionTypes: Array<string> = ['Action', 'Reaction', 'Legendary', 'Lair'];

  const attackTypes: Array<string> = [
    'Melee Weapon Attack',
    'Ranged Weapon Attack',
    'Melee Spell Attack',
    'Ranged Spell Attack',
  ];

  const damageTypes: Array<string> = getDamageTypes();

  /**
   * Effect used to set attack parameters to null if the isAttack
   * parameter is set to false
   */
  useEffect(() => {
    if (!action.isAttack) {
      setAction({
        ...action,
        attackType: null,
        toHit: null,
        damage: null,
        damageType: null,
        reach: null,
      });
    }
  }, [action.isAttack]);

  /**
   * An effect that checks if the editAction prop has been change
   * When it does, it sets the action being editted to that if it isn't null
   * and sets the isNew state to false. If it is null it just creates a
   * new blank monster action and sets the isNew state to false
   */
  useEffect(() => {
    if (editAction == null) {
      setIsNew(true);
      setAction(new MonsterAction({}));
    } else {
      setIsNew(false);
      setAction(editAction);
    }

    return () => {
      setAction(new MonsterAction({}));
    };
  }, [editAction]);

  /**
   * Handles updating the
   * @param event the event emitted from material's inputs
   */
  const handleChange = (event: any) => {
    setAction({
      ...action,
      [event.target.name]: event.target.value,
    });
  };

  /**
   * Updates the checkbox being marked / unmarked
   * @param event the event emitted from Material's checkbox
   */
  const handleCheck = (event: any) => {
    setAction({
      ...action,
      [event.target.name]: event.target.checked,
    });
  };

  /**
   * Add or edit a monster action by passing it up to the parent
   * and then reset the state of the action inputs
   */
  const addAction = () => {
    addMonsterAction(action);
    setAction(new MonsterAction());
    setIsNew(true);
  };

  /**
   * Cancels editting an action setting the state
   * back to a new state
   */
  const cancelEdit = () => {
    setAction(new MonsterAction());
    setIsNew(true);
  };

  return (
    <>
      <Box className={classes.topRowContainer}>
        <Box className={classes.nameTypeContainer}>
          <TextField
            label="Name"
            aria-label="Action Name"
            name="name"
            className={classes.inputField}
            value={action.name}
            style={{ width: '50%' }}
            onChange={handleChange}
          />
          <FormControl className={classes.inputField} style={{ width: '50%' }}>
            <InputLabel id="action-type-label" aria-label="Action Type">
              Type
            </InputLabel>
            <Select
              name="actionType"
              labelId="action-type-label"
              value={action.actionType}
              onChange={handleChange}
            >
              {actionTypes.map((actionType: string) => (
                <MenuItem key={actionType} value={actionType}>
                  {actionType}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <FormControlLabel
          label="Is Attack"
          aria-label="Is Attack Action"
          control={
            <Checkbox
              checked={action.isAttack}
              onChange={handleCheck}
              name="isAttack"
              color="primary"
            />
          }
          className={`${classes.inputField} ${classes.isAttack}`}
        />
      </Box>
      {action.isAttack && (
        <>
          <Box className={classes.attackRowContainer}>
            <Box className={classes.attackTypeWrapper}>
              <FormControl className={classes.inputField}>
                <InputLabel id="attack-type-label" aria-label="Attack Type">
                  Attack Type
                </InputLabel>
                <Select
                  name="attackType"
                  labelId="attack-type-label"
                  value={action.attackType}
                  onChange={handleChange}
                >
                  {attackTypes.map((attackType: string) => (
                    <MenuItem key={attackType} value={attackType}>
                      {attackType}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            <Box className={classes.attackStatContainer}>
              <TextField
                name="reach"
                label="Reach"
                aria-label="React"
                value={action.reach}
                onChange={handleChange}
                className={classes.inputField}
                style={{ width: '50%' }}
              />
              <TextField
                name="toHit"
                label="To Hit"
                aria-label="To Hit"
                value={action.toHit}
                onChange={handleChange}
                className={classes.inputField}
                style={{ width: '50%' }}
              />
            </Box>
          </Box>
          <Box display="flex" flexDirection="row" width="100%">
            <TextField
              name="damage"
              label="Damage"
              aria-label="Damage"
              value={action.damage}
              onChange={handleChange}
              className={classes.inputField}
              style={{ width: '50%' }}
            />
            <FormControl className={classes.inputField} style={{ width: '50%' }}>
              <InputLabel id="damage-type-label" aria-label="Damage Type">
                Damage Type
              </InputLabel>
              <Select
                name="damageType"
                labelId="damage-type-label"
                value={action.damageType}
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
        </>
      )}
      <Box className={classes.bottomRowContainer}>
        <Box className={classes.descriptionWrapper}>
          <TextField
            multiline
            className={classes.inputField}
            label="Description"
            aria-label="Action Description"
            name="description"
            value={action.description}
            onChange={handleChange}
          />
        </Box>
        <Box className={classes.actionContainer}>
          <Button
            color="primary"
            variant="contained"
            aria-label="Save Action"
            onClick={addAction}
          >
            {isNew ? 'Save' : 'Update'}
          </Button>
          {!isNew && (
            <Button
              color="secondary"
              variant="contained"
              aria-label="Cancel Edit"
              style={{ marginLeft: '8px' }}
              onClick={cancelEdit}
            >
              Cancel
            </Button>
          )}
        </Box>
      </Box>
    </>
  );
}

export default AddMonsterAction;
