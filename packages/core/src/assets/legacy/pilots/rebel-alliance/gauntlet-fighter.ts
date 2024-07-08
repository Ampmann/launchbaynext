import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'Gauntlet Fighter',
  xws: 'gauntletfighter',
  size: 'Large',
  dial: [
    '0OR',
    '1BB',
    '1NB',
    '2TW',
    '2BB',
    '2FB',
    '2NB',
    '2YW',
    '3TR',
    '3BW',
    '3FW',
    '3NW',
    '3YR',
    '4FW',
  ],
  dialCodes: ['GtF'],
  faction: 'Rebel Alliance',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 3 },
    { arc: 'Rear Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 9 },
    { type: 'shields', value: 2 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'Red', type: 'Reinforce' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'Red', type: 'Coordinate' },
  ],
  pilots: [
    {
      name: '“Chopper”',
      caption: 'Spectre-3',
      initiative: 2,
      limited: 1,
      cost: 53,
      xws: 'chopper-gauntletfighter',
      ability:
        'At the start of the Engagement Phase, each enemy ship at range 0 gains 2 jam tokens.',
      standard: true,
      wildspace: true,
      epic: true,
      slots: [
        'Crew',
        'Gunner',
        'Device',
        'Modification',
        'Configuration',
        'Title',
      ],
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/chopper-gauntletfighter.png',
      image:
        'https://infinitearenas.com/xw2/images/pilots/chopper-gauntletfighter.png',
      keywords: ['Droid', 'Spectre'],
    },
    {
      name: 'Ezra Bridger',
      caption: 'Spectre-6',
      initiative: 3,
      limited: 1,
      cost: 65,
      xws: 'ezrabridger-gauntletfighter',
      ability:
        'While you defend or perform an attack, if you are stressed, you may spend 1 [Force] to change up to 2 of your [Focus] results to [Evade] or [Hit] results.',
      force: { side: ['light'], value: 1, recovers: 1 },
      standard: true,
      wildspace: true,
      epic: true,
      slots: [
        'Force Power',
        'Crew',
        'Gunner',
        'Device',
        'Modification',
        'Configuration',
        'Title',
      ],
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/ezrabridger-gauntletfighter.png',
      image:
        'https://infinitearenas.com/xw2/images/pilots/ezrabridger-gauntletfighter.png',
      keywords: ['Light Side', 'Spectre'],
    },
    {
      name: 'Mandalorian Resistance Pilot',
      caption: 'Clan Loyalist',
      initiative: 2,
      limited: 0,
      cost: 54,
      xws: 'mandalorianresistancepilot',
      text: "Some Mandalorian warriors, such as those of Clan Kryze, remain unbowed and continue to fight the collaborationist rule of Clan Saxon and its Imperial masters. The Gauntlet Fighter's mix of firepower and speed makes it an ideal transport for their raids.",
      standard: true,
      wildspace: true,
      epic: true,
      slots: [
        'Talent',
        'Crew',
        'Gunner',
        'Device',
        'Modification',
        'Configuration',
        'Title',
      ],
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/mandalorianresistancepilot.png',
      image:
        'https://infinitearenas.com/xw2/images/pilots/mandalorianresistancepilot.png',
      keywords: ['Mandalorian'],
    },
  ],
};

export default t;
