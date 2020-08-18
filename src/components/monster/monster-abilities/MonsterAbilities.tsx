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
  handleChange,
  classes,
}: InferProps<typeof MonsterAbilities.propTypes>) {
  return (
    <div style={{ width: '100%' }}>
      <AddMonsterAbility />
      <MonsterAbilitiesList monsterAbilities={monsterAbilities} />
    </div>
  );
}

MonsterAbilities.propTypes = {
  monsterAbilities: PropTypes.arrayOf(PropTypes.instanceOf(MonsterAbility))
    .isRequired,
  handleChange: PropTypes.func,
  classes: PropTypes.object,
};

export default MonsterAbilities;
