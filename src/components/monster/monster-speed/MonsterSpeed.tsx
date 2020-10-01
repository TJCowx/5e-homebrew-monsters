import { PropertyDescriptorParsingType } from 'html2canvas/dist/types/css/IPropertyDescriptor';
import React, { useState } from 'react';
import propTypes, { InferProps } from 'prop-types';
import NumericInput from 'material-ui-numeric-input';
import { Box, FormControlLabel, Switch } from '@material-ui/core';

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

  return (
    <Box width="100%">
      <Box display="flex" flexDirection="row">
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
