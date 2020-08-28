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
} from '@material-ui/core';
import PropTypes, { InferProps } from 'prop-types';
import MonsterAction from '../../../models/MonsterAction';
import { getDamageTypes } from '../../../hooks/getDamageTypes';

const useStyles = (theme: Theme) => ({
  inputField: { display: 'flex', margin: theme.spacing(1) },
});

function AddMonsterAction({
  addMonsterAction,
  editAction,
  classes,
}: InferProps<typeof AddMonsterAction.propTypes>) {
  const [action, setAction] = useState(new MonsterAction({}));
  const [isNew, setIsNew] = useState(true);

  /** List of action types available in 5e */
  const actionTypes: Array<string> = ['Action', 'Reaction', 'Legendary'];

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
      <Box display="flex" flexDirection="row" width="100%">
        <TextField
          label="Name"
          aria-label="Action Name"
          name="name"
          className={classes.inputField}
          value={action.name}
          style={{ width: '33%' }}
          onChange={handleChange}
        />
        <FormControl className={classes.inputField} style={{ width: '33%' }}>
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
          className={classes.inputField}
          style={{ width: '33%' }}
        />
      </Box>
      {action.isAttack && (
        <>
          <Box display="flex" flexDirection="row" width="100%">
            <FormControl className={classes.inputField} style={{ width: '33%' }}>
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
            <TextField
              name="reach"
              label="Reach"
              aria-label="React"
              value={action.reach}
              onChange={handleChange}
              className={classes.inputField}
              style={{ width: '33%' }}
            />
            <TextField
              name="toHit"
              label="To Hit"
              aria-label="To Hit"
              value={action.toHit}
              onChange={handleChange}
              className={classes.inputField}
              style={{ width: '33%' }}
            />
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
      <Box display="flex" flexDirection="row" width="100%">
        <TextField
          className={classes.inputField}
          style={{ width: '85%' }}
          label="Description"
          aria-label="Action Description"
          name="description"
          value={action.description}
          onChange={handleChange}
        />
        <Box
          width="15%"
          justifyContent="flex-end"
          display="flex"
          alignItems="center"
        >
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

AddMonsterAction.propTypes = {
  addMonsterAction: PropTypes.func.isRequired,
  editAction: PropTypes.instanceOf(MonsterAction),
  classes: PropTypes.any,
};

export default withStyles(useStyles, { withTheme: true })(AddMonsterAction);
