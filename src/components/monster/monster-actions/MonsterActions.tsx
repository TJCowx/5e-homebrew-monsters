/**
 * MonsterActions.tsx
 * Handles the management and display of the monster actions
 */
import React from 'react';
import AddMonsterAction from './AddMonsterAction';
import MonsterActionsList from './MonsterActionsList';
import MonsterAction from '../../../models/MonsterAction';
import PropTypes, { InferProps } from 'prop-types';

function MonsterActions({
  monsterActions,
  handleChange,
  classes,
}: InferProps<typeof MonsterActions.propTypes>) {
  return (
    <div style={{ width: '100%' }}>
      <AddMonsterAction />
      <MonsterActionsList monsterActions={monsterActions} />
    </div>
  );
}

MonsterActions.propTypes = {
  monsterActions: PropTypes.arrayOf(PropTypes.instanceOf(MonsterAction)).isRequired,
  handleChange: PropTypes.func,
  classes: PropTypes.object,
};

export default MonsterActions;
