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
    name: 'Harold the Destroyer',
    size: 'Large',
    alignment: 'Lawful Good',
    armourClass: '23',
    hitPoints: '543',
    hitDie: '12d20',
    speed: '50 land',
    str: '20',
    dex: '20',
    con: '20',
    int: '20',
    wis: '20',
    chr: '20',
    profBonus: '12',
    proficiencies: new Array<string>(),
    savingThrows: new Array<string>(),
    immunities: new Array<string>(),
    resistances: new Array<string>(),
    weaknesses: new Array<string>(),
    languages: new Array<string>(),
    senses: new Array<string>(),
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
            <MonsterAbilities />
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
            <MonsterActions />
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Monster);
