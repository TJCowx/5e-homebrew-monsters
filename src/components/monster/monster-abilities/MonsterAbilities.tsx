/**
 * MonsterAbilities.tsx
 * Handles the grouping and displaying of monster abilities
 */
import React from 'react';
import AddMonsterAbility from './AddMonsterAbility';
import MonsterAbilitiesList from './MonsterAbilitiesList';
import MonsterAbility from '../../../models/MonsterAbility';
import PropTypes from 'prop-types';

export interface MonsterAbilitiesProps {
  monsterAbilities: Array<MonsterAbility>;
  handleChange: any;
  classes: any;
}

class MonsterAbilities extends React.Component<MonsterAbilitiesProps> {
  static propTypes: { [key in keyof MonsterAbilitiesProps]: any } = {
    monsterAbilities: PropTypes.array.isRequired,
    handleChange: PropTypes.func.isRequired,
    classes: PropTypes.object,
  };

  private handleAddMonsterAbility = (newAbility: MonsterAbility) => {};

  render() {
    return (
      <div>
        <AddMonsterAbility />
        <MonsterAbilitiesList />
      </div>
    );
  }
}

export default MonsterAbilities;
