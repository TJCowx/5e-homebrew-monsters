/**
 * MonsterAbilities.tsx
 * Handles the grouping and displaying of monster abilities
 */
import React, { useState } from 'react';
import AddMonsterAbility from './AddMonsterAbility';
import MonsterAbilitiesList from './MonsterAbilitiesList';
import MonsterAbility from '../../../models/MonsterAbility';
import PropTypes, { InferProps } from 'prop-types';

function MonsterAbilities({
  monsterAbilities,
  addMonsterAbility,
  removeAbility,
}: InferProps<typeof MonsterAbilities.propTypes>) {
  const [edittingAbility, setEdittingAbility] = useState(null);

  /**
   * Sets the ability we are editting so the child
   * add monster ability gets the state that it is editting
   * an existing one
   * @param ability the ability we are editting
   */
  const editAbility = (ability: MonsterAbility) => {
    setEdittingAbility(ability);
  };

  return (
    <div style={{ width: '100%' }}>
      <AddMonsterAbility
        addMonsterAbility={addMonsterAbility}
        editAbility={edittingAbility}
      />
      <MonsterAbilitiesList
        monsterAbilities={monsterAbilities}
        removeAbility={removeAbility}
        editAbility={editAbility}
      />
    </div>
  );
}

MonsterAbilities.propTypes = {
  monsterAbilities: PropTypes.arrayOf(PropTypes.instanceOf(MonsterAbility))
    .isRequired,
  addMonsterAbility: PropTypes.func.isRequired,
  removeAbility: PropTypes.func.isRequired,
};

export default MonsterAbilities;
