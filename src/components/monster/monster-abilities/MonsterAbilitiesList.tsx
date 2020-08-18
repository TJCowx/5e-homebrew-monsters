/**
 * MonsterAbilitiesList.tsx
 * Displays a list of abilities that a monster may have.
 */
import React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import MonsterAbility from '../../../models/MonsterAbility';
import MonsterAbilityListItem from './MonsterAbilityListItem';
import { List, withStyles, Theme } from '@material-ui/core';

const useStyles = (theme: Theme) => ({
  list: {
    width: '100%',
  },
});

function MonsterAbilitiesList({
  monsterAbilities,
  classes,
}: InferProps<typeof MonsterAbilitiesList.propTypes>) {
  return (
    <>
      <List className={classes.list}>
        {monsterAbilities.map((ability: MonsterAbility) => (
          <MonsterAbilityListItem ability={ability} />
        ))}
      </List>
    </>
  );
}

MonsterAbilitiesList.propTypes = {
  monsterAbilities: PropTypes.array.isRequired,
  classes: PropTypes.any,
};

export default withStyles(useStyles, { withTheme: true })(MonsterAbilitiesList);
