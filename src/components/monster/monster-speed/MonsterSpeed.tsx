import React, { ChangeEvent, useEffect, useState } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import monster from '../../../reducers/monsterReducer';
import {
  Box,
  FormControlLabel,
  makeStyles,
  Switch,
  TextField,
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  speedToggle: {
    minWidth: '116px',
    paddingRight: '8px',
    marginTop: 'auto',
  },
}));

type Props = {
  landSpeed: string;
  flySpeed: string;
  burrowSpeed: string;
  climbSpeed: string;
  hoverSpeed: string;
  updateProperty: (property: string, value: string) => unknown;
};

const mapDispatch = (dispatch: Dispatch) => ({
  updateProperty: (property: string, value: string) => dispatch(monster.actions.updateProperty({property, value})),
})

const MonsterSpeed = connect(null, mapDispatch)(({
  landSpeed,
  flySpeed,
  burrowSpeed,
  climbSpeed,
  hoverSpeed,
  updateProperty,
}: Props) => {
  const [hasLand, setHasLand] = useState(landSpeed !== '');
  const [hasFly, setHasFly] = useState(flySpeed !== '');
  const [hasBurrow, setHasBurrow] = useState(burrowSpeed !== '');
  const [hasClimb, setHasClimb] = useState(climbSpeed !== '');
  const [hasHover, setHasHover] = useState(hoverSpeed !== '');

  /** Classes for the component */
  const classes = useStyles();

  // **************************************
  //#region     EFFECT HOOKS
  // **************************************

  /** Setup the effect to toggle the requirements for land speed */
  useEffect(() => {
    updateProperty('landSpeed', !hasLand ? '' : landSpeed);
  }, [hasLand]);

  /** Setup the effect to toggle the requirements for fly speed */
  useEffect(() => {
    updateProperty('flySpeed', !hasFly ? '' : flySpeed);
  }, [hasFly]);

  /** Setup the effect to toggle the requirements for burrow speed */
  useEffect(() => {
    updateProperty('burrowSpeed', !hasBurrow ? '' : burrowSpeed);
  }, [hasBurrow]);

  /** Setup the effect to toggle the requirements for climb speed */
  useEffect(() => {
    updateProperty('climbSpeed', !hasClimb ? '' : climbSpeed);
  }, [hasClimb]);

  /** Setup the effect to toggle the requirements for hover speed */
  useEffect(() => {
    updateProperty('hoverSpeed', !hasHover ? '' : hoverSpeed);
  }, [hasHover]);

  // **************************************
  //#endregion   EFFECT HOOKS
  // **************************************

  /**
   * Toggles if the speed type is being added or not
   * @param speedType the type of speed to toggle
   */
  const toggleSpeedShow = (speedType: string) => {
    switch (speedType) {
      case 'land':
        setHasLand(!hasLand);
        break;
      case 'fly':
        setHasFly(!hasFly);
        break;
      case 'burrow':
        setHasBurrow(!hasBurrow);
        break;
      case 'climb':
        setHasClimb(!hasClimb);
        break;
      case 'hover':
        setHasHover(!hasHover);
        break;
      default:
        console.error(`${speedType} isn't a speed`);
    }
  };

  /**
   * Takes an input event and checks to see if it was an integer input
   * before trying to update the state
   * @param event The event passed in from material UI onChange
   */
  const handleIntChange = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    // If it's null or a number value we will let it update the state in the parent
    if (event.target.value == null || /^-?[0-9]*$/.test(event.target.value)) {
      updateProperty(event.target.name, event.target.value);
    }
  };

  return (
    <Box width="100%">
      <Box display="flex" flexDirection="row">
        <div className={classes.speedToggle}>
          <FormControlLabel
            label="Land"
            control={
              <Switch
                color="primary"
                checked={hasLand}
                onChange={() => toggleSpeedShow('land')}
              />
            }
          />
        </div>
        {hasLand && (
          <TextField
            name="landSpeed"
            value={landSpeed}
            onChange={handleIntChange}
            label="Speed"
          />
        )}
      </Box>
      <Box display="flex" flexDirection="row">
        <div className={classes.speedToggle}>
          <FormControlLabel
            label="Fly"
            control={
              <Switch
                color="primary"
                checked={hasFly}
                onChange={() => toggleSpeedShow('fly')}
              />
            }
          />
        </div>
        {hasFly && (
          <TextField
            name="flySpeed"
            value={flySpeed}
            onChange={handleIntChange}
            label="Speed"
          />
        )}
      </Box>
      <Box display="flex" flexDirection="row">
        <div className={classes.speedToggle}>
          <FormControlLabel
            label="Burrow"
            control={
              <Switch
                color="primary"
                checked={hasBurrow}
                onChange={() => toggleSpeedShow('burrow')}
              />
            }
          />
        </div>
        {hasBurrow && (
          <TextField
            name="burrowSpeed"
            value={burrowSpeed}
            onChange={handleIntChange}
            label="Speed"
          />
        )}
      </Box>
      <Box display="flex" flexDirection="row">
        <div className={classes.speedToggle}>
          <FormControlLabel
            label="Climb"
            control={
              <Switch
                color="primary"
                checked={hasClimb}
                onChange={() => toggleSpeedShow('climb')}
              />
            }
          />
        </div>
        {hasClimb && (
          <TextField
            name="climbSpeed"
            value={climbSpeed}
            onChange={handleIntChange}
            label="Speed"
          />
        )}
      </Box>
      <Box display="flex" flexDirection="row">
        <div className={classes.speedToggle}>
          <FormControlLabel
            label="Hover"
            control={
              <Switch
                color="primary"
                checked={hasHover}
                onChange={() => toggleSpeedShow('hover')}
              />
            }
          />
        </div>
        {hasHover && (
          <TextField
            name="hoverSpeed"
            value={hoverSpeed}
            onChange={handleIntChange}
            label="Speed"
          />
        )}
      </Box>
    </Box>
  );
});

export default MonsterSpeed;
