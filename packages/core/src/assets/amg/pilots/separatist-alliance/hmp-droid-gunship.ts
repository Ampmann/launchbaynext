import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'HMP Droid Gunship',
  xws: 'hmpdroidgunship',
  size: 'Small',
  dial: [
    '0OR',
    '1BR',
    '1FB',
    '1NR',
    '2TB',
    '2BW',
    '2FB',
    '2NW',
    '2YB',
    '3TW',
    '3BR',
    '3FW',
    '3NR',
    '3YW',
    '4FR',
    '5FR',
  ],
  faction: 'Separatist Alliance',
  stats: [
    { arc: 'Full Front Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 1 },
    { type: 'hull', value: 5 },
    { type: 'shields', value: 3 },
  ],
  actions: [
    { difficulty: 'White', type: 'Calculate' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'Red', type: 'Barrel Roll' },
    {
      difficulty: 'White',
      type: 'Reload',
      linked: { difficulty: 'Red', type: 'Calculate' },
    },
  ],
  ability: {
    name: 'Networked Aim',
    text: 'You cannot spend your locks to reroll attack dice.  While you perform an attack, you may reroll a number of attack dice up to the number of friendly locks on the defender.',
  },
  pilots: [
    {
      xws: 'dgs047',
      name: 'DGS-047',
      caption: 'Adaptive Intelligence',
      cost: 3,
      initiative: 1,
      limited: 1,
      ability:
        'After you perform an attack, if the defender is in your [Front Arc], you may acquire a lock on it. Then, if the defender is in your [Bullseye Arc], it gains 1 strain token.',
      slots: [
        'Missile',
        'Missile',
        'Tactical Relay',
        'Crew',
        'Device',
        'Modification',
        'Configuration',
      ],
      standard: true,
      epic: true,
      ffg: 666,
      keywords: ['Droid'],
      loadout: 8,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/dgs047.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/dgs047.png',
    },
    {
      xws: 'baktoiddrone',
      name: 'Baktoid Drone',
      cost: 4,
      initiative: 1,
      limited: 0,
      slots: ['Missile', 'Device', 'Modification', 'Configuration'],
      standard: true,
      epic: true,
      ffg: 669,
      text: 'A late-war development for the Confederacy of Independent Systems, the droid gunship uses specialized repulsors to nimbly strafe targets and precisely drop battle droids.',
      keywords: ['Droid'],
      loadout: 8,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/baktoiddrone.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/baktoiddrone.png',
    },
    {
      xws: 'geonosianprototype',
      name: 'Geonosian Prototype',
      caption: 'Devastation Protocols',
      cost: 4,
      initiative: 2,
      limited: 2,
      ability:
        'While you perform a [Missile] or [Cannon] attack, you may remove 1 tractor token from the defender to reroll up to 2 attack dice.',
      slots: [
        'Missile',
        'Missile',
        'Cannon',
        'Cannon',
        'Tactical Relay',
        'Modification',
        'Configuration',
      ],
      standard: true,
      epic: true,
      ffg: 668,
      keywords: ['Droid'],
      loadout: 12,
      extended: true,
      image:
        'https://infinitearenas.com/xw2/images/pilots/geonosianprototype.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/geonosianprototype.png',
    },
    {
      xws: 'dgs286',
      name: 'DGS-286',
      caption: 'Ambush Protocols',
      cost: 3,
      initiative: 3,
      limited: 1,
      ability:
        'Before you engage, you may choose another friendly ship at range 0-1. That ship transfers 1 calculate token to you.',
      slots: [
        'Missile',
        'Missile',
        'Tactical Relay',
        'Crew',
        'Device',
        'Modification',
        'Configuration',
      ],
      standard: true,
      epic: true,
      ffg: 664,
      keywords: ['Droid'],
      loadout: 7,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/dgs286.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/dgs286.png',
    },
    {
      xws: 'onderonoppressor',
      name: 'Onderon Oppressor',
      caption: 'Atmospheric Attack Module',
      cost: 4,
      initiative: 3,
      limited: 2,
      ability:
        'After you barrel roll or sideslip, if you are stressed, gain 1 calculate token.',
      slots: [
        'Missile',
        'Missile',
        'Crew',
        'Device',
        'Modification',
        'Configuration',
      ],
      standard: true,
      epic: true,
      ffg: 665,
      keywords: ['Droid'],
      loadout: 15,
      extended: true,
      image:
        'https://infinitearenas.com/xw2/images/pilots/onderonoppressor.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/onderonoppressor.png',
    },
    {
      name: 'Separatist Predator',
      initiative: 3,
      limited: 0,
      xws: 'separatistpredator',
      text: 'Armed with ordnance and protected by ray shields, a droid gunship can devastate Republic infantry formations and starfighters with equal proficiency.',
      standard: true,
      epic: true,
      slots: ['Missile', 'Missile', 'Device', 'Modification', 'Configuration'],
      cost: 4,
      ffg: 667,
      keywords: ['Droid'],
      loadout: 9,
      extended: true,
      image:
        'https://infinitearenas.com/xw2/images/pilots/separatistpredator.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/separatistpredator.png',
    },
  ],
  ffg: 75,
  icon: 'https://infinitearenas.com/xw2/images/shipicons/separatist-alliance/I_HMP_Droid_Gunship.png',
};

export default t;