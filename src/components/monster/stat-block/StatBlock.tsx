import React, { MutableRefObject } from 'react';
import PropTypes, { InferProps } from 'prop-types';
import { withStyles, createStyles, Box } from '@material-ui/core';
import SectionSeparator from './SectionSeparator';
import StatBlockBorder from './StatBlockBorder';
import SpeedFormat from './SpeedFormat';
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
      paddingLeft: '16px',
      paddingRight: '16px',
      whiteSpace: 'pre-wrap',
      '@media (max-width: 1024px)': {
        padding: '16px 0',
      },
    },
    accentColour: { color: '#58170D' },
    oneColumn: {
      backgroundColor: '#fdf1dc',
      padding: '16px',
      marginLeft: '4px',
      marginRight: '4px',
      margin: '0 auto',
    },
    wrapOneCol: {
      width: '632px',
    },
    twoColumns: {
      columnGap: '32px',
      WebkitColumnCount: 2,
      MozColumnCount: 2,
      columnCount: 2,
      backgroundColor: '#fdf1dc',
      padding: '16px',
      marginLeft: '4px',
      marginRight: '4px',
    },
    wrapTwoCol: {
      width: '1232px',
      margin: '0 auto',
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
      display: 'inline-block',
    },
    actionContainer: {
      display: 'inline-block',
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

function StatBlock({
  monster,
  twoColumns,
  saveRef,
  classes,
}: InferProps<typeof StatBlock.propTypes>) {
  /**
   * Calculates the passive perception. This is calculated from
   * 10 + proficiency bonus + perception.
   * https://roll20.net/compendium/dnd5e/Ability%20Scores#toc_8
   */
  const getPassiverPer = () => {
    return 10 + getProfModifier('per', monster);
  };

  /**
   * Handles displaying what senses are being outputted to the stat block
   */
  const displaySenses = () => {
    if (
      !monster.blindsight.length &&
      !monster.darkvision.length &&
      !monster.tremorsense.length &&
      !monster.truesight.length
    ) {
      // If we have a proficiency
      if (monster.proficiencies.includes('per')) {
        return (
          <>
            <strong>Senses:</strong> passive Perception {getPassiverPer()}
          </>
        );
      }

      // If we aren't proficient in perception return nothing for senses
      return <></>;
    }

    return (
      <div>
        <span>
          <strong>Senses:</strong>{' '}
          {monster.blindsight.length > 0 && (
            <>Blindsight {monster.blindsight}ft., </>
          )}
          {monster.darkvision.length > 0 && (
            <>Darkvision {monster.darkvision}ft., </>
          )}
          {monster.tremorsense.length > 0 && (
            <>Tremorsense {monster.tremorsense}ft., </>
          )}
          {monster.truesight.length > 0 && <>Truesight {monster.truesight}ft., </>}
          {monster.proficiencies.includes('per') && (
            <>passive Perception {getPassiverPer()}</>
          )}
        </span>
      </div>
    );
  };

  return (
    <div className={classes.root}>
      <div
        ref={saveRef}
        className={`${twoColumns ? classes.wrapTwoCol : classes.wrapOneCol}`}
      >
        <StatBlockBorder />
        <div className={`${twoColumns ? classes.twoColumns : classes.oneColumn}`}>
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
              {monster.hitPoints}{' '}
              {monster.hitDie.length > 0 && `(${monster.hitDie})`}
            </div>
            <div>
              <span style={{ fontWeight: 'bold' }}>Speed</span>{' '}
              <SpeedFormat
                landSpeed={monster.landSpeed}
                flySpeed={monster.flySpeed}
                burrowSpeed={monster.burrowSpeed}
                climbSpeed={monster.climbSpeed}
                hoverSpeed={monster.hoverSpeed}
              />
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
                  <strong>Damages Resistance</strong>{' '}
                  {monster.resistances.join(', ')}
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
            {displaySenses()}
            <div>
              <span>
                <strong>Languages</strong>{' '}
                {monster.languages.length === 0
                  ? '--'
                  : monster.languages.join(', ')}
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
                <div key={ability.id} style={{ paddingBottom: '4px' }}>
                  <strong>{ability.name}</strong> {ability.description}
                </div>
              );
            })}
          </div>
          {monster.actions.length > 0 && (
            <div className={classes.actionContainer}>
              <div className={`${classes.actionTypeHeader} ${classes.accentColour}`}>
                Actions
              </div>
              <hr className={classes.titleUnderline} />
              {monster.actions.map((action: MonsterAction) => (
                <FormattedAction key={`formatted-${action.id}`} action={action} />
              ))}
            </div>
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
              <p style={{ fontSize: '13px' }}>
                {monster.name} can take 3 Legendary Actions, choosing from the
                options below. Only one legendary action can be used at a time, and
                only at the end of another creature's turn. Spent legendary Actions
                are regained at the start of each turn.
              </p>
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
    </div>
  );
}

StatBlock.propTypes = {
  monster: PropTypes.any.isRequired,
  twoColumns: PropTypes.bool.isRequired,
  saveRef: PropTypes.any,
  classes: PropTypes.any,
};

export default withStyles(useStyles, { withTheme: true })(StatBlock);
