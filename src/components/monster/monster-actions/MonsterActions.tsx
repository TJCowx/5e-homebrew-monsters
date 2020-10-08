/**
 * MonsterActions.tsx
 * Handles the management and display of the monster actions
 */
import React, { useState } from 'react';
import AddMonsterAction from './AddMonsterAction';
import MonsterActionsList from './MonsterActionsList';
import MonsterAction from '../../../models/MonsterAction';
import PropTypes, { InferProps } from 'prop-types';

function MonsterActions({
  actions,
  legenActions,
  reactions,
  lairActions,
  addMonsterAction,
  removeAction,
}: InferProps<typeof MonsterActions.propTypes>) {
  const [edittingAction, setEdittingAction] = useState(null);

  /**
   * Sets the action we are editting so the child
   * add monster action gets the state that it is editting
   * an existing one
   * @param action the action we are editting
   */
  const editAction = (action: MonsterAction, actionType: string) => {
    action.actionType = actionType;
    setEdittingAction(action);
  };

  return (
    <div style={{ width: '100%' }}>
      <AddMonsterAction
        addMonsterAction={addMonsterAction}
        editAction={edittingAction}
      />
      <MonsterActionsList
        actions={actions}
        reactions={reactions}
        legenActions={legenActions}
        lairActions={lairActions}
        removeAction={removeAction}
        editAction={editAction}
      />
    </div>
  );
}

MonsterActions.propTypes = {
  actions: PropTypes.arrayOf(PropTypes.instanceOf(MonsterAction)).isRequired,
  reactions: PropTypes.arrayOf(PropTypes.instanceOf(MonsterAction)).isRequired,
  legenActions: PropTypes.arrayOf(PropTypes.instanceOf(MonsterAction)).isRequired,
  lairActions: PropTypes.arrayOf(PropTypes.instanceOf(MonsterAction)).isRequired,
  addMonsterAction: PropTypes.func.isRequired,
  removeAction: PropTypes.func.isRequired,
};

export default MonsterActions;
