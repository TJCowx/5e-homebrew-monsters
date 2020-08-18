import React from 'react';
import PropTypes, { InferProps } from 'prop-types';
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

export default function MonsterAbilityListItem({
  ability,
}: InferProps<typeof MonsterAbilityListItem.propTypes>) {
  return (
    <>
      <ListItem>
        <ListItemText
          primary={ability.name}
          secondary={ability.description}
        ></ListItemText>
        <ListItemSecondaryAction>
          <IconButton aria-label="edit ability">
            <EditIcon />
          </IconButton>
          <IconButton aria-label="delete ability">
            <DeleteIcon style={{ color: '#ff0000' }} />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <Divider />
    </>
  );
}

MonsterAbilityListItem.propTypes = {
  ability: PropTypes.instanceOf(MonsterAbility).isRequired,
};
