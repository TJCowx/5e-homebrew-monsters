import { getModifier } from './getModifier';

/**
 *
 * @param savingThrow The saving throw value
 * @param profBonus The proficiency bonus
 */
export const getSavingThrowModifier = (savingThrow: string, profBonus: string) => {
  return `${getModifier(savingThrow) + Number(profBonus)}`;
};
