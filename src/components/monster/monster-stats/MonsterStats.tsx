/**
 * MonsterStats.tsx
 * Handles the stats for the monster.
 */
import React from 'react';
import { TextField, Box, Theme, withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

/** Setup the styling for these inputs */
const useStyles = (theme: Theme) => ({
  descriptionRoot: {
    width: '100%',
  },
  inputField: {
    display: 'flex',
    margin: theme.spacing(1),
  },
});

export interface MonsterStatProps {
  classes: any;
}

class MonsterStats extends React.Component<MonsterStatProps> {
  static propTypes: { [key in keyof MonsterStatProps]: any } = {
    classes: PropTypes.object,
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.descriptionRoot}>
        <Box display="flex" flexDirection="row">
          <TextField
            className={classes.inputField}
            id="standard-basic"
            label="Armour Class"
          />
          <TextField
            className={classes.inputField}
            id="standard-basic"
            label="Hit Points"
          />
          <TextField
            className={classes.inputField}
            id="standard-basic"
            label="Hit Die"
          />
          <TextField
            className={classes.inputField}
            id="standard-basic"
            label="Speed"
          />
        </Box>

        <Box display="flex" flexDirection="row">
          <TextField
            className={classes.inputField}
            id="standard-basic"
            label="Strength"
          />
          <TextField
            className={classes.inputField}
            id="standard-basic"
            label="Dex"
          />
          <TextField
            className={classes.inputField}
            id="standard-basic"
            label="Con"
          />
          <TextField
            className={classes.inputField}
            id="standard-basic"
            label="Int"
          />
          <TextField
            className={classes.inputField}
            id="standard-basic"
            label="Wis"
          />
          <TextField
            className={classes.inputField}
            id="standard-basic"
            label="Charisma"
          />
        </Box>

        <Box display="flex" flexDirection="row">
          <TextField
            className={classes.inputField}
            id="standard-basic"
            label="Proficiency Bonus"
          />
          <TextField
            className={classes.inputField}
            id="standard-basic"
            label="Skill Proficiencies"
          />
          <TextField
            className={classes.inputField}
            id="standard-basic"
            label="Saving Throws"
          />
        </Box>
      </div>
    );
  }
}

export default withStyles(useStyles, { withTheme: true })(MonsterStats);
