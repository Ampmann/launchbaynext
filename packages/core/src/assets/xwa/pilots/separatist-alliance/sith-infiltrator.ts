import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'Sith Infiltrator',
  xws: 'sithinfiltrator',
  size: 'Large',
  dial: [
    '1TR',
    '1BB',
    '1FB',
    '1NB',
    '1YR',
    '2LR',
    '2TW',
    '2BB',
    '2FB',
    '2NB',
    '2YW',
    '2PR',
    '3TW',
    '3BW',
    '3FB',
    '3NW',
    '3YW',
    '4FW',
    '5KR',
  ],
  faction: 'Separatist Alliance',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 3 },
    { type: 'agility', value: 1 },
    { type: 'hull', value: 6 },
    { type: 'shields', value: 4 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'Red', type: 'Barrel Roll' },
  ],
  pilots: [
    {
      name: 'Darth Maul',
      caption: 'Sith Assassin',
      initiative: 5,
      limited: 1,
      xws: 'darthmaul',
      force: { value: 3, recovers: 1, side: ['dark'] },
      ability:
        'After you perform an attack, you may spend 2 [Force] to perform a bonus primary attack against a different target. If your attack missed, you may perform that bonus primary attack against the same target instead.',
      standard: true,
      epic: true,
      cost: 7,
      slots: [
        'Force Power',
        'Force Power',
        'Torpedo',
        'Cannon',
        'Crew',
        'Crew',
        'Tactical Relay',
        'Device',
        'Title',
        'Modification',
      ],
      ffg: 503,
      loadout: 19,
      extended: true,
      keywords: ['Dark Side', 'Sith'],
      image: 'https://infinitearenas.com/xw2/images/pilots/darthmaul.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/darthmaul.png',
    },
    {
      name: 'Count Dooku',
      caption: 'Darth Tyranus',
      initiative: 3,
      limited: 1,
      xws: 'countdooku',
      force: { value: 3, recovers: 1, side: ['dark'] },
      ability:
        'After you defend, if the attacker is in your firing arc, you may spend 1 [Force] to remove 1 of your blue or red tokens. After you perform an attack that hits, you may spend 1 [Force] to perform an action.',
      standard: true,
      epic: true,
      cost: 7,
      slots: [
        'Force Power',
        'Torpedo',
        'Cannon',
        'Crew',
        'Crew',
        'Tactical Relay',
        'Device',
        'Title',
        'Modification',
      ],
      ffg: 504,
      loadout: 24,
      extended: true,
      keywords: ['Dark Side', 'Sith'],
      image: 'https://infinitearenas.com/xw2/images/pilots/countdooku.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/countdooku.png',
    },
    {
      name: 'Dark Courier',
      initiative: 2,
      limited: 0,
      xws: 'darkcourier',
      text: 'The vessel called the Scimitar was heavily modified, equipped with stealth technologies and advanced surveillance devices for infiltration and assassination missions.',
      standard: true,
      epic: true,
      cost: 6,
      slots: ['Torpedo', 'Cannon', 'Device', 'Modification'],
      ffg: 506,
      loadout: 9,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/darkcourier.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/darkcourier.png',
    },
    {
      name: '0-66',
      xws: '066',
      cost: 5,
      slots: ['Talent', 'Torpedo', 'Cannon', 'Crew', 'Device', 'Modification'],
      ffg: 505,
      caption: 'Sinister Automaton',
      initiative: 3,
      limited: 1,
      shipActions: [
        { difficulty: 'White', type: 'Calculate' },
        { difficulty: 'White', type: 'Lock' },
        { difficulty: 'Red', type: 'Barrel Roll' },
      ],
      ability:
        'After you defend, you may spend 1 calculate token to perform an action.',
      standard: true,
      epic: true,
      keywords: ['Droid'],
      loadout: 12,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/066.png',
      artwork: 'https://infinitearenas.com/xw2/images/artwork/pilots/066.png',
    },
    {
      name: 'Count Dooku',
      xws: 'countdooku-siegeofcoruscant',
      cost: 6,
      slots: [],
      caption: 'Siege of Coruscant',
      initiative: 5,
      limited: 1,
      force: { value: 3, recovers: 1, side: ['dark'] },
      ability:
        'During an attack, before a ship at range 0-2 rolls attack or defense dice, if all of your [Force] are active, you may spend 1 [Force] and name a result. If the roll does not contain the named result, the ship must change 1 die to that result.',
      standard: true,
      epic: true,
      loadout: 0,
      extended: true,
      standardLoadout: ['malice', 'roilinganger-siegeofcoruscant', 'scimitar'],
      image:
        'https://infinitearenas.com/xw2/images/quickbuilds/countdooku-siegeofcoruscant.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/countdooku.png',
    },
  ],
  ffg: 60,
  icon: 'https://infinitearenas.com/xw2/images/shipicons/separatist-alliance/I_SithInfiltrator.png',
};

export default t;
