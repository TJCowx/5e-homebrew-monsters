import React from 'react';
import {
  ListItem,
  ListItemText,
  Divider,
  ListItemSecondaryAction,
  IconButton,
} from '@material-ui/core';
import MonsterAbility from '../../../models/MonsterAbility';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

type Props = {
  ability: MonsterAbility;
  removeAbility: (id: string) => unknown;
  editAbility: (ability: MonsterAbility) => unknown;
}

export default function MonsterAbilityListItem({
  ability,
  removeAbility,
  editAbility,
}: Props) {
  return (
    <>
      <ListItem>
        <ListItemText
          style={{ paddingRight: '96px' }}
          primary={ability.name}
          secondary={ability.description}
        ></ListItemText>
        <ListItemSecondaryAction>
          <IconButton
            aria-label="edit ability"
            onClick={editAbility.bind(this, ability)}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            aria-label="delete ability"
            onClick={removeAbility.bind(this, ability.id)}
          >
            <DeleteIcon style={{ color: '#ff0000' }} />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <Divider />
    </>
  );
}
