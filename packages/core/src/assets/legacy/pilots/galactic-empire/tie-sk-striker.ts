import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'TIE/sk Striker',
  xws: 'tieskstriker',
  size: 'Small',
  dial: [
    '1TW',
    '1BB',
    '1FB',
    '1NB',
    '1YW',
    '1KR',
    '2LR',
    '2TW',
    '2BB',
    '2FB',
    '2NB',
    '2YW',
    '2PR',
    '3BW',
    '3FB',
    '3NW',
  ],
  dialCodes: ['TS'],
  faction: 'Galactic Empire',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 3 },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 4 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Evade' },
    { difficulty: 'White', type: 'Barrel Roll' },
  ],
  icon: 'https://infinitearenas.com/xw2/images/shipicons/galactic-empire/I_TIEStriker.png',
  pilots: [
    {
      name: '“Countdown”',
      caption: 'Death Defier',
      initiative: 4,
      limited: 1,
      cost: 40,
      xws: 'countdown',
      ability:
        'While you defend, after the Neutralize Results step, if you are not stressed, you may suffer 1 [Hit] damage and gain 1 stress token. If you do, cancel all dice results.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_118.png',
      shipAbility: {
        name: 'Adaptive Ailerons',
        text: 'Before you reveal your dial, if you are not stressed, you must execute a white [1 [Bank Left]], [1 [Straight]], or [1 [Bank Right]] maneuver.',
      },
      slots: ['Talent', 'Device', 'Modification', 'Gunner'],
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/countdown.png',
      standard: true,
      wildspace: true,
      keywords: ['TIE'],
      epic: true,
    },
    {
      name: '“Duchess”',
      caption: 'Urbane Ace',
      initiative: 5,
      limited: 1,
      cost: 44,
      xws: 'duchess',
      ability:
        'You may choose not to use your Adaptive Ailerons. You may use your Adaptive Ailerons even while stressed.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_117.png',
      shipAbility: {
        name: 'Adaptive Ailerons',
        text: 'Before you reveal your dial, if you are not stressed, you must execute a white [1 [Bank Left]], [1 [Straight]], or [1 [Bank Right]] maneuver.',
      },
      slots: ['Talent', 'Device', 'Modification', 'Gunner'],
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/duchess.png',
      standard: true,
      wildspace: true,
      keywords: ['TIE'],
      epic: true,
    },
    {
      name: '“Pure Sabacc”',
      caption: 'Confident Gambler',
      initiative: 4,
      limited: 1,
      cost: 42,
      xws: 'puresabacc',
      ability:
        'While you perform an attack, if you have 1 or fewer damage cards, you may roll 1 additional attack die.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_119.png',
      shipAbility: {
        name: 'Adaptive Ailerons',
        text: 'Before you reveal your dial, if you are not stressed, you must execute a white [1 [Bank Left]], [1 [Straight]], or [1 [Bank Right]] maneuver.',
      },
      slots: ['Talent', 'Device', 'Modification', 'Gunner'],
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/puresabacc.png',
      standard: true,
      wildspace: true,
      keywords: ['TIE'],
      epic: true,
    },
    {
      name: 'Black Squadron Scout',
      initiative: 3,
      limited: 0,
      cost: 34,
      xws: 'blacksquadronscout',
      text: 'These heavily armed atmospheric craft employ their specialized moveable wings to gain additional speed and maneuverability.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_120.png',
      shipAbility: {
        name: 'Adaptive Ailerons',
        text: 'Before you reveal your dial, if you are not stressed, you must execute a white [1 [Bank Left]], [1 [Straight]], or [1 [Bank Right]] maneuver.',
      },
      slots: ['Talent', 'Device', 'Modification', 'Gunner'],
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/blacksquadronscout.png',
      standard: true,
      wildspace: true,
      keywords: ['TIE'],
      epic: true,
    },
    {
      name: 'Planetary Sentinel',
      initiative: 1,
      limited: 0,
      cost: 31,
      xws: 'planetarysentinel',
      text: 'To protect its many military installations, the Empire requires a swift and vigilant defense force.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_121.png',
      shipAbility: {
        name: 'Adaptive Ailerons',
        text: 'Before you reveal your dial, if you are not stressed, you must execute a white [1 [Bank Left]], [1 [Straight]], or [1 [Bank Right]] maneuver.',
      },
      slots: ['Device', 'Modification', 'Gunner'],
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/planetarysentinel.png',
      standard: true,
      wildspace: true,
      keywords: ['TIE'],
      epic: true,
    },
    {
      name: '“Vagabond”',
      xws: 'vagabond',
      initiative: 2,
      limited: 1,
      shipAbility: {
        name: 'Adaptive Ailerons',
        text: 'Before you reveal your dial, if you are not stressed, you must execute a white [1 [Bank Left]], [1 [Straight]], or [1 [Bank Right]] maneuver.',
      },
      caption: 'Destitute Demolitionist',
      standard: true,
      wildspace: true,
      slots: ['Talent', 'Gunner', 'Device', 'Modification'],
      ability:
        'After you fully execute a maneuver using your Adaptive Ailerons, if you are not stressed, you may drop 1 device.',
      cost: 32,
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/vagabond.png',
      image: 'https://infinitearenas.com/xw2/images/pilots/vagabond.png',
      keywords: ['TIE'],
      epic: true,
    },
  ],
};

export default t;
