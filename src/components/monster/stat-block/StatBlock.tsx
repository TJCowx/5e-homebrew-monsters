import React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import MonsterDefinition from '../../../models/MonsterDefinition';
import { withStyles, Theme, createStyles } from '@material-ui/core';
import SectionSeparator from './SectionSeparator';

const useStyles = (theme: Theme) =>
  createStyles({
    root: {
      fontFamily: 'Georgia, Serif',
    },
    accentColour: { color: '#58170D' },
    column: {
      width: '450px',
      backgroundColor: '#fdf1dc',
      paddingLeft: '16px',
      paddingRight: '16px',
    },
    name: {
      fontVariant: 'small-caps',
      fontWeight: 'bold',
      fontSize: '23px',
      fontFamily: 'Bookmania Regular',
      letterSpacing: '1px',
    },
    type: {
      fontSize: '11px',
    },
    stats: {
      fontSize: '11px',
    },
    typeHeader: {
      fontSize: '11px',
    },
    actionDescription: {
      fontWeight: 'bold',
      fontSize: '12px',
    },
  });

// fontWeight: 'bold',

function StatBlock({ monster, classes }: InferProps<typeof StatBlock.propTypes>) {
  return (
    <div
      style={{
        paddingLeft: '16px',
        paddingRight: '16px',
      }}
      className={classes.root}
    >
      <div className={classes.column}>
        <div className={`${classes.name} ${classes.accentColour}`}>
          {monster.name}
        </div>
        <SectionSeparator />
        Anotha Test
      </div>
    </div>
  );
}

StatBlock.propTypes = {
  monster: PropTypes.any.isRequired,
  classes: PropTypes.any,
};

export default withStyles(useStyles, { withTheme: true })(StatBlock);
