import { getModifier } from './getModifier';

/**
 * Taks the proficiency type and calculates the modifier for it.
 * @param profType The proficiency stype that is is (shorthand)
 * @param monster The monster object to get the stats from
 */
export const getProfModifier = (profType: string, monster: any) => {
  let statType: string;

  switch (profType) {
    case 'ath':
      statType = 'str';
      break;
    case 'acr':
    case 'soh':
    case 'stealth':
      statType = 'dex';
      break;
    case 'anh':
    case 'ins':
    case 'med':
    case 'per':
    case 'svl':
      statType = 'wis';
      break;
    case 'arc':
    case 'hst':
    case 'nat':
    case 'inv':
    case 'rel':
      statType = 'int';
      break;
    case 'dec':
    case 'imd':
    case 'pfm':
    case 'psn':
      statType = 'cha';
      break;
    default:
      statType = null;
  }

  // if we have no stat type might as well just return a 0 as a fall back
  if (statType == null) {
    console.error(`${profType} did not have it's modifier configured`);
    return 0;
  }

  return Number(monster.profBonus) + getModifier(monster[statType]);
};
