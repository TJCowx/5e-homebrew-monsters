/**
 * Returns a map of stat types and their shorthands.
 * Key: shorthand EG: str
 * Value: full name, EG: Strength
 */
export const getStats = (): { [index: string]: any } => {
  return {
    str: 'Strength',
    dex: 'Dexterity',
    con: 'Constitution',
    int: 'Intelligence',
    wis: 'Wisdom',
    chr: 'Charisma',
  };
};

/**
 * Returns a map of proficiencies and their shorthand
 * Key: shorthand EG: ath
 * Value: full name EG: Athletics
 */
export const getProficiencies = (): { [index: string]: any } => {
  return {
    ath: 'Athletics',
    acr: 'Acrobatics',
    soh: 'Sleight of Hand',
    sth: 'Stealth',
    arc: 'Arcana',
    hst: 'History',
    inv: 'Investigation',
    nat: 'Nature',
    rel: 'Religion',
    anh: 'Animal Handling',
    ins: 'Insight',
    med: 'Medicine',
    per: 'Perception',
    svl: 'Survival',
    dec: 'Deception',
    imd: 'Intimidation',
    pfm: 'Performance',
    psn: 'Persuasion',
  };
};
