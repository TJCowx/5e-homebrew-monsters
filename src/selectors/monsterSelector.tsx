import MonsterAction from "../models/MonsterAction";
import { AppState } from "../store/store";

export const monsterSelector = (state: AppState) => state;

// export const profsSelectorSelector = (state: AppState) => state.monster.proficiencies;
// export const savingThrowsSelector = (state: AppState) => state.monster.savingThrows;
// export const immunitiesSelector = (state: AppState) => state.monster.immunities;
// export const condImmunitiesSelector = (state: AppState) => state.monster.condImmunities;
// export const resistancesSelector = (state: AppState) => state.monster.resistances;
// export const weaknessesSelector = (state: AppState) => state.monster.weaknesses;
// export const languagesSelector = (state: AppState) => state.monster.languages;

export const abilitiesSelector = (state: AppState) => state.abilities;

// // Select all the actions
export const actionsSelector = (state: AppState) => state.actions;
export const normActionsSelector = (state: AppState) => state.actions.filter((action: MonsterAction) => action.actionType === 'Action');
export const legenActionsSelector = (state: AppState) => state.actions.filter((action: MonsterAction) => action.actionType === 'Legendary')
export const reactionsSelector = (state: AppState) => state.actions.filter((action: MonsterAction) => action.actionType === 'Reaction')
export const lairActionsSelector = (state: AppState) => state.actions.filter((action: MonsterAction) => action.actionType === 'Lair')