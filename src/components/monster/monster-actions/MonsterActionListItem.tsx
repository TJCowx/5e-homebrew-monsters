import React, { useState, useEffect } from 'react';
import {
  ListItem,
  ListItemText,
  Divider,
  ListItemSecondaryAction,
  IconButton,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import MonsterAction from '../../../models/MonsterAction';
import PropTypes, { InferProps } from 'prop-types';

function MonsterActionListItem({
  action,
  removeAction,
  editAction,
}: InferProps<typeof MonsterActionListItem.propTypes>) {
  const [actionSummary, setActionSummary] = useState('');

  useEffect(() => {
    let summary: string = `${action.actionType} -`;
    if (action.attackType != null) {
      summary += ` ${action.attackType} Attack: ${action.toHit} to hit, reach ${action.reach}`;
      summary += `, Hit: ${action.damage} ${action.damageType} damage`;
    }

    summary += ` ${action.description}`;

    setActionSummary(summary);
  }, [action]);

  return (
    <>
      <ListItem>
        <ListItemText primary={action.name} secondary={actionSummary}></ListItemText>
        <ListItemSecondaryAction>
          <IconButton aria-label="edit ability" onClick={editAction}>
            <EditIcon />
          </IconButton>
          <IconButton
            aria-label="delete ability"
            onClick={removeAction.bind(this, action.id)}
          >
            <DeleteIcon style={{ color: '#ff0000' }} />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <Divider />
    </>
  );
}

MonsterActionListItem.propTypes = {
  action: PropTypes.instanceOf(MonsterAction).isRequired,
  removeAction: PropTypes.func.isRequired,
  editAction: PropTypes.func.isRequired,
};

export default MonsterActionListItem;
