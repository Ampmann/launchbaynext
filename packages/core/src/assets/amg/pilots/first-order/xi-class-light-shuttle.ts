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
      xws: 'agentterex',
      ffg: 658,
      name: 'Agent Terex',
      cost: 4,
      limited: 1,
      initiative: 3,
      caption: 'Devious Provocateur',
      slots: [
        'Talent',
        'Tech',
        'Tech',
        'Crew',
        'Illicit',
        'Illicit',
        'Illicit',
        'Modification',
      ],
      standard: true,
      epic: true,
      ability:
        'Setup: After placing forces, choose any number of your equipped [Illicit] upgrades and equip them to friendly TIE/fo or TIE/sf fighters. Each ship can be assigned only 1 [Illicit] this way. End of Game: Return all [Illicit] upgrades to their original ships.',
      loadout: 13,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/agentterex.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/agentterex.png',
    },
    {
      xws: 'commandermalarus-xiclasslightshuttle',
      ffg: 656,
      name: 'Commander Malarus',
      cost: 4,
      loadout: 15,
      limited: 1,
      initiative: 5,
      caption: 'Vindictive Taskmaster',
      slots: [
        'Talent',
        'Tech',
        'Tech',
        'Crew',
        'Crew',
        'Modification',
        'Modification',
      ],
      standard: true,
      epic: true,
      ability:
        'While a friendly ship at range 0-2 performs a primary attack, before the Modify Dice step, if it has 1 or more blank results, that ship must gain 1 strain token to reroll 1 blank result, if able.',
      extended: true,
      image:
        'https://infinitearenas.com/xw2/images/pilots/commandermalarus-xiclasslightshuttle.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/commandermalarus-xiclasslightshuttle.png',
    },
    {
      xws: 'firstordercourier',
      ffg: 659,
      name: 'First Order Courier',
      cost: 4,
      limited: 0,
      initiative: 2,
      slots: ['Tech', 'Tech', 'Crew', 'Modification'],
      standard: true,
      epic: true,
      text: 'The First Order lurks in many bases hidden in shadowy corners of the galaxy, slowly spreading its insidious influence.',
      loadout: 10,
      extended: true,
      image:
        'https://infinitearenas.com/xw2/images/pilots/firstordercourier.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/firstordercourier.png',
    },
    {
      xws: 'gideonhask-xiclasslightshuttle',
      ffg: 657,
      name: 'Gideon Hask',
      cost: 4,
      limited: 1,
      initiative: 4,
      caption: 'Merciless Hard-Liner',
      slots: [
        'Talent',
        'Talent',
        'Tech',
        'Tech',
        'Crew',
        'Crew',
        'Modification',
      ],
      standard: true,
      epic: true,
      ability:
        'While you or a friendly small ship at range 0-2 performs a primary attack against a damaged defender, if the attacker rolled 2 or fewer attack dice, it may gain 1 strain token to roll 1 additional attack die.',
      loadout: 15,
      extended: true,
      image:
        'https://infinitearenas.com/xw2/images/pilots/gideonhask-xiclasslightshuttle.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/gideonhask-xiclasslightshuttle.png',
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
      extended: true,
      cost: 5,
      loadout: 15,
      shipActions: [
        { difficulty: 'White', type: 'Focus' },
        { difficulty: 'White', type: 'Lock' },
        { difficulty: 'Red', type: 'Coordinate' },
        { difficulty: 'White', type: 'Jam' },
      ],
      slots: [
        'Talent',
        'Talent',
        'Tech',
        'Crew',
        'Crew',
        'Modification',
        'Modification',
      ],
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/agenttierny.png',
      image: 'https://infinitearenas.com/xw2/images/pilots/agenttierny.png',
      epic: true,
    },
  ],
  ffg: 73,
  icon: 'https://infinitearenas.com/xw2/images/shipicons/first-order/I_Xi-class_Shuttle.png',
};

export default t;