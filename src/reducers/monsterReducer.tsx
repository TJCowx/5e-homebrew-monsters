import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 } from 'uuid';
import MonsterAbility from '../models/MonsterAbility';
import MonsterAction from '../models/MonsterAction';
import { exampleMonster, MonsterType, newMonster } from '../models/MonsterDefinition';

const initialState: MonsterType = newMonster();

export default createSlice({
  initialState,
  name: 'monster',
  reducers: {
    /** Resets the monster to the initial state */
    reset: () => initialState,
    loadExample: () => exampleMonster(),
    /** Adds the action to the state of normal actions */
    addAbility(state, action: PayloadAction<MonsterAbility>) {
      const {name, description} = action.payload;
      state.abilities.push({
        id: v4(),
        name: name,
        description: description
      });
      return;
    },
    /** Updates the passed in ability */
    updateAbility(state, action: PayloadAction<MonsterAbility>) {
      const updateIndex: number = state.abilities.findIndex(
        (ability: MonsterAbility) => ability.id === action.payload.id);

      state.abilities[updateIndex] = action.payload;
    },
    /** Adds the action to the state of normal actions */
    addAction(state, payload: PayloadAction<MonsterAction>) {
      // state.monster.actions.push(payload.payload);
      return;
    },
    /** Adds the action to the state of legendary actions */
    addLegenAction(state, payload: PayloadAction<MonsterAction>) {
      // state.monster.legenActions.push(payload.payload);
      return;
    },
    /** Add the action to the state of reactions */
    addReaction(state, payload: PayloadAction<MonsterAction>) {
      // state.monster.reactions.push(payload.payload);
      return;
    },
    /** Adds the action to the state of lair actions */
    addLairAction(state, payload: PayloadAction<MonsterAction>) {
      // state.monster.lairActions.push(payload.payload);
      return;
    },
  }
});