/**
 * MonsterActionsList.tsx
 * Lists all the monster actions
 */
import React from 'react';
import { List, withStyles } from '@material-ui/core';
import PropTypes, { InferProps } from 'prop-types';
import MonsterAction from '../../../models/MonsterAction';
import MonsterActionListItem from './MonsterActionListItem';

const useStyles = () => ({
  list: {
    width: '100%',
  },
});

function MonsterActionsList({
  monsterActions,
  removeAction,
  editAction,
  classes,
}: InferProps<typeof MonsterActionsList.propTypes>) {
  return (
    <>
      <List className={classes.list}>
        {monsterActions.map((action: MonsterAction) => (
          <MonsterActionListItem
            key={action.id}
            action={action}
            removeAction={removeAction}
            editAction={editAction}
          />
        ))}
      </List>
    </>
  );
}

MonsterActionsList.propTypes = {
  monsterActions: PropTypes.array.isRequired,
  removeAction: PropTypes.func.isRequired,
  editAction: PropTypes.func.isRequired,
  classes: PropTypes.any,
};

export default withStyles(useStyles, { withTheme: true })(MonsterActionsList);
