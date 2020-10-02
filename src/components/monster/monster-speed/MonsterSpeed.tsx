import React, { useState } from 'react';
import propTypes, { InferProps } from 'prop-types';
import NumericInput from 'material-ui-numeric-input';
import { Box, FormControlLabel, makeStyles, Switch, Theme } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  speedToggle: {
    minWidth: '108px',
    paddingRight: '8px',
  },
}));

function MonsterSpeed({
  landSpeed,
  flySpeed,
  burrowSpeed,
  climbSpeed,
  hoverSpeed,
  handleChange,
}: InferProps<typeof MonsterSpeed.propTypes>) {
  const [hasLand, setHasLand] = useState(landSpeed != null);
  const [hasFly, setHasFly] = useState(flySpeed != null);
  const [hasBurrow, setHasBurrow] = useState(burrowSpeed != null);
  const [hasClimb, setHasClimb] = useState(climbSpeed != null);
  const [hasHover, setHasHover] = useState(hoverSpeed != null);

  const classes = useStyles();

  const toggleSpeedShow = (speedType: string) => {
    let newVal: number = 0;
    switch (speedType) {
      case 'land':
        setHasLand(!hasLand);

        // Toggle speed to 0 or null depending on if there is the land speed property
        newVal = hasLand ? newVal : null;
        handleChange({
          target: {
            name: 'landSpeed',
            value: newVal,
          },
        });
        break;
      case 'fly':
        setHasFly(!hasFly);

        // Toggle speed to 0 or null depending on if there is the fly speed property
        newVal = hasFly ? newVal : null;
        handleChange({
          target: {
            name: 'flySpeed',
            value: newVal,
          },
        });
        break;
      case 'burrow':
        setHasBurrow(!hasBurrow);

        // Toggle speed to 0 or null depending on if there is the burrow speed property
        newVal = hasBurrow ? newVal : null;
        handleChange({
          target: {
            name: 'burrowSpeed',
            value: newVal,
          },
        });
        break;
      case 'climb':
        setHasClimb(!hasClimb);

        // Toggle speed to 0 or null depending on if there is the climb speed property
        newVal = hasClimb ? newVal : null;
        handleChange({
          target: {
            name: 'climbSpeed',
            value: newVal,
          },
        });
        break;
      case 'hover':
        setHasHover(!hasHover);

        // Toggle speed to 0 or null depending on if there is the hover speed property
        newVal = hasHover ? newVal : null;
        handleChange({
          target: {
            name: 'hoverSpeed',
            value: newVal,
          },
        });
        break;
      default:
        console.error(`${speedType} isn't a speed`);
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
          <NumericInput
            name="landSpeed"
            precision="0"
            decimalSeparator="."
            thousandSeparator=","
            value={landSpeed}
            onChange={handleChange}
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
          <NumericInput
            name="flySpeed"
            precision="0"
            decimalSeparator="."
            thousandSeparator=","
            value={flySpeed}
            onChange={handleChange}
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
          <NumericInput
            name="burrowSpeed"
            precision="0"
            decimalSeparator="."
            thousandSeparator=","
            value={burrowSpeed}
            onChange={handleChange}
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
          <NumericInput
            name="climbSpeed"
            precision="0"
            decimalSeparator="."
            thousandSeparator=","
            value={climbSpeed}
            onChange={handleChange}
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
          <NumericInput
            name="hoverSpeed"
            precision="0"
            decimalSeparator="."
            thousandSeparator=","
            value={hoverSpeed}
            onChange={handleChange}
            label="Speed"
          />
        )}
      </Box>
    </Box>
  );
}

MonsterSpeed.propTypes = {
  landSpeed: propTypes.number.isRequired,
  flySpeed: propTypes.number.isRequired,
  burrowSpeed: propTypes.number.isRequired,
  climbSpeed: propTypes.number.isRequired,
  hoverSpeed: propTypes.number.isRequired,
  handleChange: propTypes.func.isRequired,
};

export default MonsterSpeed;
