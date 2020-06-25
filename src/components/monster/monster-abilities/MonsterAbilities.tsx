/**
 * MonsterAbilities.tsx
 * Handles the grouping and displaying of monster abilities
 */
import React from 'react';
import AddMonsterAbility from './AddMonsterAbility';
import MonsterAbilitiesList from './MonsterAbilitiesList';

export default function MonsterAbilities() {
  return (
    <div>
      <AddMonsterAbility />
      <MonsterAbilitiesList />
    </div>
  );
}
