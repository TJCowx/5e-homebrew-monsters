/**
 * MonsterActionsList.tsx
 * Lists all the monster actions
 */
import React from 'react';
import { createStyles, List, makeStyles } from '@material-ui/core';
import MonsterAction from '../../../models/MonsterAction';
import MonsterActionListItem from './MonsterActionListItem';
import { AppState } from '../../../store/store';
import { actionsSelector } from '../../../selectors/monsterSelector';
import { connect } from 'react-redux';

const useStyles = makeStyles(() => createStyles({
  list: {
    width: '100%',
  },
}));

type Props = {
  actions: Array<MonsterAction>;
  removeAction: (id: string) => unknown;
  editAction: (action: MonsterAction, actionType: string) => unknown;
}

const mapState = (state: AppState) => ({
  actions: actionsSelector(state),
});

const MonsterActionsList = connect(mapState)(({
  actions,
  removeAction,
  editAction,
}: Props) => {
  const classes = useStyles();

  return (
    <>
      <List className={classes.list}>
        {actions.map((action: MonsterAction) => (
          <MonsterActionListItem
            key={action.id}
            action={action}
            removeAction={removeAction.bind(this, action, 'Action')}
            editAction={editAction.bind(this, action, 'Action')}
          />
        ))}
      </List>
    </>
  );
});

export default MonsterActionsList;
