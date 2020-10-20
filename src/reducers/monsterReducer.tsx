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
    /** 
     * Adds the action to the state of normal actions
     * @param state the state of the monster
     * @param action the payload of the monster ability to add
     */
    addAbility(state, action: PayloadAction<MonsterAbility>) {
      const {name, description} = action.payload;
      state.abilities.push({
        id: v4(),
        name: name,
        description: description
      });
      return;
    },
    /** 
     * Updates the passed in ability
     * @param state the state of the monster
     * @param action the payload of the monster ability to update
     */
    updateAbility(state, action: PayloadAction<MonsterAbility>) {
      const updateIndex: number = state.abilities.findIndex(
        (ability: MonsterAbility) => ability.id === action.payload.id);

      state.abilities[updateIndex] = action.payload;

      return;
    },
    /**
     * Removes the ability using the passed in id
     * @param state the state of the monster
     * @param action the payload of the id of the ability to remove
     */
    removeAbility(state, action: PayloadAction<string>) {
      state.abilities = state.abilities.filter(
        (ability: MonsterAbility) => ability.id !== action.payload);
      
      return;
    },
    /** Adds the action to the state of normal actions */
    addAction(state, action: PayloadAction<MonsterAction>) {
      // state.monster.actions.push(payload.payload);
      state.actions.push({
        ...action.payload,
        id: v4(),
      })
      return;
    },
    /** Updates an action using the incoming action */
    updateAction(state, action: PayloadAction<MonsterAction>) {
      const updateIndex: number = state.actions.findIndex(
        (monsterAction: MonsterAction) => monsterAction.id === action.payload.id);

      state.actions[updateIndex] = action.payload;

      return;
    },
    /** Removes the action from the list of actions */
    removeAction(state, action: PayloadAction<string>) {
      state.actions = state.actions.filter(
        (monsterAction: MonsterAction) => monsterAction.id !== action.payload);
      
      return;
    },
  }
});