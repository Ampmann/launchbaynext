import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'Xi-class Light Shuttle',
  xws: 'xiclasslightshuttle',
  size: 'Medium',
  dial: [
    '0OR',
    '1BB',
    '1FB',
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
  dialCodes: ['Xi'],
  faction: 'First Order',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 5 },
    { type: 'shields', value: 2 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'Red', type: 'Lock' },
    { difficulty: 'Red', type: 'Coordinate' },
    { difficulty: 'White', type: 'Jam' },
  ],
  pilots: [
    {
      name: 'Agent Terex',
      caption: 'Devious Provocateur',
      xws: 'agentterex',
      initiative: 3,
      cost: 35,
      slots: [
        'Talent',
        'Crew',
        'Crew',
        'Illicit',
        'Illicit',
        'Illicit',
        'Modification',
        'Tech',
        'Tech',
      ],
      limited: 1,
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/agentterex.png',
      image: 'https://infinitearenas.com/xw2/images/pilots/agentterex.png',
      ability:
        'Setup: After placing forces, choose any number of your equipped [Illicit] upgrades and equip them to friendly TIE/fo or TIE/sf fighters. Each ship can be assigned only 1 [Illicit] this way. End of Game: Return all [Illicit] upgrades to their original ships.',
      standard: true,
      wildspace: true,
      epic: true,
    },
    {
      name: 'Commander Malarus',
      caption: 'Vindictive Taskmaster',
      xws: 'commandermalarus-xiclasslightshuttle',
      initiative: 5,
      cost: 44,
      slots: ['Talent', 'Crew', 'Crew', 'Modification', 'Tech', 'Tech'],
      limited: 1,
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/commandermalarus-xiclasslightshuttle.png',
      image:
        'https://infinitearenas.com/xw2/images/pilots/commandermalarus-xiclasslightshuttle.png',
      ability:
        'While a friendly ship at range 0-2 performs a primary attack, before the Modify Dice step, if it has 1 or more blank results, that ship must gain 1 strain token to reroll 1 blank result, if able.',
      standard: true,
      wildspace: true,
      epic: true,
    },
    {
      name: 'First Order Courier',
      xws: 'firstordercourier',
      initiative: 2,
      cost: 32,
      slots: ['Crew', 'Crew', 'Modification', 'Tech', 'Tech'],
      limited: 0,
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/firstordercourier.png',
      image:
        'https://infinitearenas.com/xw2/images/pilots/firstordercourier.png',
      text: 'The First Order lurks in many bases hidden in shadowy corners of the galaxy, slowly spreading its insidious influence.',
      standard: true,
      wildspace: true,
      epic: true,
    },
    {
      name: 'Gideon Hask',
      caption: 'Merciless Hard-Liner',
      initiative: 4,
      limited: 1,
      xws: 'gideonhask-xiclasslightshuttle',
      ability:
        'While you or a friendly small ship at range 0-2 performs a primary attack against a damaged defender, if the attacker rolled 2 or fewer attack dice, it may gain 1 strain token to roll 1 additional attack die.',
      standard: true,
      wildspace: true,
      cost: 40,
      slots: ['Talent', 'Crew', 'Crew', 'Modification', 'Tech', 'Tech'],
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/gideonhask-xiclasslightshuttle.png',
      image:
        'https://infinitearenas.com/xw2/images/pilots/gideonhask-xiclasslightshuttle.png',
      epic: true,
    },
    {
      name: 'Agent Tierny',
      caption: 'Persuasive Recruiter',
      initiative: 3,
      limited: 1,
      xws: 'agenttierny',
      ability:
        'Setup: After placing forces, you must assign the Broken Trust condition to an enemy ship.',
      conditions: ['brokentrust'],
      standard: true,
      wildspace: true,
      cost: 49,
      slots: ['Talent', 'Crew', 'Crew', 'Modification', 'Tech', 'Tech'],
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/agenttierny.png',
      image: 'https://infinitearenas.com/xw2/images/pilots/agenttierny.png',
      epic: true,
    },
  ],
  icon: 'https://infinitearenas.com/xw2/images/shipicons/first-order/I_Xi-class_Shuttle.png',
};

export default t;
