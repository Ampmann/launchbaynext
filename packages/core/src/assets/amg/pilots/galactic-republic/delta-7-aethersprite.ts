import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'Delta-7 Aethersprite',
  xws: 'delta7aethersprite',
  size: 'Small',
  dial: [
    '1TW',
    '1BB',
    '1NB',
    '1YW',
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
    '4FW',
    '4KR',
    '5FW',
    '5KR',
  ],
  faction: 'Galactic Republic',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 3 },
    { type: 'hull', value: 3 },
    { type: 'shields', value: 1 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'Purple', type: 'Evade' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'White', type: 'Barrel Roll' },
    { difficulty: 'White', type: 'Boost' },
  ],
  ability: {
    name: 'Fine-tuned Controls',
    text: 'After you fully execute a maneuver, you may spend 1 [Force] to perform a [Boost] or [Barrel Roll] action.',
  },
  pilots: [
    {
      name: 'Jedi Knight',
      initiative: 3,
      limited: 0,
      xws: 'jediknight',
      text: 'When the Clone Wars began, the Jedi Knights rallied to the cause of preserving the Republic, assuming command of legions of clone troopers and leading them in battle.',
      force: { value: 1, recovers: 1, side: ['light'] },
      standard: true,
      epic: true,
      cost: 4,
      slots: ['Force Power', 'Astromech', 'Configuration', 'Modification'],
      ffg: 515,
      keywords: ['Jedi', 'Light Side'],
      loadout: 3,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/jediknight.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/jediknight.png',
    },
    {
      name: 'Obi-Wan Kenobi',
      caption: 'Guardian of the Republic',
      initiative: 5,
      limited: 1,
      xws: 'obiwankenobi',
      ability:
        'After a friendly ship at range 0-2 spends a focus token, you may spend 1 [Force]. If you do, that ship gains 1 focus token.',
      force: { value: 3, recovers: 1, side: ['light'] },
      standard: true,
      epic: true,
      cost: 5,
      slots: [
        'Force Power',
        'Force Power',
        'Talent',
        'Astromech',
        'Configuration',
        'Modification',
        'Modification',
      ],
      ffg: 511,
      keywords: ['Jedi', 'Light Side'],
      loadout: 10,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/obiwankenobi.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/obiwankenobi.png',
    },
    {
      name: 'Plo Koon',
      caption: 'Serene Mentor',
      initiative: 5,
      limited: 1,
      xws: 'plokoon',
      ability:
        'At the start of the Engagement Phase, you may spend 1 [Force] and choose another friendly ship at range 0-2. If you do, you may transfer 1 green token to it or transfer one orange token from it to yourself.',
      force: { value: 2, recovers: 1, side: ['light'] },
      standard: true,
      epic: true,
      cost: 5,
      slots: [
        'Force Power',
        'Talent',
        'Astromech',
        'Configuration',
        'Modification',
      ],
      ffg: 513,
      keywords: ['Jedi', 'Light Side'],
      loadout: 14,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/plokoon.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/plokoon.png',
    },
    {
      name: 'Saesee Tiin',
      caption: 'Prophetic Pilot',
      initiative: 4,
      limited: 1,
      xws: 'saeseetiin',
      ability:
        'After a friendly ship at range 0-2 reveals its dial, you may spend 1 [Force]. If you do, set its dial to another maneuver of the same speed and difficulty.',
      force: { value: 2, recovers: 1, side: ['light'] },
      standard: false,
      epic: true,
      cost: 4,
      slots: ['Force Power', 'Astromech', 'Configuration', 'Modification'],
      ffg: 514,
      keywords: ['Jedi', 'Light Side'],
      loadout: 8,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/saeseetiin.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/saeseetiin.png',
    },
    {
      name: 'Mace Windu',
      caption: 'Harsh Traditionalist',
      initiative: 4,
      limited: 1,
      xws: 'macewindu',
      ability: 'After you fully execute a red maneuver, recover 1 [Force].',
      force: { value: 3, recovers: 1, side: ['light'] },
      standard: true,
      epic: true,
      cost: 4,
      slots: [
        'Force Power',
        'Force Power',
        'Astromech',
        'Modification',
        'Configuration',
      ],
      ffg: 512,
      keywords: ['Jedi', 'Light Side'],
      loadout: 7,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/macewindu.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/macewindu.png',
    },
    {
      name: 'Anakin Skywalker',
      caption: 'Hero of the Republic',
      initiative: 6,
      limited: 1,
      xws: 'anakinskywalker',
      ability:
        'After you fully execute a maneuver, if there is an enemy ship in your [Front Arc] at range 0-1 or in your [Bullseye Arc], you may spend 1 [Force] to remove 1 stress token.',
      force: { value: 3, recovers: 1, side: ['light'] },
      standard: true,
      epic: true,
      cost: 6,
      loadout: 10,
      slots: [
        'Force Power',
        'Force Power',
        'Talent',
        'Astromech',
        'Configuration',
        'Modification',
      ],
      ffg: 507,
      extended: true,
      keywords: ['Jedi', 'Light Side'],
      image: 'https://infinitearenas.com/xw2/images/pilots/anakinskywalker.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/anakinskywalker.png',
    },
    {
      name: 'Ahsoka Tano',
      caption: '“Snips"',
      initiative: 3,
      limited: 1,
      xws: 'ahsokatano',
      ability:
        'After you fully execute a maneuver, you may choose a friendly ship at range 0-1 and spend 1 [Force]. That ship may perform an action, even if it is stressed.',
      force: { value: 2, recovers: 1, side: ['light'] },
      standard: true,
      epic: true,
      cost: 4,
      slots: ['Force Power', 'Astromech', 'Configuration', 'Modification'],
      ffg: 510,
      loadout: 7,
      extended: true,
      keywords: ['Jedi', 'Light Side'],
      image: 'https://infinitearenas.com/xw2/images/pilots/ahsokatano.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/ahsokatano.png',
    },
    {
      name: 'Barriss Offee',
      caption: 'Conflicted Padawan',
      initiative: 4,
      limited: 1,
      xws: 'barrissoffee',
      ability:
        'While a friendly ship at range 0-2 performs an attack, if the defender is in its [Bullseye Arc], you may spend 1 [Force] to change 1 [Focus] result to a [Hit] result or 1 [Hit] result to a [Critical Hit] result.',
      force: { value: 1, recovers: 1, side: ['light'] },
      standard: true,
      epic: true,
      cost: 4,
      slots: ['Force Power', 'Astromech', 'Configuration', 'Modification'],
      ffg: 509,
      loadout: 9,
      extended: true,
      keywords: ['Jedi', 'Light Side'],
      image: 'https://infinitearenas.com/xw2/images/pilots/barrissoffee.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/barrissoffee.png',
    },
    {
      name: 'Luminara Unduli',
      caption: 'Wise Protector',
      initiative: 4,
      limited: 1,
      xws: 'luminaraunduli',
      ability:
        "While a friendly ship at range 0-2 defends, if it is not in the attacker's [Bullseye Arc], you may spend 1 [Force]. If you do, change 1 [Critical Hit] result to a [Hit] result or 1 [Hit] result to a [Focus] result.",
      force: { value: 2, recovers: 1, side: ['light'] },
      standard: true,
      epic: true,
      cost: 4,
      slots: ['Force Power', 'Astromech', 'Configuration', 'Modification'],
      ffg: 508,
      keywords: ['Jedi', 'Light Side'],
      loadout: 7,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/luminaraunduli.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/luminaraunduli.png',
    },
    {
      name: 'Adi Gallia',
      caption: 'Shooting Star',
      initiative: 5,
      limited: 1,
      xws: 'adigallia',
      ability:
        'While you defend at attack range 1, you may spend 1 [Force]. If you do, the attacker cannot apply the range bonus. While you perform an attack against a defender at attack range 3, you may spend 1 [Force]. If you do, the defender cannot apply the range bonus.',
      shipAbility: {
        name: 'Fine-tuned Controls',
        text: 'After you fully execute a maneuver, you may spend 1 [Force] to perform a [Boost] or [Barrel Roll] action.',
      },
      force: { value: 2, recovers: 1, side: ['light'] },
      standard: true,
      extended: true,
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/adigallia.png',
      image: 'https://infinitearenas.com/xw2/images/pilots/adigallia.png',
      cost: 5,
      loadout: 12,
      slots: [
        'Force Power',
        'Talent',
        'Astromech',
        'Configuration',
        'Modification',
      ],
      keywords: ['Jedi', 'Light Side'],
      epic: true,
    },
  ],
  ffg: 61,
  icon: 'https://infinitearenas.com/xw2/images/shipicons/galactic-republic/I_Delta-7.png',
};

export default t;
