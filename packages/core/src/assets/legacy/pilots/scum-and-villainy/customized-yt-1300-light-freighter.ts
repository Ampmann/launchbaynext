import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'Customized YT-1300 Light Freighter',
  xws: 'customizedyt1300lightfreighter',
  size: 'Large',
  dial: [
    '1BB',
    '1FB',
    '1NB',
    '2TW',
    '2BW',
    '2FB',
    '2NW',
    '2YW',
    '3LR',
    '3TW',
    '3BW',
    '3FB',
    '3NW',
    '3YW',
    '3PR',
    '4FW',
    '4KR',
  ],
  dialCodes: ['CY'],
  faction: 'Scum and Villainy',
  stats: [
    { arc: 'Double Turret Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 1 },
    { type: 'hull', value: 8 },
    { type: 'shields', value: 3 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'Red', type: 'Boost' },
    { difficulty: 'White', type: 'Rotate Arc' },
  ],
  icon: 'https://infinitearenas.com/xw2/images/shipicons/scum-and-villainy/I_CustomizedYT-1300.png',
  pilots: [
    {
      name: 'Freighter Captain',
      initiative: 1,
      limited: 0,
      cost: 41,
      xws: 'freightercaptain',
      text: 'Many spacers make a living traveling the Outer Rim, where the difference between smuggler and legitimate merchant is often murky. On the outskirts of civilization, buyers are rarely so discerning to ask where merchandise came from, at least as long as the price is low enough.',
      slots: [
        'Missile',
        'Crew',
        'Crew',
        'Illicit',
        'Modification',
        'Title',
        'Gunner',
      ],
      image:
        'https://infinitearenas.com/xw2/images/pilots/freightercaptain.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/freightercaptain.png',
      standard: true,
      wildspace: true,
      keywords: ['Freighter', 'YT-1300'],
      epic: true,
    },
    {
      name: 'Han Solo',
      caption: 'The Corellian Kid',
      initiative: 6,
      limited: 1,
      cost: 49,
      xws: 'hansolo',
      ability:
        'While you defend or perform a primary attack, if the attack is obstructed by an obstacle, you may roll 1 additional die.',
      image: 'https://infinitearenas.com/xw2/images/pilots/hansolo.png',
      slots: [
        'Talent',
        'Missile',
        'Crew',
        'Crew',
        'Illicit',
        'Modification',
        'Title',
        'Gunner',
      ],
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/hansolo.png',
      standard: true,
      wildspace: true,
      keywords: ['Freighter', 'YT-1300'],
      epic: true,
    },
    {
      name: 'L3-37',
      caption: 'Droid Revolutionary',
      initiative: 2,
      limited: 1,
      cost: 41,
      xws: 'l337',
      ability:
        'If you are not shielded, decrease the difficulty of your bank ([Bank Left] and [Bank Right]) maneuvers.',
      image: 'https://infinitearenas.com/xw2/images/pilots/l337.png',
      shipActions: [
        { difficulty: 'White', type: 'Calculate' },
        { difficulty: 'White', type: 'Lock' },
        { difficulty: 'Red', type: 'Boost' },
        { difficulty: 'White', type: 'Rotate Arc' },
      ],
      slots: [
        'Missile',
        'Crew',
        'Crew',
        'Gunner',
        'Illicit',
        'Modification',
        'Title',
      ],
      artwork: 'https://infinitearenas.com/xw2/images/artwork/pilots/l337.png',
      standard: true,
      wildspace: true,
      keywords: ['Droid', 'Freighter', 'YT-1300'],
      epic: true,
    },
    {
      name: 'Lando Calrissian',
      caption: 'Smooth-talking Gambler',
      initiative: 4,
      limited: 1,
      cost: 43,
      xws: 'landocalrissian',
      ability:
        'After you roll dice, if you are not stressed, you may gain 1 stress token to reroll all of your blank results.',
      image: 'https://infinitearenas.com/xw2/images/pilots/landocalrissian.png',
      slots: [
        'Talent',
        'Missile',
        'Crew',
        'Crew',
        'Illicit',
        'Modification',
        'Title',
        'Gunner',
      ],
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/landocalrissian.png',
      standard: true,
      wildspace: true,
      keywords: ['Freighter', 'YT-1300'],
      epic: true,
    },
  ],
};

export default t;
