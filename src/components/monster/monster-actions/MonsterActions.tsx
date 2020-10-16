/**
 * MonsterActions.tsx
 * Handles the management and display of the monster actions
 */
import React, { useState } from 'react';
import AddMonsterAction from './AddMonsterAction';
import MonsterActionsList from './MonsterActionsList';
import MonsterAction from '../../../models/MonsterAction';

type Props = {
  actions: Array<MonsterAction>;
  legenActions: Array<MonsterAction>;
  reactions: Array<MonsterAction>;
  lairActions: Array<MonsterAction>;
  addMonsterAction: () => unknown;
  removeAction: () => unknown;
}
function MonsterActions({
  actions,
  legenActions,
  reactions,
  lairActions,
  addMonsterAction,
  removeAction,
}: Props) {
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

export default MonsterActions;
