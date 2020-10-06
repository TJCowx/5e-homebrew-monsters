import {
  Box,
  FormControlLabel,
  makeStyles,
  Switch,
  TextField,
} from '@material-ui/core';
import propTypes, { InferProps } from 'prop-types';
import React, { useEffect, useState } from 'react';

const useStyles = makeStyles(() => ({
  senseToggle: {
    minWidth: '170px',
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

  // **************************************
  //#region     EFFECT HOOKS
  // **************************************

  /** Setup the effect to toggle if blindsight is available or not */
  useEffect(() => {
    handleChange({
      target: {
        name: 'blindsight',
        value: !hasBlind ? '' : blindsight,
      },
    });
  }, [hasBlind]);

  /** Setup the effect to toggle if darkvision is available or not */
  useEffect(() => {
    handleChange({
      target: {
        name: 'darkvision',
        value: !hasDark ? '' : darkvision,
      },
    });
  }, [hasDark]);

  /** Setup the effect to toggle if tremorsense is available or not */
  useEffect(() => {
    handleChange({
      target: {
        name: 'tremorsense',
        value: !hasTremor ? '' : tremorsense,
      },
    });
  }, [hasTremor]);

  /** Setup the effect to toggle if truesight is available or not */
  useEffect(() => {
    handleChange({
      target: {
        name: 'truesight',
        value: !hasTruesight ? '' : truesight,
      },
    });
  }, [hasTruesight]);

  // **************************************
  //#endregion  END EFFECT HOOKS
  // **************************************

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

  /**
   * Takes an input event and checks to see if it was an integer input
   * before trying to update the state
   * @param event The event passed in from material UI onChange
   */
  const handleIntChange = (event: { target: { name: any; value: any } }) => {
    // If it's null or a number value we will let it update the state in the parent
    if (event.target.value == null || /^-?[0-9]*$/.test(event.target.value)) {
      handleChange(event);
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
        {hasBlind && (
          <TextField
            name="blindsight"
            label="Blindsight"
            value={blindsight}
            onChange={handleIntChange}
          />
        )}
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
        {hasDark && (
          <TextField
            name="darkvision"
            label="Darkvision"
            value={darkvision}
            onChange={handleIntChange}
          />
        )}
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
        {hasTremor && (
          <TextField
            name="tremorsense"
            label="Tremorsense"
            value={tremorsense}
            onChange={handleIntChange}
          />
        )}
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
        {hasTruesight && (
          <TextField
            name="truesight"
            label="Truesight"
            value={truesight}
            onChange={handleIntChange}
          />
        )}
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
