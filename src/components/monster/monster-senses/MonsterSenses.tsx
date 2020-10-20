import {
  Box,
  FormControlLabel,
  makeStyles,
  Switch,
  TextField,
} from '@material-ui/core';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import monster from '../../../reducers/monsterReducer';


const useStyles = makeStyles(() => ({
  senseToggle: {
    minWidth: '160px',
    paddingRight: '8px',
    marginTop: 'auto',
  },
}));

type Props = {
  blindsight: string;
  darkvision: string;
  tremorsense: string;
  truesight: string;
  updateProperty: (property: string, value: string) => unknown;
}

const mapDispatch = (dispatch: Dispatch) => ({
  updateProperty: (property: string, value: string) => dispatch(monster.actions.updateProperty({property, value})),
})

const MonsterSenses = connect(null, mapDispatch)(({
  blindsight,
  darkvision,
  tremorsense,
  truesight,
  updateProperty,
}: Props) => {
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
    updateProperty('blindsight', !hasBlind ? '' : blindsight);
  }, [hasBlind]);

  /** Setup the effect to toggle if darkvision is available or not */
  useEffect(() => {
    updateProperty('darkvision', !hasDark ? '' : darkvision);
  }, [hasDark]);

  /** Setup the effect to toggle if tremorsense is available or not */
  useEffect(() => {
    updateProperty('tremorsense', !hasTremor ? '' : tremorsense);
  }, [hasTremor]);

  /** Setup the effect to toggle if truesight is available or not */
  useEffect(() => {
    updateProperty('truesight', !hasTruesight ? '' : truesight)
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
  const handleIntChange = (event:ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    // If it's null or a number value we will let it update the state in the parent
    if (event.target.value == null || /^-?[0-9]*$/.test(event.target.value)) {
      updateProperty(event.target.name, event.target.value);
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
});

export default MonsterSenses;
