/**
 * Monster.tsx
 * The base monster component. Handles grouping together all the monster
 * properties in an expansion panel.
 */

import React, { Component } from 'react';
import MonsterStats from './monster-stats/MonsterStats';
import MonsterProperties from './monster-properties/MonsterProperties';
import MonsterActions from './monster-actions/MonsterActions';
import MonsterAbilities from './monster-abilities/MonsterAbilities';
import MonsterDescription from './monster-descriptions/MonsterDescription';
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography,
  Theme,
  withStyles,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MonsterAbility from '../../models/MonsterAbility';
import MonsterAction from '../../models/MonsterAction';

/** Setup the styles and theming for this component and children */
const styles = (theme: Theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
});

/**
 * The prop types for this component
 */
export interface MonsterProps {
  name: string;
  size: string;
  alignment: string;
  armourClass: string;
  hitPoints: string;
  hitDie: string;
  speed: string;
  str: string;
  dex: string;
  con: string;
  int: string;
  wis: string;
  chr: string;
  profBonus: string;
  proficiencies: Array<string>;
  savingThrows: Array<string>;
  immunities: Array<string>;
  resistances: Array<string>;
  weaknesses: Array<string>;
  senses: Array<string>;
  languages: Array<string>;
  abilities: Array<MonsterAbility>;
  actions: Array<MonsterAction>;
  challengeRating: string;
  rewardXP: string;
}

class Monster extends Component<{ classes: any }, MonsterProps> {
  /**
   * Unfortunately a few of these fields which should be number can't
   * due to the material UI's number input fields not working how I would
   * like, so I made a work around making it so only numbers can be put
   * in normal textfields which forces the types to have to be strings
   */
  public state = {
    name: '',
    size: '',
    alignment: '',
    armourClass: '',
    hitPoints: '',
    hitDie: '',
    speed: '',
    str: '',
    dex: '',
    con: '',
    int: '',
    wis: '',
    chr: '',
    profBonus: '',
    proficiencies: new Array<string>(),
    savingThrows: new Array<string>(),
    immunities: new Array<string>(),
    resistances: new Array<string>(),
    weaknesses: new Array<string>(),
    languages: new Array<string>(),
    senses: new Array<string>(),
    // abilities: new Array<MonsterAbility>(),
    abilities: [
      new MonsterAbility({
        name: 'Darksight',
        description: 'Can see in the dark for up to 120ft',
      }),
      new MonsterAbility({
        name: 'Legendary Resistance (3/Day)',
        description:
          'If the Dragon fails a saving throw, it can choose to succeed instead.',
      }),
    ],
    actions: [
      new MonsterAction({
        name: 'Paralyzing Touch',
        toHit: '+12',
        damage: '3d6',
        attackType: 'Melee',
        actionType: 'Action',
        description:
          'The target must succeed on a DC 18 Constitution saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success',
        damageType: 'Cold',
      }),
      new MonsterAction({
        name: 'Cantrip',
        actionType: 'Legendary',
        description: 'The lich casts a cantrip',
      }),
    ],
    challengeRating: '',
    rewardXP: '',
    handleChange: '',
  };

  /**
   * Updates the state of the monster on a change.
   * @param event The material UI event
   */
  private handleChange = (event: {
    target: { name: any; value: any; valueAsNumber: boolean };
  }) => {
    // Update the passed in key with it's value pair
    const newState = { [event.target.name]: event.target.value } as Pick<
      MonsterProps,
      keyof MonsterProps
    >;

    this.setState(newState);
  };

  /**
   * Updates an ability item if its id is already existing.
   * If the id doesn't exist it will append the ability to the end
   * @param updatedAbility The ability item to update or add
   */
  private updateMonsterAbilities = (updatedAbility: MonsterAbility) => {
    // Check to see if we have an already existing ability item
    const existingIndex: number = this.state.abilities.findIndex(
      (ability: MonsterAbility) => ability.id === updatedAbility.id
    );

    if (existingIndex > -1) {
      // Copy the array so we don't have a chance to manipulate it before wanted
      const abilities = [...this.state.abilities];
      abilities[existingIndex] = new MonsterAbility(updatedAbility);

      this.setState({
        abilities,
      });
    } else {
      this.setState({
        abilities: [...this.state.abilities, new MonsterAbility(updatedAbility)],
      });
    }
  };

  /**
   * Removes an ability from the state that has the matching id
   * @param id the id of the ability to remove
   */
  private removeAbility = (id: string) => {
    this.setState({
      abilities: [
        ...this.state.abilities.filter(
          (ability: MonsterAbility) => ability.id !== id
        ),
      ],
    });
  };

  /**
   * Updates an action item if its id is already existing.
   * If the id doesn't exist it will append the action to the end
   * @param updatedActopm The action item to update or add
   */
  private updateMonsterActions = (updatedAction: MonsterAction) => {
    // Check to see if we have an already existing ability item
    const existingIndex: number = this.state.actions.findIndex(
      (action: MonsterAction) => action.id === updatedAction.id
    );

    if (existingIndex > -1) {
      // Copy the array so we don't have a chance to manipulate it before wanted
      const actions = [...this.state.actions];
      actions[existingIndex] = new MonsterAction(updatedAction);

      this.setState({
        actions,
      });
    } else {
      this.setState({
        actions: [...this.state.actions, new MonsterAction(updatedAction)],
      });
    }
  };

  /**
   * Removes an action from the state that has the matching id
   * @param id the id of the ability to remove
   */
  private removeAction = (id: string) => {
    this.setState({
      abilities: [
        ...this.state.actions.filter((action: MonsterAction) => action.id !== id),
      ],
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Monster Description</Typography>
            <Typography className={classes.secondaryHeading}>
              {this.state.name}
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <MonsterDescription
              name={this.state.name}
              size={this.state.size}
              alignment={this.state.alignment}
              handleChange={this.handleChange}
            />
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Monster Stats</Typography>
            <Typography className={classes.secondaryHeading}>
              Stat-Summary
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <MonsterStats
              handleChange={this.handleChange}
              armourClass={this.state.armourClass}
              hitPoints={this.state.hitPoints}
              hitDie={this.state.hitDie}
              speed={this.state.speed}
              str={this.state.str}
              dex={this.state.dex}
              con={this.state.con}
              int={this.state.int}
              wis={this.state.wis}
              chr={this.state.chr}
              profBonus={this.state.profBonus}
              proficiencies={this.state.proficiencies}
              savingThrows={this.state.savingThrows}
            />
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Monster Properties</Typography>
            <Typography className={classes.secondaryHeading}>
              Property Summary
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <MonsterProperties
              immunities={this.state.immunities}
              resistances={this.state.resistances}
              weaknesses={this.state.weaknesses}
              languages={this.state.languages}
              senses={this.state.senses}
              challengeRating={this.state.profBonus}
              rewardXP={this.state.profBonus}
              handleChange={this.handleChange}
            />
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Monster Abilities</Typography>
            <Typography className={classes.secondaryHeading}>
              Ability Summary
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <MonsterAbilities
              monsterAbilities={this.state.abilities}
              addMonsterAbility={this.updateMonsterAbilities}
              removeAbility={this.removeAbility}
            />
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Monster Actions</Typography>
            <Typography className={classes.secondaryHeading}>
              Action Summary
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <MonsterActions
              monsterActions={this.state.actions}
              addMonsterAction={this.updateMonsterActions}
              removeAction={this.removeAction}
            />
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Monster);
