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
    setMonsterFromObject(state, action: PayloadAction<MonsterType>) {
      state = action.payload;
    },
    updateProperty(state, action: PayloadAction<{property: string, value: string | boolean}>) {
      state[action.payload.property] = action.payload.value;
    },
    addToCollection(state, action: PayloadAction<{property: string, value: string}>) {
      state[action.payload.property].push(action.payload.value);
    },
    removeFromCollection(state, action: PayloadAction<{property: string, value: string}>) {
      const {property, value} = action.payload;
      state[property] = state[property].filter((item: string) => item !== value);
    },
    /** 
     * Adds the action to the state of normal actions
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
     * @param action the payload of the id of the ability to remove
     */
    removeAbility(state, action: PayloadAction<string>) {
      state.abilities = state.abilities.filter(
        (ability: MonsterAbility) => ability.id !== action.payload);
      
      return;
    },
    /** 
     * Adds the action to the state of normal actions 
     * @param action the payload of the monster action we're adding
     */
    addAction(state, action: PayloadAction<MonsterAction>) {
      // state.monster.actions.push(payload.payload);
      state.actions.push({
        ...action.payload,
        id: v4(),
      })
      return;
    },
    /**
     * Updates an action using the incoming action
     * @param action the payload of the action we're updating
     */
    updateAction(state, action: PayloadAction<MonsterAction>) {
      const updateIndex: number = state.actions.findIndex(
        (monsterAction: MonsterAction) => monsterAction.id === action.payload.id);

      state.actions[updateIndex] = action.payload;

      return;
    },
    /**
     * Removes the action from the list of actions 
     * @param action the id string of the action to remove
     */
    removeAction(state, action: PayloadAction<string>) {
      state.actions = state.actions.filter(
        (monsterAction: MonsterAction) => monsterAction.id !== action.payload);
      
      return;
    },
  }
});