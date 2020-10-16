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

type Props = {
  action: MonsterAction;
  actionType: string;
  removeAction: () => unknown;
  editAction: () => unknown;
}

function MonsterActionListItem({
  action,
  actionType,
  removeAction,
  editAction,
}: Props) {
  const [actionSummary, setActionSummary] = useState('');

  useEffect(() => {
    let summary: string = `${actionType} -`;
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
        <ListItemText
          primary={action.name}
          secondary={actionSummary}
          style={{ paddingRight: '96px' }}
        ></ListItemText>
        <ListItemSecondaryAction>
          <IconButton
            aria-label="edit ability"
            onClick={editAction.bind(this, action)}
          >
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

export default MonsterActionListItem;
