/**
 * Monster.tsx
 * The base monster component. Handles grouping together all the monster
 * properties in an expansion panel.
 */

import React, { useState } from 'react';
import MonsterStats from './monster-stats/MonsterStats';
import MonsterProperties from './monster-properties/MonsterProperties';
import MonsterActions from './monster-actions/MonsterActions';
import MonsterAbilities from './monster-abilities/MonsterAbilities';
import MonsterDescription from './monster-descriptions/MonsterDescription';
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography,
  Theme,
  withStyles,
  Button,
  Box,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MonsterAbility from '../../models/MonsterAbility';
import MonsterAction from '../../models/MonsterAction';
import MonsterDefinition from '../../models/MonsterDefinition';
import StatBlock from './stat-block/StatBlock';
import PropTypes, { InferProps } from 'prop-types';

/** Setup the styles and theming for this component and children */
const styles = (theme: Theme) => ({
  root: {
    width: '100%',
    display: 'flex',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  monsterContainer: {
    width: '50%',
    paddingRight: theme.spacing(1),
  },
  statBlockContainer: {
    paddingLeft: theme.spacing(1),
  },
});

function Monster({ classes }: InferProps<typeof Monster.propTypes>) {
  const [monster, setMonster] = useState(new MonsterDefinition());

  /**
   * Updates the state of the monster on a change.
   * @param event The material UI event
   */
  const handleChange = (event: {
    target: { name: any; value: any; valueAsNumber: boolean };
  }) => {
    setMonster({
      ...monster,
      [event.target.name]: event.target.value,
    });
  };

  /**
   * Updates an ability item if its id is already existing.
   * If the id doesn't exist it will append the ability to the end
   * @param updatedAbility The ability item to update or add
   */
  const updateMonsterAbilities = (updatedAbility: MonsterAbility) => {
    // Check to see if we have an already existing ability item
    const existingIndex: number = monster.abilities.findIndex(
      (ability: MonsterAbility) => ability.id === updatedAbility.id
    );

    if (existingIndex > -1) {
      // Copy the array so we don't have a chance to manipulate it before wanted
      const abilities = [...monster.abilities];
      abilities[existingIndex] = new MonsterAbility(updatedAbility);

      setMonster({
        ...monster,
        abilities,
      });
    } else {
      setMonster({
        ...monster,
        abilities: [...monster.abilities, new MonsterAbility(updatedAbility)],
      });
    }
  };

  /**
   * Removes an ability from the state that has the matching id
   * @param id the id of the ability to remove
   */
  const removeAbility = (id: string) => {
    setMonster({
      ...monster,
      abilities: [
        ...monster.abilities.filter((ability: MonsterAbility) => ability.id !== id),
      ],
    });
  };

  /**
   * Updates an action item if its id is already existing.
   * If the id doesn't exist it will append the action to the end
   * @param updatedActopm The action item to update or add
   */
  const updateMonsterActions = (updatedAction: MonsterAction) => {
    let actionsProperty: string = '';

    switch (updatedAction.actionType) {
      case 'Action':
        actionsProperty = 'actions';
        break;
      case 'Reaction':
        actionsProperty = 'reactions';
        break;
      case 'Legendary':
        actionsProperty = 'legenActions';
        break;
      case 'lair':
        actionsProperty = 'lairActions';
        break;
    }

    // Check to see if we have an already existing ability item
    const existingIndex: number = monster[`${actionsProperty}`].findIndex(
      (action: MonsterAction) => action.id === updatedAction.id
    );

    if (existingIndex > -1) {
      // Copy the array so we don't have a chance to manipulate it before wanted
      const actions = [...monster[`${actionsProperty}`]];
      actions[existingIndex] = new MonsterAction(updatedAction);

      setMonster({
        ...monster,
        actions,
      });
    } else {
      setMonster({
        ...monster,
        [actionsProperty]: [
          ...monster[`${actionsProperty}`],
          new MonsterAction(updatedAction),
        ],
      });
    }
  };

  /**
   * Removes an action from the state that has the matching id
   * @param id the id of the ability to remove
   */
  const removeAction = (id: string) => {
    setMonster({
      ...monster,
      actions: [
        ...monster.actions.filter((action: MonsterAction) => action.id !== id),
      ],
    });
  };

  /**
   * Reads the file selected from the input, tries to make sure it's json
   * and sets it to the monster type
   */
  const importConfig = ({ target }: any) => {
    const fileReader: FileReader = new FileReader();

    fileReader.onload = (e) => {
      try {
        const importedObject: object = JSON.parse(e.target.result as string);
        setMonster(new MonsterDefinition(importedObject));
        alert('Monster Has Been Uploaded');
      } catch (e) {
        alert('Error parsing file');
        console.error(e);
      }
    };
    fileReader.readAsText(target.files[0]);
  };

  /**
   * Takes the monster configuration and download a json file with the setup
   */
  const exportConfig = () => {
    // Set the filename to be the name of the monster
    const fileName: string =
      monster.name != null
        ? `${encodeURIComponent(monster.name)}.json`
        : `no_name.txt`;

    // Setup the blob for download
    const element: HTMLAnchorElement = document.createElement('a');
    const file: Blob = new Blob([JSON.stringify(monster)], {
      type: 'application/json;charset=utf-8;',
    });

    element.href = URL.createObjectURL(file);
    element.download = fileName;
    document.body.appendChild(element);
    element.click();
  };

  return (
    <Box className={classes.root}>
      <Box className={classes.monsterContainer}>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Monster Description</Typography>
            <Typography className={classes.secondaryHeading}>
              {monster.name}
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <MonsterDescription
              name={monster.name}
              size={monster.size}
              type={monster.type}
              alignment={monster.alignment}
              handleChange={handleChange}
            />
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Monster Stats</Typography>
            <Typography className={classes.secondaryHeading}>
              Stat-Summary
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <MonsterStats
              handleChange={handleChange}
              armourClass={monster.armourClass}
              hitPoints={monster.hitPoints}
              hitDie={monster.hitDie}
              speed={monster.speed}
              str={monster.str}
              dex={monster.dex}
              con={monster.con}
              int={monster.int}
              wis={monster.wis}
              chr={monster.chr}
              profBonus={monster.profBonus}
              proficiencies={monster.proficiencies}
              savingThrows={monster.savingThrows}
            />
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Monster Properties</Typography>
            <Typography className={classes.secondaryHeading}>
              Property Summary
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <MonsterProperties
              immunities={monster.immunities}
              condImmunities={monster.condImmunities}
              resistances={monster.resistances}
              weaknesses={monster.weaknesses}
              languages={monster.languages}
              senses={monster.senses}
              challengeRating={monster.challengeRating}
              rewardXP={monster.rewardXP}
              handleChange={handleChange}
            />
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Monster Abilities</Typography>
            <Typography className={classes.secondaryHeading}>
              Ability Summary
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <MonsterAbilities
              monsterAbilities={monster.abilities}
              addMonsterAbility={updateMonsterAbilities}
              removeAbility={removeAbility}
            />
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Monster Actions</Typography>
            <Typography className={classes.secondaryHeading}>
              Action Summary
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <MonsterActions
              actions={monster.actions}
              legenActions={monster.legenActions}
              lairActions={monster.lairActions}
              reactions={monster.reactions}
              addMonsterAction={updateMonsterActions}
              removeAction={removeAction}
            />
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <Box justifyContent="flex-end" display="flex" marginTop="8px">
          <input
            onChange={importConfig}
            accept="application/JSON"
            style={{ display: 'none' }}
            id="config-upload"
            type="file"
          />
          <label htmlFor="config-upload">
            <Button variant="contained" component="span" color="primary">
              Import
            </Button>
          </label>
          <Button
            color="primary"
            variant="contained"
            aria-label="Export"
            style={{ marginLeft: '8px' }}
            onClick={exportConfig}
          >
            Export
          </Button>
        </Box>
      </Box>
      <Box className={classes.statBlockContainer}>
        <StatBlock monster={monster} />
      </Box>
    </Box>
  );
}

Monster.propTypes = {
  classes: PropTypes.any,
};

export default withStyles(styles, { withTheme: true })(Monster);
