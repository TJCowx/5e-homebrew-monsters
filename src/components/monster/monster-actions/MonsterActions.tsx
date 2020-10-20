/**
 * MonsterActions.tsx
 * Handles the management and display of the monster actions
 */
import React, { useState } from 'react';
import AddMonsterAction from './AddMonsterAction';
import MonsterActionsList from './MonsterActionsList';
import MonsterAction from '../../../models/MonsterAction';
import { Dispatch } from 'redux';
import monster from '../../../reducers/monsterReducer';
import { connect } from 'react-redux';


type Props = {
  addAction: (action: MonsterAction) => unknown;
  updateAction: (action: MonsterAction) => unknown;
  removeAction: (id: string) => unknown;
}

const mapDispatch = (dispatch: Dispatch) => ({
  addAction: (action: MonsterAction) => dispatch(monster.actions.addAction(action)),
  updateAction: (action: MonsterAction) => dispatch(monster.actions.updateAction(action)),
  removeAction: (id: string) => dispatch(monster.actions.removeAction(id)),
})

const MonsterActions = connect(null, mapDispatch)(({
  addAction,
  updateAction,
  removeAction,
}: Props) => {
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
        addMonsterAction={addAction}
        updateMonsterAction={updateAction}
        editAction={edittingAction}
      />
      <MonsterActionsList
        removeAction={removeAction}
        editAction={editAction}
      />
    </div>
  );
});

export default MonsterActions;
