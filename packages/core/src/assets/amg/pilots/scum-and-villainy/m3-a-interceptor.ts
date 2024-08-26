import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'M3-A Interceptor',
  xws: 'm3ainterceptor',
  ffg: 44,
  size: 'Small',
  dial: [
    '1TW',
    '1BB',
    '1NB',
    '1YW',
    '2TW',
    '2BW',
    '2FB',
    '2NW',
    '2YW',
    '3BW',
    '3FB',
    '3NW',
    '3KR',
    '4FW',
    '5FW',
    '5KR',
  ],
  faction: 'Scum and Villainy',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 3 },
    { type: 'hull', value: 3 },
    { type: 'shields', value: 1 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Evade' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'White', type: 'Barrel Roll' },
  ],
  ability: {
    name: 'Weapon Hardpoint',
    text: 'You can equip 1 [Cannon], [Torpedo], or [Missile] upgrade.',
    slotOptions: ['Cannon', 'Torpedo', 'Missile'],
  },
  icon: 'https://infinitearenas.com/xw2/images/shipicons/scum-and-villainy/I_Scyk.png',
  pilots: [
    {
      name: 'Cartel Spacer',
      initiative: 1,
      limited: 0,
      cost: 3,
      xws: 'cartelspacer',
      text: 'MandalMotors\' M3-A "Scyk" Interceptor is purchased in large quantities by the Hutt Cartel and the Car\'das smugglers due to its low cost and customizability.',
      slots: ['Modification'],
      ffg: 190,
      standard: true,
      epic: true,
      loadout: 4,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/cartelspacer.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/cartelspacer.png',
    },
    {
      name: 'Genesis Red',
      caption: 'Tansarii Point Crime Lord',
      initiative: 4,
      limited: 1,
      cost: 4,
      xws: 'genesisred',
      ability:
        'After you acquire a lock, you must remove all of your focus and evade tokens. Then, gain the same number of focus and evade tokens that the locked ship has.',
      slots: ['Talent', 'Illicit', 'Modification'],
      ffg: 184,
      standard: true,
      epic: true,
      loadout: 14,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/genesisred.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/genesisred.png',
    },
    {
      name: 'Inaldra',
      caption: 'Tansarii Point Boss',
      initiative: 2,
      limited: 1,
      cost: 3,
      xws: 'inaldra',
      ability:
        'While you defend or perform an attack, you may suffer 1 [Hit] damage to reroll any number of your dice.',
      slots: ['Modification'],
      ffg: 187,
      standard: true,
      epic: true,
      loadout: 11,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/inaldra.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/inaldra.png',
    },
    {
      name: 'Laetin A’shera',
      caption: 'Car’das Enforcer',
      initiative: 3,
      limited: 1,
      cost: 3,
      xws: 'laetinashera',
      ability:
        'After you defend or perform an attack, if the attack missed, gain 1 evade token.',
      slots: ['Talent', 'Modification'],
      ffg: 185,
      standard: true,
      epic: true,
      loadout: 9,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/laetinashera.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/laetinashera.png',
    },
    {
      name: 'Quinn Jast',
      caption: 'Fortune Seeker',
      initiative: 3,
      limited: 1,
      cost: 3,
      xws: 'quinnjast',
      ability:
        'At the start of the Engagement Phase, you may gain 1 disarm token to recover 1 [Charge] on 1 of your equipped upgrades.',
      slots: ['Talent', 'Modification'],
      ffg: 186,
      standard: true,
      epic: true,
      loadout: 12,
      extended: true,
      keywords: ['Bounty Hunter'],
      image: 'https://infinitearenas.com/xw2/images/pilots/quinnjast.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/quinnjast.png',
    },
    {
      name: 'Serissu',
      caption: 'Flight Instructor',
      initiative: 5,
      limited: 1,
      cost: 4,
      xws: 'serissu',
      ability:
        'While a friendly ship at range 0-1 defends, it may reroll 1 of its dice.',
      slots: ['Talent', 'Talent', 'Cannon', 'Modification', 'Modification'],
      ffg: 183,
      standard: true,
      epic: true,
      loadout: 12,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/serissu.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/serissu.png',
    },
    {
      name: 'Sunny Bounder',
      caption: 'Incurable Optimist',
      initiative: 1,
      limited: 1,
      cost: 3,
      xws: 'sunnybounder',
      ability:
        'While you defend or perform an attack, after you roll or reroll your dice, if you have the same result on each of your dice, you may add 1 matching result.',
      slots: ['Modification'],
      ffg: 188,
      standard: true,
      epic: true,
      loadout: 8,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/sunnybounder.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/sunnybounder.png',
    },
    {
      name: 'Tansarii Point Veteran',
      initiative: 3,
      limited: 0,
      cost: 3,
      xws: 'tansariipointveteran',
      text: "The defeat of Black Sun ace Talonbane Cobra by Car'das smugglers turned the tide of the Battle of Tansarii Point Station. Survivors of the clash are respected throughout the sector.",
      slots: ['Modification'],
      ffg: 189,
      standard: true,
      epic: true,
      loadout: 3,
      extended: true,
      image:
        'https://infinitearenas.com/xw2/images/pilots/tansariipointveteran.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/tansariipointveteran.png',
    },
    {
      name: 'G4R-G0R V/M',
      xws: 'g4rgorvm',
      initiative: 0,
      limited: 1,
      caption: 'Tilted Droid',
      standard: true,
      slots: ['Modification'],
      ability:
        'After you defend, each other ship at range 0 suffers 1 [Critical Hit] damage.',
      cost: 3,
      ffg: 636,
      shipActions: [
        { difficulty: 'White', type: 'Calculate' },
        { difficulty: 'White', type: 'Evade' },
        { difficulty: 'White', type: 'Lock' },
        { difficulty: 'White', type: 'Barrel Roll' },
      ],
      epic: true,
      keywords: ['Droid'],
      loadout: 9,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/g4rgorvm.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/g4rgorvm.png',
    },
  ],
};

export default t;