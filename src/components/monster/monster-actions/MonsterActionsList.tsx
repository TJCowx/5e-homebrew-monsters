/**
 * MonsterActionsList.tsx
 * Lists all the monster actions
 */
import React from 'react';
import { createStyles, List, makeStyles } from '@material-ui/core';
import MonsterAction from '../../../models/MonsterAction';
import MonsterActionListItem from './MonsterActionListItem';

const useStyles = makeStyles(() => createStyles({
  list: {
    width: '100%',
  },
}));

type Props = {
  actions: Array<MonsterAction>;
  reactions: Array<MonsterAction>;
  legenActions: Array<MonsterAction>;
  lairActions: Array<MonsterAction>;
  removeAction: (id: string, actionType: string) => unknown;
  editAction: (action: MonsterAction, actionType: string) => unknown;
}

function MonsterActionsList({
  actions,
  reactions,
  legenActions,
  lairActions,
  removeAction,
  editAction,
}: Props) {
  const classes = useStyles();

  return (
    <>
      <List className={classes.list}>
        {actions.map((action: MonsterAction) => (
          <MonsterActionListItem
            key={action.id}
            action={action}
            actionType={'Action'}
            removeAction={removeAction.bind(this, action, 'Action')}
            editAction={editAction.bind(this, action, 'Action')}
          />
        ))}
        {reactions.map((action: MonsterAction) => (
          <MonsterActionListItem
            key={action.id}
            action={action}
            actionType={'Reaction'}
            removeAction={removeAction.bind(this, action, 'Reaction')}
            editAction={editAction.bind(this, action, 'Reaction')}
          />
        ))}
        {legenActions.map((action: MonsterAction) => (
          <MonsterActionListItem
            key={action.id}
            action={action}
            actionType={'Legendary Action'}
            removeAction={removeAction.bind(this, action, 'Legendary')}
            editAction={editAction.bind(this, action, 'Legendary')}
          />
        ))}
        {lairActions.map((action: MonsterAction) => (
          <MonsterActionListItem
            key={action.id}
            action={action}
            actionType={'Lair Action'}
            removeAction={removeAction.bind(this, action, 'Lair')}
            editAction={editAction.bind(this, action, 'Lair')}
          />
        ))}
      </List>
    </>
  );
}

export default MonsterActionsList;
