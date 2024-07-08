import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'Hyena-class Droid Bomber',
  xws: 'hyenaclassdroidbomber',
  size: 'Small',
  dial: [
    '1TW',
    '1BR',
    '1FW',
    '1NR',
    '1YW',
    '2ER',
    '2TB',
    '2BW',
    '2FB',
    '2NW',
    '2YB',
    '2RR',
    '2KR',
    '3TW',
    '3FB',
    '3YW',
    '4FW',
    '5FR',
  ],
  dialCodes: ['HDB'],
  faction: 'Separatist Alliance',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 5 },
  ],
  actions: [
    { difficulty: 'White', type: 'Calculate' },
    { difficulty: 'White', type: 'Lock' },
    {
      difficulty: 'White',
      type: 'Barrel Roll',
      linked: { difficulty: 'Red', type: 'Lock' },
    },
    { difficulty: 'Red', type: 'Reload' },
  ],
  pilots: [
    {
      name: 'Techno Union Bomber',
      initiative: 1,
      limited: 0,
      xws: 'technounionbomber',
      shipAbility: {
        name: 'Networked Calculations',
        text: 'While you defend or perform an attack, you may spend 1 calculate token from a friendly ship at range 0-1 to change 1 [Focus] result to an [Evade] or [Hit] result.',
      },
      standard: true,
      wildspace: true,
      cost: 26,
      slots: ['Torpedo', 'Missile', 'Device', 'Modification', 'Configuration'],
      text: 'Baktoid Armor Workshop developed the Hyena as a strike craft compatible with Trade Federation Vulture swarm tactics.',
      image:
        'https://infinitearenas.com/xw2/images/pilots/technounionbomber.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/technounionbomber.png',
      keywords: ['Droid'],
      epic: true,
    },
    {
      name: 'Bombardment Drone',
      caption: 'Time on Target',
      limited: 3,
      initiative: 3,
      xws: 'bombardmentdrone',
      shipAbility: {
        name: 'Networked Calculations',
        text: 'While you defend or perform an attack, you may spend 1 calculate token from a friendly ship at range 0-1 to change 1 [Focus] result to an [Evade] or [Hit] result.',
      },
      ability:
        'If you would drop a device, you may launch that device instead, using the same template.',
      image:
        'https://infinitearenas.com/xw2/images/pilots/bombardmentdrone.png',
      standard: true,
      wildspace: true,
      cost: 31,
      slots: ['Sensor', 'Device', 'Device', 'Modification', 'Configuration'],
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/bombardmentdrone.png',
      keywords: ['Droid'],
      epic: true,
    },
    {
      name: 'DBS-404',
      caption: 'Preservation Protocol Not Found',
      xws: 'dbs404',
      initiative: 4,
      limited: 1,
      shipAbility: {
        name: 'Networked Calculations',
        text: 'While you defend or perform an attack, you may spend 1 calculate token from a friendly ship at range 0-1 to change 1 [Focus] result to an [Evade] or [Hit] result.',
      },
      standard: true,
      wildspace: true,
      cost: 31,
      slots: ['Torpedo', 'Missile', 'Device', 'Modification', 'Configuration'],
      ability:
        'You can perform primary attacks at range 0. While you perform an attack at attack range 0-1, you must roll 1 additional die. After the attack hits, suffer 1 [Critical Hit] damage.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/en/3e647295c7237a5eb36b94d887eb8e56.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/dbs404.png',
      keywords: ['Droid'],
      epic: true,
    },
    {
      name: 'Baktoid Prototype',
      caption: 'Function over Form',
      xws: 'baktoidprototype',
      initiative: 1,
      limited: 2,
      ability:
        'While you perform a special attack, if a friendly ship with the Networked Calculations ship ability has a lock on the defender, you may ignore the [Focus], [Calculate], or [Lock] requirement of that attack.',
      image:
        'https://infinitearenas.com/xw2/images/pilots/baktoidprototype.png',
      shipAbility: {
        name: 'Networked Calculations',
        text: 'While you defend or perform an attack, you may spend 1 calculate token from a friendly ship at range 0-1 to change 1 [Focus] result to an [Evade] or [Hit] result.',
      },
      standard: true,
      wildspace: true,
      cost: 26,
      slots: ['Sensor', 'Missile', 'Missile', 'Modification', 'Configuration'],
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/baktoidprototype.png',
      keywords: ['Droid'],
      epic: true,
    },
    {
      name: 'Separatist Bomber',
      xws: 'separatistbomber',
      initiative: 3,
      limited: 0,
      text: 'The droid armies of the Separatists are callous to the plight of civilians and make no effort to limit collateral damage.',
      image:
        'https://infinitearenas.com/xw2/images/pilots/separatistbomber.png',
      shipAbility: {
        name: 'Networked Calculations',
        text: 'While you defend or perform an attack, you may spend 1 calculate token from a friendly ship at range 0-1 to change 1 [Focus] result to an [Evade] or [Hit] result.',
      },
      standard: true,
      wildspace: true,
      cost: 28,
      slots: ['Torpedo', 'Missile', 'Device', 'Modification', 'Configuration'],
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/separatistbomber.png',
      keywords: ['Droid'],
      epic: true,
    },
    {
      name: 'DBS-32C',
      xws: 'dbs32c',
      caption: 'Droid Control Signal Relay',
      limited: 1,
      initiative: 3,
      ability:
        'At the start of the Engagement Phase, you may spend 1 calculate token to perform a [Coordinate] action. You cannot coordinate ships that do not have the Networked Calculations ship ability.',
      image: 'https://infinitearenas.com/xw2/images/pilots/dbs32c.png',
      shipAbility: {
        name: 'Networked Calculations',
        text: 'While you defend or perform an attack, you may spend 1 calculate token from a friendly ship at range 0-1 to change 1 [Focus] result to an [Evade] or [Hit] result.',
      },
      shipActions: [
        { difficulty: 'White', type: 'Calculate' },
        { difficulty: 'White', type: 'Lock' },
        {
          difficulty: 'White',
          type: 'Barrel Roll',
          linked: { difficulty: 'Red', type: 'Lock' },
        },
        { difficulty: 'Red', type: 'Jam' },
      ],
      standard: true,
      wildspace: true,
      cost: 37,
      slots: ['Sensor', 'Tactical Relay', 'Modification', 'Configuration'],
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/dbs32c.png',
      keywords: ['Droid'],
      epic: true,
    },
    {
      name: 'DBS-32C',
      caption: 'Siege of Coruscant',
      initiative: 3,
      limited: 1,
      cost: 38,
      charges: { value: 2, recovers: 0 },
      xws: 'dbs32c-siegeofcoruscant',
      ability:
        'After you perform a [Calculate] action, you may spend 1 [Charge] to perform a [Jam] action.',
      shipAbility: {
        name: 'Networked Calculations',
        text: 'While you defend or perform an attack, you may spend 1 calculate token from a friendly ship at range 0-1 to change 1 [Focus] result to an [Evade] or [Hit] result.',
      },
      shipActions: [
        { difficulty: 'White', type: 'Calculate' },
        { difficulty: 'White', type: 'Lock' },
        {
          difficulty: 'White',
          type: 'Barrel Roll',
          linked: { difficulty: 'Red', type: 'Lock' },
        },
        { difficulty: 'Red', type: 'Jam' },
      ],
      image:
        'https://infinitearenas.com/xw2/images/quickbuilds/dbs32c-siegeofcoruscant.png',
      standardLoadout: [
        'plasmatorpedoes',
        'contingencyprotocol-siegeofcoruscant',
        'strutlockoverride-siegeofcoruscant',
      ],
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/dbs32c.png',
      standard: false,
      wildspace: true,
      keywords: ['Droid'],
      epic: true,
    },
    {
      name: 'DBS-32C',
      caption: 'Siege of Coruscant',
      initiative: 3,
      limited: 1,
      cost: 30,
      charges: { value: 2, recovers: 0 },
      xws: 'dbs32c-siegeofcoruscant-lsl',
      ability:
        'After you perform a [Calculate] action, you may spend 1 [Charge] to perform a [Jam] action.',
      shipAbility: {
        name: 'Networked Calculations',
        text: 'While you defend or perform an attack, you may spend 1 calculate token from a friendly ship at range 0-1 to change 1 [Focus] result to an [Evade] or [Hit] result.',
      },
      shipActions: [
        { difficulty: 'White', type: 'Calculate' },
        { difficulty: 'White', type: 'Lock' },
        {
          difficulty: 'White',
          type: 'Barrel Roll',
          linked: { difficulty: 'Red', type: 'Lock' },
        },
        { difficulty: 'Red', type: 'Jam' },
      ],
      image:
        'https://infinitearenas.com/xw2/images/quickbuilds/dbs32c-siegeofcoruscant.png',
      slots: ['Sensor', 'Tactical Relay', 'Modification', 'Configuration'],
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/dbs32c.png',
      standard: true,
      wildspace: true,
      keywords: ['Droid'],
      epic: true,
    },
    {
      name: 'DBS-404',
      caption: 'Siege of Coruscant',
      initiative: 4,
      limited: 1,
      cost: 36,
      xws: 'dbs404-siegeofcoruscant',
      ability:
        'While you perform an attack at range 1, you must roll 1 additional die. After the attack hits, suffer 1 [Critical Hit] damage.',
      shipAbility: {
        name: 'Networked Calculations',
        text: 'While you defend or perform an attack, you may spend 1 calculate token from a friendly ship at range 0-1 to change 1 [Focus] result to an [Evade] or [Hit] result.',
      },
      image:
        'https://infinitearenas.com/xw2/images/quickbuilds/dbs404-siegeofcoruscant.png',
      standardLoadout: [
        'advprotontorpedoes',
        'contingencyprotocol-siegeofcoruscant',
        'strutlockoverride-siegeofcoruscant',
      ],
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/dbs404.png',
      standard: false,
      wildspace: true,
      keywords: ['Droid'],
      epic: true,
    },
    {
      name: 'DBS-404',
      caption: 'Siege of Coruscant',
      initiative: 4,
      limited: 1,
      cost: 30,
      xws: 'dbs404-siegeofcoruscant-lsl',
      ability:
        'While you perform an attack at range 1, you must roll 1 additional die. After the attack hits, suffer 1 [Critical Hit] damage.',
      shipAbility: {
        name: 'Networked Calculations',
        text: 'While you defend or perform an attack, you may spend 1 calculate token from a friendly ship at range 0-1 to change 1 [Focus] result to an [Evade] or [Hit] result.',
      },
      image:
        'https://infinitearenas.com/xw2/images/quickbuilds/dbs404-siegeofcoruscant.png',
      slots: ['Torpedo', 'Missile', 'Device', 'Modification', 'Configuration'],
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/dbs404.png',
      standard: true,
      wildspace: true,
      keywords: ['Droid'],
      epic: true,
    },
    {
      name: 'Baktoid Prototype',
      caption: 'Siege of Coruscant',
      initiative: 1,
      limited: 2,
      cost: 34,
      xws: 'baktoidprototype-siegeofcoruscant',
      ability:
        'While you perform a special attack, if a friendly ship with the Networked Calculations ship ability has a lock on the defender, you may ignore the [Focus], [Calculate], or [Lock] requirement of that attack.',
      shipAbility: {
        name: 'Networked Calculations',
        text: 'While you defend or perform an attack, you may spend 1 calculate token from a friendly ship at range 0-1 to change 1 [Focus] result to an [Evade] or [Hit] result.',
      },
      image:
        'https://infinitearenas.com/xw2/images/quickbuilds/baktoidprototype-siegeofcoruscant.png',
      standardLoadout: [
        'homingmissiles',
        'contingencyprotocol-siegeofcoruscant',
        'strutlockoverride-siegeofcoruscant',
      ],
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/baktoidprototype.png',
      standard: false,
      wildspace: true,
      keywords: ['Droid'],
      epic: true,
    },
    {
      name: 'Baktoid Prototype',
      caption: 'Siege of Coruscant',
      initiative: 1,
      limited: 2,
      cost: 26,
      xws: 'baktoidprototype-siegeofcoruscant-lsl',
      ability:
        'While you perform a special attack, if a friendly ship with the Networked Calculations ship ability has a lock on the defender, you may ignore the [Focus], [Calculate], or [Lock] requirement of that attack.',
      shipAbility: {
        name: 'Networked Calculations',
        text: 'While you defend or perform an attack, you may spend 1 calculate token from a friendly ship at range 0-1 to change 1 [Focus] result to an [Evade] or [Hit] result.',
      },
      image:
        'https://infinitearenas.com/xw2/images/quickbuilds/baktoidprototype-siegeofcoruscant.png',
      slots: ['Sensor', 'Missile', 'Missile', 'Modification', 'Configuration'],
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/baktoidprototype.png',
      standard: true,
      wildspace: true,
      keywords: ['Droid'],
      epic: true,
    },
  ],
  icon: 'https://infinitearenas.com/xw2/images/shipicons/separatist-alliance/I_Hyena.png',
};

export default t;
