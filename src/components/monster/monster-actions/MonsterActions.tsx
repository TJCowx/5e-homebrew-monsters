/**
 * MonsterActions.tsx
 * Handles the management and display of the monster actions
 */
import React from 'react';
import AddMonsterAction from './AddMonsterAction';
import MonsterActionsList from './MonsterActionsList';

export default function MonsterActions() {
  return (
    <div>
      <h1>Actions</h1>
      <AddMonsterAction />
      <MonsterActionsList />
    </div>
  );
}
