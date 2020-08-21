/**
 * MonsterAbilities.tsx
 * Handles the grouping and displaying of monster abilities
 */
import React from 'react';
import AddMonsterAbility from './AddMonsterAbility';
import MonsterAbilitiesList from './MonsterAbilitiesList';
import MonsterAbility from '../../../models/MonsterAbility';
import PropTypes, { InferProps } from 'prop-types';

function MonsterAbilities({
  monsterAbilities,
  addMonsterAbility,
  handleChange,
  classes,
}: InferProps<typeof MonsterAbilities.propTypes>) {
  return (
    <div style={{ width: '100%' }}>
      <AddMonsterAbility addMonsterAbility={addMonsterAbility} />
      <MonsterAbilitiesList monsterAbilities={monsterAbilities} />
    </div>
  );
}

MonsterAbilities.propTypes = {
  monsterAbilities: PropTypes.arrayOf(PropTypes.instanceOf(MonsterAbility))
    .isRequired,
  addMonsterAbility: PropTypes.func,
  handleChange: PropTypes.func,
  classes: PropTypes.object,
};

export default MonsterAbilities;
