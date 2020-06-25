/**
 * Monster.tsx
 * The base monster component. Handles grouping together all the monster
 * properties in an expansion panel.
 */

import React from 'react';
import MonsterStats from './monster-stats/MonsterStats';
import MonsterProperties from './monster-properties/MonsterProperties';
import MonsterActions from './monster-actions/MonsterActions';
import MonsterAbilities from './monster-abilities/MonsterAbilities';
import MonsterDescription from './MonsterDescription';
import {
  makeStyles,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography,
  Theme,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme: Theme) => ({
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
}));

export default function Monster() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>Monster Description</Typography>
          <Typography className={classes.secondaryHeading}>
            Description Summary
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <MonsterDescription />
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>Monster Stats</Typography>
          <Typography className={classes.secondaryHeading}>Stat-Summary</Typography>
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
