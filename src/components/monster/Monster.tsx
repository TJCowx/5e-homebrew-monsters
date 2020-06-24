import React from 'react';
import MonsterStats from './MonsterStats';
import MonsterProperties from './MonsterProperties';
import MonsterActions from './MonsterActions';
import {
  makeStyles,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function Monster() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          Monster Stats
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <MonsterStats />
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          Monster Properties
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <MonsterProperties />
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          Monster Actions
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <MonsterActions />
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
