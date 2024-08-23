import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'TIE/ca Punisher',
  xws: 'tiecapunisher',
  ffg: 20,
  size: 'Medium',
  dial: [
    '0OR',
    '1BB',
    '1FB',
    '1NB',
    '2TW',
    '2BW',
    '2FB',
    '2NW',
    '2YW',
    '3TR',
    '3BW',
    '3FW',
    '3NW',
    '3YR',
    '4KR',
  ],
  faction: 'Galactic Empire',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 1 },
    { type: 'hull', value: 6 },
    { type: 'shields', value: 3 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'Red', type: 'Barrel Roll' },
    {
      difficulty: 'White',
      linked: { difficulty: 'Red', type: 'Lock' },
      type: 'Boost',
    },
    { difficulty: 'White', type: 'Reload' },
  ],
  icon: 'https://infinitearenas.com/xw2/images/shipicons/galactic-empire/I_TIEPunisher.png',
  pilots: [
    {
      name: '“Deathrain”',
      caption: 'Dexterous Bombardier',
      initiative: 4,
      limited: 1,
      cost: 6,
      xws: 'deathrain',
      ability: 'After you drop or launch a device, you may perform an action.',
      slots: [
        'Talent',
        'Sensor',
        'Torpedo',
        'Missile',
        'Gunner',
        'Device',
        'Device',
        'Modification',
      ],
      ffg: 140,
      standard: false,
      epic: true,
      keywords: ['TIE'],
      loadout: 20,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/deathrain.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/deathrain.png',
    },
    {
      name: '“Redline”',
      caption: 'Adrenaline Junkie',
      initiative: 5,
      limited: 1,
      cost: 7,
      xws: 'redline',
      ability:
        'You can maintain up to 2 locks. After you perform an action, you may acquire a lock.',
      slots: [
        'Sensor',
        'Torpedo',
        'Missile',
        'Missile',
        'Gunner',
        'Device',
        'Modification',
        'Modification',
      ],
      ffg: 139,
      standard: false,
      epic: true,
      keywords: ['TIE'],
      loadout: 25,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/redline.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/redline.png',
    },
    {
      name: 'Cutlass Squadron Pilot',
      initiative: 2,
      limited: 0,
      cost: 5,
      xws: 'cutlasssquadronpilot',
      text: "The TIE punisher's design builds upon the success of the TIE bomber, adding shielding, a second bomb chute, and three additional ordnance pods, each equipped with a twin ion engine.",
      slots: [
        'Sensor',
        'Torpedo',
        'Missile',
        'Gunner',
        'Device',
        'Modification',
      ],
      ffg: 141,
      standard: false,
      epic: true,
      keywords: ['TIE'],
      loadout: 6,
      extended: true,
      image:
        'https://infinitearenas.com/xw2/images/pilots/cutlasssquadronpilot.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/cutlasssquadronpilot.png',
    },
  ],
};

export default t;
