/**
 * MonsterAbilitiesList.tsx
 * Displays a list of abilities that a monster may have.
 */
import React from 'react';
import MonsterAbility from '../../../models/MonsterAbility';
import MonsterAbilityListItem from './MonsterAbilityListItem';
import { createStyles, List, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => createStyles({
  list: {
    width: '100%',
  },
}));

type Props = {
  monsterAbilities: Array<MonsterAbility>;
  removeAbility: (id: string) => unknown;
  editAbility: (ability: MonsterAbility) => unknown;
}

const MonsterAbilitiesList = (({
  monsterAbilities,
  removeAbility,
  editAbility,
}: Props) => {
  const classes = useStyles();

  return (
    <>
      <List className={classes.list}>
        {monsterAbilities.map((ability: MonsterAbility) => (
          <MonsterAbilityListItem
            key={ability.id}
            ability={ability}
            removeAbility={removeAbility}
            editAbility={editAbility}
          />
        ))}
      </List>
    </>
  );
});

export default MonsterAbilitiesList;
