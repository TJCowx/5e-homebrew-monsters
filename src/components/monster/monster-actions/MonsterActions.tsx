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
  monsterActions,
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
  const editAction = (action: MonsterAction) => {
    setEdittingAction(action);
  };

  return (
    <div style={{ width: '100%' }}>
      <AddMonsterAction
        addMonsterAction={addMonsterAction}
        editAction={edittingAction}
      />
      <MonsterActionsList
        monsterActions={monsterActions}
        removeAction={removeAction}
        editAction={editAction}
      />
    </div>
  );
}

MonsterActions.propTypes = {
  monsterActions: PropTypes.arrayOf(PropTypes.instanceOf(MonsterAction)).isRequired,
  addMonsterAction: PropTypes.func.isRequired,
  removeAction: PropTypes.func.isRequired,
};

export default MonsterActions;
