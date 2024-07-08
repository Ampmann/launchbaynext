import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'G-1A Starfighter',
  xws: 'g1astarfighter',
  size: 'Medium',
  dial: [
    '0OR',
    '1TR',
    '1BB',
    '1FB',
    '1NB',
    '1YR',
    '2TW',
    '2BW',
    '2FB',
    '2NW',
    '2YW',
    '2KR',
    '3BR',
    '3FW',
    '3NR',
    '4FR',
    '4KR',
  ],
  dialCodes: ['G1A'],
  faction: 'Scum and Villainy',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 3 },
    { type: 'agility', value: 1 },
    { type: 'hull', value: 5 },
    { type: 'shields', value: 4 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'White', type: 'Jam' },
  ],
  icon: 'https://infinitearenas.com/xw2/images/shipicons/scum-and-villainy/I_MistHunter.png',
  pilots: [
    {
      name: '4-LOM',
      caption: 'Reprogrammed Protocol Droid',
      initiative: 3,
      limited: 1,
      cost: 45,
      xws: '4lom',
      ability:
        'After you fully execute a red maneuver, gain 1 calculate token. At the start of the End Phase, you may choose 1 ship at range 0-1. If you do, transfer 1 of your stress tokens to that ship.',
      image: 'https://infinitearenas.com/xw2/images/pilots/4lom.png',
      slots: [
        'Talent',
        'Sensor',
        'Crew',
        'Crew',
        'Illicit',
        'Modification',
        'Title',
      ],
      shipActions: [
        { difficulty: 'White', type: 'Calculate' },
        { difficulty: 'White', type: 'Lock' },
        { difficulty: 'White', type: 'Jam' },
      ],
      artwork: 'https://infinitearenas.com/xw2/images/artwork/pilots/4lom.png',
      standard: true,
      wildspace: true,
      keywords: ['Bounty Hunter', 'Droid'],
      epic: true,
    },
    {
      name: 'Gand Findsman',
      initiative: 1,
      limited: 0,
      cost: 41,
      xws: 'gandfindsman',
      text: 'The legendary Findsmen of Gand worship the enshrouding mists of their home planet, using signs, augurs, and mystical rituals to track their quarry.',
      image: 'https://infinitearenas.com/xw2/images/pilots/gandfindsman.png',
      slots: ['Sensor', 'Crew', 'Crew', 'Illicit', 'Modification', 'Title'],
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/gandfindsman.png',
      standard: true,
      wildspace: true,
      keywords: ['Bounty Hunter'],
      epic: true,
    },
    {
      name: 'Zuckuss',
      caption: 'Meditative Gand',
      initiative: 3,
      limited: 1,
      cost: 43,
      xws: 'zuckuss',
      ability:
        'While you perform a primary attack, you may roll 1 additional attack die. If you do, the defender rolls 1 additional defense die.',
      image: 'https://infinitearenas.com/xw2/images/pilots/zuckuss.png',
      slots: [
        'Talent',
        'Sensor',
        'Crew',
        'Crew',
        'Illicit',
        'Modification',
        'Title',
      ],
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/zuckuss.png',
      standard: true,
      wildspace: true,
      keywords: ['Bounty Hunter'],
      epic: true,
    },
  ],
};

export default t;
