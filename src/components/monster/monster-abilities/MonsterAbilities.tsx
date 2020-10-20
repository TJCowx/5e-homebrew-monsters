/**
 * MonsterAbilities.tsx
 * Handles the grouping and displaying of monster abilities
 */
import React, { useState } from 'react';
import AddMonsterAbility from './AddMonsterAbility';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import MonsterAbilitiesList from './MonsterAbilitiesList';
import MonsterAbility from '../../../models/MonsterAbility';
import { abilitiesSelector } from '../../../selectors/monsterSelector';
import { AppState } from '../../../store/store';
import monster from '../../../reducers/monsterReducer';

type Props = {
  abilities: Array<MonsterAbility>;
  addAbility: (ability: MonsterAbility) => unknown;
  updateAbility: (ability: MonsterAbility) => unknown;
  removeAbility: (id: string) => unknown;
}

/** Setup the abilities state */
const mapState = (state: AppState) => ({
  abilities: abilitiesSelector(state),
});

const mapDispatch = (dispatch: Dispatch) => ({
  addAbility: (ability: MonsterAbility) => dispatch(monster.actions.addAbility(ability)),
  updateAbility: (ability: MonsterAbility) => dispatch(monster.actions.updateAbility(ability)),
  removeAbility: (id: string) => dispatch(monster.actions.removeAbility(id)),
});

const MonsterAbilities = connect(mapState, mapDispatch)(({
  abilities,
  addAbility,
  updateAbility,
  removeAbility,
}: Props) => {
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
        addMonsterAbility={addAbility}
        updateMonsterAbility={updateAbility}
        editAbility={edittingAbility}
      />
      <MonsterAbilitiesList
        monsterAbilities={abilities}
        removeAbility={removeAbility}
        editAbility={editAbility}
      />
    </div>
  );
})

export default MonsterAbilities;
