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
  [key: string]: any;
  name: string = '';
  size: string = '';
  type: string = '';
  alignment: string = '';
  armourClass: string = '';
  hitPoints: string = '';
  hitDie: string = '';
  landSpeed: string = '';
  flySpeed: string = '';
  burrowSpeed: string = '';
  climbSpeed: string = '';
  hoverSpeed: string = '';
  str: string = '0';
  dex: string = '0';
  con: string = '0';
  int: string = '0';
  wis: string = '0';
  chr: string = '0';
  blindsight: string = '';
  darkvision: string = '';
  tremorsense: string = '';
  truesight: string = '';
  profBonus: string = '0';
  challengeRating: string = '';
  rewardXP: string = '';
  proficiencies: Array<string> = new Array<string>();
  savingThrows: Array<string> = new Array<string>();
  immunities: Array<string> = new Array<string>();
  condImmunities: Array<string> = new Array<string>();
  resistances: Array<string> = new Array<string>();
  weaknesses: Array<string> = new Array<string>();
  languages: Array<string> = new Array<string>();
  abilities: Array<MonsterAbility> = new Array<MonsterAbility>();
  actions: Array<MonsterAction> = new Array<MonsterAction>();
  legenActions: Array<MonsterAction> = new Array<MonsterAction>();
  reactions: Array<MonsterAction> = new Array<MonsterAction>();
  lairActions: Array<MonsterAction> = new Array<MonsterAction>();

  constructor(init?: Partial<MonsterDefinition>) {
    // If the declaration isn't null, loop through the abilities and
    // the actions making sure they are clean.
    if (init != null) {
      if (init.abilities != null && init.abilities.length > 0) {
        for (let i: number = 0; i < init.abilities.length; i++) {
          init.abilities[i] = new MonsterAbility(init.abilities[i]);
        }
      }

      if (init.actions != null && init.actions.length > 0) {
        for (let i: number = 0; i < init.actions.length; i++) {
          init.actions[i] = new MonsterAction(init.actions[i]);
        }
      }

      if (init.reactions != null && init.reactions.length > 0) {
        for (let i: number = 0; i < init.reactions.length; i++) {
          init.reactions[i] = new MonsterAction(init.reactions[i]);
        }
      }

      if (init.legenActions != null && init.legenActions.length > 0) {
        for (let i: number = 0; i < init.legenActions.length; i++) {
          init.legenActions[i] = new MonsterAction(init.legenActions[i]);
        }
      }

      if (init.lairActions != null && init.lairActions.length > 0) {
        for (let i: number = 0; i < init.lairActions.length; i++) {
          init.lairActions[i] = new MonsterAction(init.lairActions[i]);
        }
      }
    }

    Object.assign(this, init);
  }
}
