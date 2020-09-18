import React, { useEffect, useState } from 'react';
import PropTypes, { InferProps } from 'prop-types';
import { withStyles, createStyles, Box } from '@material-ui/core';
import SectionSeparator from './SectionSeparator';
import StatBlockBorder from './StatBlockBorder';
import { getDisplayModifier } from '../../../hooks/getModifier';
import { getSavingThrowModifier } from '../../../hooks/getSavingThrowModifier';
import { getStats, getProficiencies } from '../../../hooks/getTypeMaps';
import { getProfModifier } from '../../../hooks/getProfModifier';
import FormattedAction from './FormattedAction';
import MonsterAbility from '../../../models/MonsterAbility';
import MonsterAction from '../../../models/MonsterAction';

const useStyles = () =>
  createStyles({
    root: {
      fontFamily: 'Arial, Helvetica, sans-serif',
    },
    accentColour: { color: '#58170D' },
    column: {
      width: '450px',
      backgroundColor: '#fdf1dc',
      padding: '16px',
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
    singleItemList: {
      fontSize: '14px',
      padding: '4px 0px',
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
    actionTypeHeader: {
      fontSize: '20px',
      fontVariant: 'small-caps',
      textTransform: 'capitalize',
      paddingTop: '12px',
    },
    titleUnderline: {
      border: '1px solid #99351f',
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
          {monster.size} {monster.type}
          {monster.alignment.length > 0 && <>, {monster.alignment}</>}
        </div>
        <SectionSeparator />
        <div className={`${classes.singleItemList} ${classes.accentColour}`}>
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
              {monster.str} ({getDisplayModifier(monster.str)})
            </div>
          </Box>
          <Box>
            <div className={classes.statHeader}>DEX</div>
            <div>
              {monster.dex} ({getDisplayModifier(monster.dex)})
            </div>
          </Box>
          <Box>
            <div className={classes.statHeader}>CON</div>
            <div>
              {monster.con} ({getDisplayModifier(monster.con)})
            </div>
          </Box>
          <Box>
            <div className={classes.statHeader}>INT</div>
            <div>
              {monster.int} ({getDisplayModifier(monster.int)})
            </div>
          </Box>
          <Box>
            <div className={classes.statHeader}>WIS</div>
            <div>
              {monster.wis} ({getDisplayModifier(monster.wis)})
            </div>
          </Box>
          <Box>
            <div className={classes.statHeader}>CHA</div>
            <div>
              {monster.chr} ({getDisplayModifier(monster.chr)})
            </div>
          </Box>
        </Box>
        <SectionSeparator />
        <div className={`${classes.singleItemList} ${classes.accentColour}`}>
          {monster.savingThrows.length > 0 && (
            <div>
              <span>
                <strong>Saving Throws</strong>{' '}
                {monster.savingThrows
                  .map(
                    (savingThrow: string) =>
                      `${getStats()[savingThrow]} +${getSavingThrowModifier(
                        monster[savingThrow],
                        monster.profBonus
                      )}`
                  )
                  .join(', ')}
              </span>
            </div>
          )}
          {monster.proficiencies.length > 0 && (
            <div>
              <span>
                <strong>Skills</strong>{' '}
                {monster.proficiencies
                  .map(
                    (prof: string) =>
                      `${getProficiencies()[prof]} +${getProfModifier(
                        prof,
                        monster
                      )}`
                  )
                  .join(', ')}
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
          {monster.condImmunities.length > 0 && (
            <div>
              <span>
                <strong>Condition Immunities</strong>{' '}
                {monster.condImmunities.join(', ')}
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
              {monster.rewardXP.length > 0 && ` (${monster.rewardXP} XP)`}
            </span>
          </div>
        </div>
        <SectionSeparator />
        <div className={classes.singleItemList}>
          {monster.abilities.map((ability: MonsterAbility) => {
            return (
              <div key={ability.id}>
                <strong>{ability.name}</strong> {ability.description}
              </div>
            );
          })}
        </div>
        {monster.actions.length > 0 && (
          <>
            <div className={`${classes.actionTypeHeader} ${classes.accentColour}`}>
              Actions
            </div>
            <hr className={classes.titleUnderline} />
            {monster.actions.map((action: MonsterAction) => (
              <FormattedAction key={`formatted-${action.id}`} action={action} />
            ))}
          </>
        )}
        {monster.reactions.length > 0 && (
          <>
            <div className={`${classes.actionTypeHeader} ${classes.accentColour}`}>
              Reactions
            </div>
            <hr className={classes.titleUnderline} />
            {monster.reactions.map((action: MonsterAction) => (
              <FormattedAction key={`formatted-${action.id}`} action={action} />
            ))}
          </>
        )}
        {monster.legenActions.length > 0 && (
          <>
            <div className={`${classes.actionTypeHeader} ${classes.accentColour}`}>
              Legendary Actions
            </div>
            <hr className={classes.titleUnderline} />
            {monster.legenActions.map((action: MonsterAction) => (
              <FormattedAction key={`formatted-${action.id}`} action={action} />
            ))}
          </>
        )}
        {monster.lairActions.length > 0 && (
          <>
            <div className={`${classes.actionTypeHeader} ${classes.accentColour}`}>
              Lair Actions
            </div>
            <hr className={classes.titleUnderline} />
            {monster.lairActions.map((action: MonsterAction) => (
              <FormattedAction key={`formatted-${action.id}`} action={action} />
            ))}
          </>
        )}
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
