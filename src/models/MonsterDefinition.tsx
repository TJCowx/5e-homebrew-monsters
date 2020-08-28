import MonsterAbility from './MonsterAbility';
import MonsterAction from './MonsterAction';

/**
 * A definition for the monster object
 *
 * Unfortunately a few of these fields which should be number can't
 * due to the material UI's number input fields not working how I would
 * like, so I made a work around making it so only numbers can be put
 * in normal textfields which forces the types to have to be strings
 */
export default class MonsterDefinition {
  name: string = '';
  size: string = '';
  alignment: string = '';
  armourClass: string = '';
  hitPoints: string = '';
  hitDie: string = '';
  speed: string = '';
  str: string = '';
  dex: string = '';
  con: string = '';
  int: string = '';
  wis: string = '';
  chr: string = '';
  profBonus: string = '';
  challengeRating: string = '';
  rewardXP: string = '';
  proficiencies: Array<string> = new Array<string>();
  savingThrows: Array<string> = new Array<string>();
  immunities: Array<string> = new Array<string>();
  resistances: Array<string> = new Array<string>();
  weaknesses: Array<string> = new Array<string>();
  senses: Array<string> = new Array<string>();
  languages: Array<string> = new Array<string>();
  abilities: Array<MonsterAbility> = new Array<MonsterAbility>();
  actions: Array<MonsterAction> = new Array<MonsterAction>();

  constructor(init?: Partial<MonsterDefinition>) {
    Object.assign(this, init);
  }
}
