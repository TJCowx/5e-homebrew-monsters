import React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import { withStyles, createStyles, Box } from '@material-ui/core';
import SectionSeparator from './SectionSeparator';
import StatBlockBorder from './StatBlockBorder';
import { getModifier } from '../../../hooks/getModifier';

const useStyles = () =>
  createStyles({
    root: {
      fontFamily: 'Arial, Helvetica, sans-serif',
    },
    accentColour: { color: '#58170D' },
    column: {
      width: '450px',
      backgroundColor: '#fdf1dc',
      paddingLeft: '16px',
      paddingRight: '16px',
      marginLeft: '4px',
      marginRight: '4px',
    },
    name: {
      fontFamily: 'Georgia, Serif',
      fontVariant: 'small-caps',
      fontWeight: 'bold',
      fontSize: '23px',
      letterSpacing: '1px',
    },
    type: {
      fontSize: '11px',
      fontStyle: 'italic',
    },
    quickRefStats: {
      fontSize: '14px',
    },
    commonProperties: {
      fontSize: '14px',
    },
    stats: {
      fontSize: '15px',
      padding: '8px 16px',
    },
    statHeader: {
      fontWeight: 'bold',
    },
    typeHeader: {
      fontSize: '11px',
    },
    actionDescription: {
      fontWeight: 'bold',
      fontSize: '12px',
    },
  });

function StatBlock({ monster, classes }: InferProps<typeof StatBlock.propTypes>) {
  return (
    <div
      style={{
        paddingLeft: '16px',
        paddingRight: '16px',
      }}
      className={classes.root}
    >
      <StatBlockBorder />
      <div className={classes.column}>
        <div className={`${classes.name} ${classes.accentColour}`}>
          {monster.name}
        </div>
        <div className={classes.type}>
          {monster.size} Type, {monster.alignment}
        </div>
        <SectionSeparator />
        <div className={`${classes.quickRefStats} ${classes.accentColour}`}>
          <div>
            <span style={{ fontWeight: 'bold' }}>Armour Class</span>{' '}
            {monster.armourClass}
          </div>
          <div>
            <span style={{ fontWeight: 'bold' }}>Hit Points</span>{' '}
            {monster.hitPoints} {monster.hitDie.length > 0 && `(${monster.hitDie})`}
          </div>
          <div>
            <span style={{ fontWeight: 'bold' }}>Speed</span> {monster.speed}
          </div>
        </div>
        <SectionSeparator />
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          textAlign="center"
          className={`${classes.stats} ${classes.accentColour}`}
        >
          <Box>
            <div className={classes.statHeader}>STR</div>
            <div>
              {monster.str} ({getModifier(monster.str)})
            </div>
          </Box>
          <Box>
            <div className={classes.statHeader}>DEX</div>
            <div>
              {monster.dex} ({getModifier(monster.dex)})
            </div>
          </Box>
          <Box>
            <div className={classes.statHeader}>CON</div>
            <div>
              {monster.con} ({getModifier(monster.con)})
            </div>
          </Box>
          <Box>
            <div className={classes.statHeader}>INT</div>
            <div>
              {monster.int} ({getModifier(monster.int)})
            </div>
          </Box>
          <Box>
            <div className={classes.statHeader}>WIS</div>
            <div>
              {monster.wis} ({getModifier(monster.wis)})
            </div>
          </Box>
          <Box>
            <div className={classes.statHeader}>CHA</div>
            <div>
              {monster.chr} ({getModifier(monster.chr)})
            </div>
          </Box>
        </Box>
        <SectionSeparator />
        <div className={`${classes.commonProperties} ${classes.accentColour}`}>
          {monster.savingThrows.length > 0 && (
            <div>
              <span>
                <strong>Saving Throws</strong> Saving throws here
              </span>
            </div>
          )}
          {monster.proficiencies.length > 0 && (
            <div>
              <span>
                <strong>Skills</strong> Skill Profs Here
              </span>
            </div>
          )}
          {monster.resistances.length > 0 && (
            <div>
              <span>
                <strong>Damages Resistance</strong> {monster.resistances.join(', ')}
              </span>
            </div>
          )}
          {monster.immunities.length > 0 && (
            <div>
              <span>
                <strong>Damages Immunities</strong> {monster.immunities.join(', ')}
              </span>
            </div>
          )}
          {monster.weaknesses.length > 0 && (
            <div>
              <span>
                <strong>Damages Weaknesses</strong> {monster.weaknesses.join(', ')}
              </span>
            </div>
          )}
          {monster.senses.length > 0 && (
            <div>
              <span>
                <strong>Senses</strong> {monster.senses.join(', ')}
              </span>
            </div>
          )}
          <div>
            <span>
              <strong>Languages</strong>{' '}
              {monster.languages.length === 0 ? '--' : monster.languages.join(', ')}
            </span>
          </div>
          <div>
            <span>
              <strong>Challenge</strong>{' '}
              {monster.challengeRating.length > 0 ? monster.challengeRating : '--'}
              {monster.rewardXP.length > 0 && `(${monster.rewardXP} XP)`}
            </span>
          </div>
        </div>
        <SectionSeparator />
        Actions
      </div>
      <StatBlockBorder />
    </div>
  );
}

StatBlock.propTypes = {
  monster: PropTypes.any.isRequired,
  classes: PropTypes.any,
};

export default withStyles(useStyles, { withTheme: true })(StatBlock);
