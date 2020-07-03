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
}

class Monster extends Component<{ classes: any }, MonsterProps> {
  public state = {
    name: 'Harold the Destroyer',
    alignment: 'Lawful Good',
    size: 'Large',
  };

  /**
   * Updates the state of the monster on a change
   * @param event The material UI event
   */
  private handleChange = (event: { target: { name: any; value: any } }) => {
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
            <MonsterStats />
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
            <MonsterProperties />
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
