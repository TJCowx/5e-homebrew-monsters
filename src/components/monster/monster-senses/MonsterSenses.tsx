import { Box, FormControlLabel, makeStyles, Switch } from '@material-ui/core';
import propTypes, { InferProps } from 'prop-types';
import React, { useState } from 'react';

const useStyles = makeStyles(() => ({
  senseToggle: {
    minWidth: '116px',
    paddingRight: '8px',
    marginTop: 'auto',
  },
}));

function MonsterSenses({
  blindsight,
  darkvision,
  tremorsense,
  truesight,
  handleChange,
}: InferProps<typeof MonsterSenses.propTypes>) {
  const [hasBlind, setHasBlind] = useState(blindsight !== '');
  const [hasDark, setHasDark] = useState(darkvision !== '');
  const [hasTremor, setHasTremor] = useState(tremorsense != '');
  const [hasTruesight, setHasTruesight] = useState(truesight != '');

  /** Classes for the component */
  const classes = useStyles();

  /** Toggles the senses show availablity */
  const toggleSenseShow = (sense: string) => {
    switch (sense) {
      case 'blind':
        setHasBlind(!hasBlind);
        break;
      case 'dark':
        setHasDark(!hasDark);
        break;
      case 'tremor':
        setHasTremor(!hasTremor);
        break;
      case 'trueSight':
        setHasTruesight(!hasTruesight);
        break;
      default:
        console.error(`${sense} isn't a sense`);
    }
  };

  return (
    <Box width="100%">
      <Box display="flex" flexDirection="row">
        <div className={classes.senseToggle}>
          <FormControlLabel
            label="Blindsight"
            control={
              <Switch
                color="primary"
                checked={hasBlind}
                onChange={() => toggleSenseShow('blind')}
              />
            }
          />
        </div>
      </Box>
      <Box display="flex" flexDirection="row">
        <div className={classes.senseToggle}>
          <FormControlLabel
            label="Darkvision"
            control={
              <Switch
                color="primary"
                checked={hasDark}
                onChange={() => toggleSenseShow('dark')}
              />
            }
          />
        </div>
      </Box>
      <Box display="flex" flexDirection="row">
        <div className={classes.senseToggle}>
          <FormControlLabel
            label="Tremorsense"
            control={
              <Switch
                color="primary"
                checked={hasTremor}
                onChange={() => toggleSenseShow('tremor')}
              />
            }
          />
        </div>
      </Box>
      <Box display="flex" flexDirection="row">
        <div className={classes.senseToggle}>
          <FormControlLabel
            label="Truesight"
            control={
              <Switch
                color="primary"
                checked={hasTruesight}
                onChange={() => toggleSenseShow('trueSight')}
              />
            }
          />
        </div>
      </Box>
    </Box>
  );
}

MonsterSenses.propTypes = {
  blindsight: propTypes.string,
  darkvision: propTypes.string,
  tremorsense: propTypes.string,
  truesight: propTypes.string,
  handleChange: propTypes.func,
};

export default MonsterSenses;
