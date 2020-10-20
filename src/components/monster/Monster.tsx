/**
 * Monster.tsx
 * The base monster component. Handles grouping together all the monster
 * properties in an expansion panel.
 */

import React, { ChangeEvent, useRef, useState } from 'react';
import { Dispatch } from 'redux';
import MonsterStats from './monster-stats/MonsterStats';
import MonsterProperties from './monster-properties/MonsterProperties';
import MonsterActions from './monster-actions/MonsterActions';
import MonsterAbilities from './monster-abilities/MonsterAbilities';
import MonsterDescription from './monster-descriptions/MonsterDescription';
import MonsterSpeed from './monster-speed/MonsterSpeed';
import MonsterSenses from './monster-senses/MonsterSenses';
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography,
  Theme,
  Button,
  Box,
  FormControlLabel,
  Switch,
  makeStyles,
  createStyles,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MonsterAbility from '../../models/MonsterAbility';
import MonsterAction from '../../models/MonsterAction';
import MonsterDefinition, { MonsterType } from '../../models/MonsterDefinition';
import StatBlock from './stat-block/StatBlock';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import html2canvas from 'html2canvas';
import { AppState } from '../../store/store';
import { monsterSelector } from '../../selectors/monsterSelector';
import monster from '../../reducers/monsterReducer';


/** Setup the styles and theming for this component and children */
const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    width: '100%',
    display: 'inline-block',
    '@media (min-width: 1024px)': {
      display: 'flex',
    },
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
    width: '100%',
    '@media (min-width: 1024px)': {
      minWidth: '50%',
      maxWidth: '50%',
    },
    paddingRight: theme.spacing(1),
  },
  statBlockContainer: {
    paddingLeft: theme.spacing(1),
    'overflow-x': 'auto',
  },
  actionContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    'flex-direction': 'row',
    marginTop: '8px',
    '@media (max-width: 600px)': {
      display: 'inline-block',
    },
  },
  statBlockActionContainer: {
    justifyContent: 'flex-end',
    display: 'flex',
    '@media (max-width: 600px)': {
      justifyContent: 'space-between',
      width: '100%',
    },
  },
}));

type Props = {
  custMonster: MonsterType,
  loadExample: () => unknown
}

const mapState = (state: AppState) => ({
  custMonster: monsterSelector(state),
})

const mapDispatch = (dispatch: Dispatch) => ({
  loadExample: () => dispatch(monster.actions.loadExample()),
})

const Monster = connect(mapState, mapDispatch)(({custMonster, loadExample}: Props) => {
  const [twoCols, setTwoCols] = useState(false);

  const componentRef = useRef();
  
  const classes = useStyles();

  /**
   * Updates the state of the monster on a change.
   * @param event The material UI event
   */
  const handleChange = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    // setMonster({
    //   ...monster,
    //   [event.target.name]: event.target.value,
    // });
  };

  /**
   * Updates an ability item if its id is already existing.
   * If the id doesn't exist it will append the ability to the end
   * @param updatedAbility The ability item to update or add
   */
  const updateMonsterAbilities = (updatedAbility: MonsterAbility) => {
    // Check to see if we have an already existing ability item
    const existingIndex: number = custMonster.abilities.findIndex(
      (ability: MonsterAbility) => ability.id === updatedAbility.id
    );

    if (existingIndex > -1) {
      // Copy the array so we don't have a chance to manipulate it before wanted
      const abilities = [...custMonster.abilities];
      // abilities[existingIndex] = new MonsterAbility(updatedAbility);

      // setMonster({
      //   ...monster,
      //   abilities,
      // });
    } else {
      // setMonster({
      //   ...monster,
      //   abilities: [...monster.abilities, new MonsterAbility(updatedAbility)],
      // });
    }
  };

  /**
   * Removes an ability from the state that has the matching id
   * @param id the id of the ability to remove
   */
  const removeAbility = (id: string) => {
    // setMonster({
    //   ...monster,
    //   abilities: [
    //     ...monster.abilities.filter((ability: MonsterAbility) => ability.id !== id),
    //   ],
    // });
  };

  /**
   * Updates an action item if its id is already existing.
   * If the id doesn't exist it will append the action to the end
   * @param updatedActopm The action item to update or add
   */
  const updateMonsterActions = (updatedAction: MonsterAction) => {
    // let actionsProperty: string = '';

    // switch (updatedAction.actionType) {
    //   case 'Action':
    //     actionsProperty = 'actions';
    //     break;
    //   case 'Reaction':
    //     actionsProperty = 'reactions';
    //     break;
    //   case 'Legendary':
    //     actionsProperty = 'legenActions';
    //     break;
    //   case 'lair':
    //     actionsProperty = 'lairActions';
    //     break;
    // }

    // // Check to see if we have an already existing ability item
    // const existingIndex: number = monster[`${actionsProperty}`].findIndex(
    //   (action: MonsterAction) => action.id === updatedAction.id
    // );

    // if (existingIndex > -1) {
    //   // Copy the array so we don't have a chance to manipulate it before wanted
    //   const actions = [...monster[`${actionsProperty}`]];
    //   actions[existingIndex] = new MonsterAction(updatedAction);

    //   setMonster({
    //     ...monster,
    //     actions,
    //   });
    // } else {
    //   setMonster({
    //     ...monster,
    //     [actionsProperty]: [
    //       ...monster[`${actionsProperty}`],
    //       new MonsterAction(updatedAction),
    //     ],
    //   });
    // }
  };

  /**
   * Removes an action from the state that has the matching id
   * @param id the id of the ability to remove
   */
  const removeAction = (id: string, actionType: string) => {
    // setMonster({
    //   ...monster,
    //   actions: [
    //     ...monster.actions.filter((action: MonsterAction) => action.id !== id),
    //   ],
    // });
  };

  /**
   * Reads the file selected from the input, tries to make sure it's json
   * and sets it to the monster type
   */
  const importConfig = ({ target }: any) => {
    // const fileReader: FileReader = new FileReader();

    // fileReader.onload = (e) => {
    //   try {
    //     const importedObject: object = JSON.parse(e.target.result as string);
    //     setMonster(new MonsterDefinition(importedObject));
    //     alert('Monster Has Been Uploaded');
    //   } catch (e) {
    //     alert('Error parsing file');
    //     console.error(e);
    //   }
    // };
    // fileReader.readAsText(target.files[0]);
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

  /**
   * Export the stat block into an image
   */
  const exportImage = () => {
    // This is a fix to the image not exporting properly
    window.scroll(0, 0);
    // The below needs to be here otherwise html2canvas can't handle svgs
    // https://stackoverflow.com/questions/32481054/svg-not-displayed-when-using-html2canvas
    var svgElements = document.body.querySelectorAll('svg');
    svgElements.forEach(function (item) {
      item.setAttribute('width', `${item.getBoundingClientRect().width}`);
      item.setAttribute('height', `${item.getBoundingClientRect().height}`);
      item.style.width = null;
      item.style.height = null;
    });

    const element: any = ReactDOM.findDOMNode(componentRef.current);

    return html2canvas(element, {
      backgroundColor: null,
      useCORS: true,
    }).then((canvas) => {
      const fileName: string = `${monster.name}.png`;
      const uri: string = canvas.toDataURL('image/png', 1.0);

      const link = document.createElement('a');

      if (typeof link.download === 'string') {
        link.href = uri;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        window.open(uri);
      }
    });
  };

  return (
    <Box className={classes.root}>
      <Box className={classes.monsterContainer}>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Description</Typography>
            <Typography className={classes.secondaryHeading}>
              Name, Type, Size, Alignment
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <MonsterDescription
              name={custMonster.name}
              size={custMonster.size}
              type={custMonster.type}
              alignment={custMonster.alignment}
            />
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Movement</Typography>
            <Typography className={classes.secondaryHeading}>
              Types of Movement Speeds
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <MonsterSpeed
              landSpeed={custMonster.landSpeed}
              flySpeed={custMonster.flySpeed}
              burrowSpeed={custMonster.burrowSpeed}
              climbSpeed={custMonster.climbSpeed}
              hoverSpeed={custMonster.hoverSpeed}
            />
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Stats</Typography>
            <Typography className={classes.secondaryHeading}>
              Stats, AC, HP, Proficiencies, Saving Throws
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <MonsterStats
              armourClass={custMonster.armourClass}
              hitPoints={custMonster.hitPoints}
              hitDie={custMonster.hitDie}
              str={custMonster.str}
              dex={custMonster.dex}
              con={custMonster.con}
              int={custMonster.int}
              wis={custMonster.wis}
              chr={custMonster.chr}
              profBonus={custMonster.profBonus}
              proficiencies={custMonster.proficiencies}
              savingThrows={custMonster.savingThrows}
            />
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Senses</Typography>
            <Typography className={classes.secondaryHeading}>
              Truesight, Tremorsense, ect..
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <MonsterSenses
              blindsight={custMonster.blindsight}
              darkvision={custMonster.darkvision}
              tremorsense={custMonster.tremorsense}
              truesight={custMonster.truesight}
            />
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Properties</Typography>
            <Typography className={classes.secondaryHeading}>
              Immunities, Resistances, Weaknesses, Languages, CR
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <MonsterProperties
              immunities={custMonster.immunities}
              condImmunities={custMonster.condImmunities}
              resistances={custMonster.resistances}
              weaknesses={custMonster.weaknesses}
              languages={custMonster.languages}
              challengeRating={custMonster.challengeRating}
              rewardXP={custMonster.rewardXP}
            />
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Abilities</Typography>
            <Typography className={classes.secondaryHeading}>
              Passive abilities for the monster
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <MonsterAbilities />
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Actions</Typography>
            <Typography className={classes.secondaryHeading}>
              Actions, Legendary Actions, Reactions, Lair Actions
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <MonsterActions />
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <Box className={classes.actionContainer}>
          <Box justifyContent="flex-start" display="flex">
            <Button
              color="primary"
              variant="contained"
              aria-label="Load Example"
              onClick={loadExample}
            >
              Example
            </Button>
          </Box>
          <Box className={classes.statBlockActionContainer}>
            <FormControlLabel
              label="Toggle Columns"
              control={
                <Switch
                  color="primary"
                  checked={twoCols}
                  onChange={() => setTwoCols(!twoCols)}
                />
              }
            />
            <Button
              color="primary"
              variant="contained"
              aria-label="Save as Image"
              style={{ marginLeft: '8px' }}
              onClick={exportImage}
            >
              Save Image
            </Button>
          </Box>
        </Box>
        <Box style={{ paddingTop: '8px' }}>
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
      <div className={classes.statBlockContainer}>
        <StatBlock twoColumns={twoCols} saveRef={componentRef} />
      </div>
    </Box>
  );
});

export default Monster;
