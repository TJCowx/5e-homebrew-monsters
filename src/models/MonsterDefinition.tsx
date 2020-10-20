import { v4 } from 'uuid';
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
export type MonsterType = {
  name: string;
  size: string;
  type: string;
  alignment: string;
  armourClass: string;
  hitPoints: string;
  hitDie: string;
  landSpeed: string;
  flySpeed: string;
  burrowSpeed: string;
  climbSpeed: string;
  hoverSpeed: string;
  str: string;
  dex: string;
  con: string;
  int: string;
  wis: string;
  chr: string;
  blindsight: string;
  darkvision: string;
  tremorsense: string;
  truesight: string;
  profBonus: string;
  challengeRating: string;
  rewardXP: string;
  proficiencies: Array<string>;
  savingThrows: Array<string>;
  immunities: Array<string>;
  condImmunities: Array<string>;
  resistances: Array<string>;
  weaknesses: Array<string>;
  languages: Array<string>;
  abilities: Array<MonsterAbility>;
  actions: Array<MonsterAction>;
}

/** Creates an empty monster */
export const newMonster = (): MonsterType => ({
  name: '',
  size: '',
  type: '',
  alignment: '',
  armourClass: '',
  hitPoints: '',
  hitDie: '',
  landSpeed: '',
  flySpeed: '',
  burrowSpeed: '',
  climbSpeed: '',
  hoverSpeed: '',
  str: '0',
  dex: '0',
  con: '0',
  int: '0',
  wis: '0',
  chr: '0',
  blindsight: '',
  darkvision: '',
  tremorsense: '',
  truesight: '',
  profBonus: '0',
  challengeRating: '',
  rewardXP: '',
  proficiencies: new Array<string>(),
  savingThrows: new Array<string>(),
  immunities: new Array<string>(),
  condImmunities: new Array<string>(),
  resistances: new Array<string>(),
  weaknesses: new Array<string>(),
  languages: new Array<string>(),
  abilities: new Array<MonsterAbility>(),
  actions: new Array<MonsterAction>(),
});

/**
 * Generates an example monster based off the 5e lich which can be located
 * https://roll20.net/compendium/dnd5e/Lich
 */
export const exampleMonster = (): MonsterType => ({
  name: 'Lich',
  size: 'Medium',
  type: 'Undead',
  alignment: 'Neutral Evil',
  armourClass: '17',
  hitPoints: '135',
  hitDie: '18d8+54',
  landSpeed: '30',
  flySpeed: '',
  burrowSpeed: '',
  climbSpeed: '',
  hoverSpeed: '',
  str: '11',
  dex: '16',
  con: '16',
  int: '20',
  wis: '14',
  chr: '16',
  blindsight: '',
  darkvision: '',
  tremorsense: '',
  truesight: '120',
  profBonus: '7',
  challengeRating: '21',
  rewardXP: '33000',
  proficiencies: ['arc', 'hst', 'ins', 'per'],
  savingThrows: ['con', 'int', 'wis'],
  immunities:  ['Poison', 'Bludgeoning', 'Piercing', 'Slashing'],
  condImmunities:  [
    'Charmed',
    'Exhaustion',
    'Frightenened',
    'Paralyzed',
    'Poisoned',
  ],
  resistances: ['Cold', 'Lightning', 'Necrotic'],
  weaknesses: new Array<string>(),
  languages: ['Common', 'Elvish', 'Celestial', 'Sylvan', 'Primordial'],
  abilities: [
    {
      id: v4(),
      name: 'Legendary Resistance (3/Day)',
      description:
        'If the lich fails a saving throw, it can choose to succeed instead.',
    },
    {
      id: v4(),
      name: 'Rejuvenation',
      description:
        'If it has a phylactery, a destroyed lich gains a new body in 1d10 ' +
        'days, regaining all its hit points and becoming active again. The ' +
        'new body appears within 5 feet of the phylactery.',
    },
    {
      id: v4(),
      name: 'Spellcasting',
      description:
        'The lich is an 18th-level spellcaster. Its spellcasting ability is ' +
        'Intelligence (spell save DC 20, +12 to hit with spell attacks). ' +
        'The lich has the following wizard spells prepared: \n' +
        'Cantrips (at will): mage hand, prestidigitation, ray of frost \n' +
        ' 1st level (4 slots): detect magic, magic missile, shield, thunderwave \n' +
        ' 2nd level (3 slots): detect thoughts, invisibility, acid arrow, mirror image \n' +
        ' 3rd level (3 slots): animate dead, counterspell, dispel magic, fireball \n' +
        ' 4th level (3 slots): blight, dimension door \n' +
        ' 5th level (3 slots): cloudkill, scrying \n' +
        ' 6th level (1 slot): disintegrate, globe of invulnerability \n' +
        ' 7th level (1 slot): finger of death, plane shift \n' +
        ' 8th level (1 slot): dominate monster, power word stun \n' +
        ' 9th level (1 slot): power word kill',
    },
    {
      id: v4(),
      name: 'Turn Resistance',
      description:
        'The lich has advantage on saving throws against any effect that turns undead.',
    },
  ],
  actions: [],
  // actions: [
  //   new MonsterAction({
  //     id: v4(),
  //     name: 'Paralyzing Touch',
  //     isAttack: true,
  //     attackType: 'Melee Spell Attack',
  //     toHit: '12',
  //     reach: '5',
  //     damage: '3d6',
  //     damageType: 'Cold',
  //     description:
  //       'The target must succeed on a DC 18 Constitution saving ' +
  //       'throw or be paralyzed for 1 minute. The target can repeat the ' +
  //       'saving throw at the end of each of its turns, ending the effect on ' +
  //       'itself on a success',
  //   }),
  // ],
  // legenActions: [
  //   new MonsterAction({
  //     id: v4(),
  //     name: 'Cantrip',
  //     isAttack: false,
  //     description: 'The lich castrs a cantrip',
  //   }),
  //   new MonsterAction({
  //     id: v4(),
  //     name: 'Paralyzing Touch (Costs 2 Actions)',
  //     isAttack: false,
  //     description: 'The lich uses its Paralyzing Touch.',
  //   }),
  //   new MonsterAction({
  //     id: v4(),
  //     name: 'Frightening Gaze (Costs 2 Actions)',
  //     isAttack: false,
  //     description:
  //       'The lich fixes its gaze on one creature it can see ' +
  //       'within 10 feet of it. The target must succeed on a DC 18 Wisdom ' +
  //       'saving throw against this magic or become frightened for 1 minute. ' +
  //       'The frightened target can repeat the saving throw at the end of ' +
  //       'each of its turns, ending the effect on itself on a success. ' +
  //       "If a target's saving throw is successful or the effect ends for " +
  //       "it, the target is immune to the lich's gaze for the next 24 hours.",
  //   }),
  //   new MonsterAction({
  //     id: v4(),
  //     name: 'Disrupt Life (Costs 3 Actions)',
  //     isAttack: false,
  //     description:
  //       'Each non-undead creature within 20 feet of the lich ' +
  //       'must make a DC 18 Constitution saving throw against this magic, ' +
  //       'taking 21 (6d6) necrotic damage on a failed save, or half as much ' +
  //       'damage on a successful one.',
  //   }),
  // ],
})

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
    // if (init != null) {
    //   if (init.abilities != null && init.abilities.length > 0) {
    //     for (let i: number = 0; i < init.abilities.length; i++) {
    //       // init.abilities[i] = new MonsterAbility(init.abilities[i]);
    //     }
    //   }

    //   if (init.actions != null && init.actions.length > 0) {
    //     for (let i: number = 0; i < init.actions.length; i++) {
    //       // init.actions[i] = new MonsterAction(init.actions[i]);
    //     }
    //   }

    //   if (init.reactions != null && init.reactions.length > 0) {
    //     for (let i: number = 0; i < init.reactions.length; i++) {
    //       init.reactions[i] = new MonsterAction(init.reactions[i]);
    //     }
    //   }

    //   if (init.legenActions != null && init.legenActions.length > 0) {
    //     for (let i: number = 0; i < init.legenActions.length; i++) {
    //       init.legenActions[i] = new MonsterAction(init.legenActions[i]);
    //     }
    //   }

    //   if (init.lairActions != null && init.lairActions.length > 0) {
    //     for (let i: number = 0; i < init.lairActions.length; i++) {
    //       init.lairActions[i] = new MonsterAction(init.lairActions[i]);
    //     }
    //   }
    // }

    // Object.assign(this, init);
  }
}
