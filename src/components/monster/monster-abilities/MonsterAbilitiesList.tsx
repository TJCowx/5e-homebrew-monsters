/**
 * MonsterAbilitiesList.tsx
 * Displays a list of abilities that a monster may have.
 */
import React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import MonsterAbility from '../../../models/MonsterAbility';
import MonsterAbilityListItem from './MonsterAbilityListItem';
import { List, withStyles } from '@material-ui/core';

const useStyles = () => ({
  list: {
    width: '100%',
  },
});

function MonsterAbilitiesList({
  monsterAbilities,
  removeAbility,
  editAbility,
  classes,
}: InferProps<typeof MonsterAbilitiesList.propTypes>) {
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
}

MonsterAbilitiesList.propTypes = {
  monsterAbilities: PropTypes.array.isRequired,
  removeAbility: PropTypes.func.isRequired,
  editAbility: PropTypes.func.isRequired,
  classes: PropTypes.any,
};

export default withStyles(useStyles, { withTheme: true })(MonsterAbilitiesList);
