/**
 * AddMonsterAction.tsx
 * Handles adding a singular action for a monster
 * whether it be a regular action, legendary, or lair
 */
import React, { useState } from 'react';
import {
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  FormControlLabel,
} from '@material-ui/core';
import PropTypes, { InferProps } from 'prop-types';
import MonsterAction from '../../../models/MonsterAction';

function AddMonsterAction({
  addMonsterAction,
  editAction,
  classes,
}: InferProps<typeof AddMonsterAction.propTypes>) {
  const [action, setAction] = useState(new MonsterAction({}));

  /** List of action types available in 5e */
  const actionTypes: Array<string> = ['Action', 'Reaction', 'Legendary'];

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

  return (
    <>
      <Box display="flex" flexDirection="row" width="100%">
        <TextField label="Name" aria-label="Action Name" name="name" />
        <FormControl>
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
        />
        <TextField
          label="Description"
          aria-label="Action Description"
          name="description"
        />
      </Box>
    </>
  );
}

AddMonsterAction.propTypes = {
  addMonsterAction: PropTypes.func.isRequired,
  editAction: PropTypes.instanceOf(MonsterAction),
  classes: PropTypes.any,
};

export default AddMonsterAction;
