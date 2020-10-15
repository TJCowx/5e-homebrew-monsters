/**
 * Monster.tsx
 * The base monster component. Handles grouping together all the monster
 * properties in an expansion panel.
 */

import React, { useRef, useState } from 'react';
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
import MonsterDefinition from '../../models/MonsterDefinition';
import StatBlock from './stat-block/StatBlock';
import ReactDOM from 'react-dom';
import html2canvas from 'html2canvas';

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

function Monster() {
  const [monster, setMonster] = useState(new MonsterDefinition());
  const [twoCols, setTwoCols] = useState(false);

  const componentRef = useRef();
  
  const classes = useStyles();

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

  /**
   * Generates an example monster based off the 5e lich which can be located
   * https://roll20.net/compendium/dnd5e/Lich
   */
  const generateExample = () => {
    setMonster(
      new MonsterDefinition({
        name: 'Lich',
        size: 'Medium',
        type: 'Undead',
        alignment: 'Neutral Evil',
        armourClass: '17',
        hitPoints: '135',
        hitDie: '18d8+54',
        landSpeed: '30',
        str: '11',
        dex: '16',
        con: '16',
        int: '20',
        wis: '14',
        chr: '16',
        profBonus: '7',
        challengeRating: '21',
        rewardXP: '33000',
        savingThrows: ['con', 'int', 'wis'],
        proficiencies: ['arc', 'hst', 'ins', 'per'],
        resistances: ['Cold', 'Lightning', 'Necrotic'],
        immunities: ['Poison', 'Bludgeoning', 'Piercing', 'Slashing'],
        condImmunities: [
          'Charmed',
          'Exhaustion',
          'Frightenened',
          'Paralyzed',
          'Poisoned',
        ],
        truesight: '120',
        languages: ['Common', 'Elvish', 'Celestial', 'Sylvan', 'Primordial'],
        abilities: [
          new MonsterAbility({
            name: 'Legendary Resistance (3/Day)',
            description:
              'If the lich fails a saving throw, it can choose to succeed instead.',
          }),
          new MonsterAbility({
            name: 'Rejuvenation',
            description:
              'If it has a phylactery, a destroyed lich gains a new body in 1d10 ' +
              'days, regaining all its hit points and becoming active again. The ' +
              'new body appears within 5 feet of the phylactery.',
          }),
          new MonsterAbility({
            name: 'Spellcasting',
            description:
              'The lich is an 18th-level spellcaster. Its spellcasting ability is ' +
              'Intelligence (spell save DC 20, +12 to hit with spell attacks). ' +
              'The lich has the following wizard spells prepared: \n' +
              'Cantrips (at will): mage hand, prestidigitation, ray of frost \n' +
              ' 1st level (4 slots): detect magic, magic missile, shield, thunderwave \n' +
              ' 2nd level (3 slots): detect thoughts, invisibility, acid arrow, mirror image \n' +
              ' 3rd level (3 slots): animate dead, counterspell, dispel magic, fireball \n' +
              ' 4th level (3 slots): blight, dimension door \n' +
              ' 5th level (3 slots): cloudkill, scrying \n' +
              ' 6th level (1 slot): disintegrate, globe of invulnerability \n' +
              ' 7th level (1 slot): finger of death, plane shift \n' +
              ' 8th level (1 slot): dominate monster, power word stun \n' +
              ' 9th level (1 slot): power word kill',
          }),
          new MonsterAbility({
            name: 'Turn Resistance',
            description:
              'The lich has advantage on saving throws against any effect that turns undead.',
          }),
        ],
        actions: [
          new MonsterAction({
            name: 'Paralyzing Touch',
            isAttack: true,
            attackType: 'Melee Spell Attack',
            toHit: '12',
            reach: '5',
            damage: '3d6',
            damageType: 'Cold',
            description:
              'The target must succeed on a DC 18 Constitution saving ' +
              'throw or be paralyzed for 1 minute. The target can repeat the ' +
              'saving throw at the end of each of its turns, ending the effect on ' +
              'itself on a success',
          }),
        ],
        legenActions: [
          new MonsterAction({
            name: 'Cantrip',
            isAttack: false,
            description: 'The lich castrs a cantrip',
          }),
          new MonsterAction({
            name: 'Paralyzing Touch (Costs 2 Actions)',
            isAttack: false,
            description: 'The lich uses its Paralyzing Touch.',
          }),
          new MonsterAction({
            name: 'Frightening Gaze (Costs 2 Actions)',
            isAttack: false,
            description:
              'The lich fixes its gaze on one creature it can see ' +
              'within 10 feet of it. The target must succeed on a DC 18 Wisdom ' +
              'saving throw against this magic or become frightened for 1 minute. ' +
              'The frightened target can repeat the saving throw at the end of ' +
              'each of its turns, ending the effect on itself on a success. ' +
              "If a target's saving throw is successful or the effect ends for " +
              "it, the target is immune to the lich's gaze for the next 24 hours.",
          }),
          new MonsterAction({
            name: 'Disrupt Life (Costs 3 Actions)',
            isAttack: false,
            description:
              'Each non-undead creature within 20 feet of the lich ' +
              'must make a DC 18 Constitution saving throw against this magic, ' +
              'taking 21 (6d6) necrotic damage on a failed save, or half as much ' +
              'damage on a successful one.',
          }),
        ],
      })
    );
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
            <Typography className={classes.heading}>Movement</Typography>
            <Typography className={classes.secondaryHeading}>
              Types of Movement Speeds
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <MonsterSpeed
              landSpeed={monster.landSpeed}
              flySpeed={monster.flySpeed}
              burrowSpeed={monster.burrowSpeed}
              climbSpeed={monster.climbSpeed}
              hoverSpeed={monster.hoverSpeed}
              handleChange={handleChange}
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
              handleChange={handleChange}
              armourClass={monster.armourClass}
              hitPoints={monster.hitPoints}
              hitDie={monster.hitDie}
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
            <Typography className={classes.heading}>Senses</Typography>
            <Typography className={classes.secondaryHeading}>
              Truesight, Tremorsense, ect..
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <MonsterSenses
              blindsight={monster.blindsight}
              darkvision={monster.darkvision}
              tremorsense={monster.tremorsense}
              truesight={monster.truesight}
              handleChange={handleChange}
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
              immunities={monster.immunities}
              condImmunities={monster.condImmunities}
              resistances={monster.resistances}
              weaknesses={monster.weaknesses}
              languages={monster.languages}
              challengeRating={monster.challengeRating}
              rewardXP={monster.rewardXP}
              handleChange={handleChange}
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
            <MonsterAbilities
              monsterAbilities={monster.abilities}
              addMonsterAbility={updateMonsterAbilities}
              removeAbility={removeAbility}
            />
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

        <Box className={classes.actionContainer}>
          <Box justifyContent="flex-start" display="flex">
            <Button
              color="primary"
              variant="contained"
              aria-label="Load Example"
              onClick={generateExample}
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
        <StatBlock monster={monster} twoColumns={twoCols} saveRef={componentRef} />
      </div>
    </Box>
  );
}

export default Monster;
