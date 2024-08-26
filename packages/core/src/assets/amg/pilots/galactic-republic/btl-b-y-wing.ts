import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'BTL-B Y-wing',
  xws: 'btlbywing',
  size: 'Small',
  dial: [
    '1BW',
    '1FB',
    '1NW',
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
    '4FR',
    '4KR',
  ],
  faction: 'Galactic Republic',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 1 },
    { type: 'hull', value: 5 },
    { type: 'shields', value: 3 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'Red', type: 'Barrel Roll' },
    { difficulty: 'Red', type: 'Reload' },
  ],
  ability: {
    name: 'Plated Hull',
    text: 'While you defend, if you are not critically damaged, change 1 [Critical Hit] result to a [Hit] result.',
  },
  pilots: [
    {
      name: 'Shadow Squadron Veteran',
      initiative: 3,
      limited: 0,
      xws: 'shadowsquadronveteran',
      text: 'Shadow Squadron has served since the early days of the Clone Wars, winning victories at Kadavo and against the flagship of Grievous, Malevolence.',
      standard: true,
      epic: true,
      slots: [
        'Turret',
        'Torpedo',
        'Gunner',
        'Astromech',
        'Device',
        'Modification',
      ],
      cost: 4,
      ffg: 602,
      keywords: ['Clone', 'Y-wing'],
      loadout: 4,
      extended: true,
      image:
        'https://infinitearenas.com/xw2/images/pilots/shadowsquadronveteran.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/shadowsquadronveteran.png',
    },
    {
      name: 'Anakin Skywalker',
      initiative: 6,
      limited: 1,
      xws: 'anakinskywalker-btlbywing',
      ability:
        'After you fully execute a maneuver, if there is an enemy ship in your [Front Arc] at range 0-1 or in your [Bullseye Arc], you may spend 1 [Force] to remove 1 stress token.',
      force: { value: 3, recovers: 1, side: ['light'] },
      standard: true,
      epic: true,
      slots: [
        'Force Power',
        'Turret',
        'Torpedo',
        'Gunner',
        'Astromech',
        'Device',
        'Modification',
      ],
      cost: 6,
      ffg: 596,
      caption: 'Hero of the Republic',
      loadout: 20,
      extended: true,
      keywords: ['Jedi', 'Light Side', 'Y-wing'],
      image:
        'https://infinitearenas.com/xw2/images/pilots/anakinskywalker-btlbywing.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/anakinskywalker-btlbywing.png',
    },
    {
      name: 'R2-D2',
      xws: 'r2d2',
      initiative: 2,
      limited: 1,
      ability:
        'At the start of the Engagement Phase, if there is an enemy ship in your [Rear Arc], gain 1 calculate token.',
      shipActions: [
        { difficulty: 'White', type: 'Calculate' },
        { difficulty: 'White', type: 'Lock' },
        { difficulty: 'Red', type: 'Barrel Roll' },
        { difficulty: 'Red', type: 'Reload' },
      ],
      standard: true,
      epic: true,
      slots: [
        'Sensor',
        'Turret',
        'Torpedo',
        'Crew',
        'Device',
        'Device',
        'Modification',
      ],
      cost: 3,
      ffg: 600,
      caption: 'Bucket of Bolts',
      keywords: ['Droid', 'Y-wing'],
      loadout: 9,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/r2d2.png',
      artwork: 'https://infinitearenas.com/xw2/images/artwork/pilots/r2d2.png',
    },
    {
      name: '“Odd Ball”',
      xws: 'oddball-btlbywing',
      initiative: 5,
      limited: 1,
      ability:
        'After you fully execute a red maneuver or perform a red action, if there is an enemy ship in your [Bullseye Arc], you may acquire a lock on that ship.',
      caption: 'CC-2237',
      standard: true,
      epic: true,
      slots: [
        'Talent',
        'Turret',
        'Torpedo',
        'Torpedo',
        'Gunner',
        'Astromech',
        'Modification',
      ],
      cost: 4,
      loadout: 18,
      ffg: 597,
      keywords: ['Clone', 'Y-wing'],
      extended: true,
      image:
        'https://infinitearenas.com/xw2/images/pilots/oddball-btlbywing.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/oddball-btlbywing.png',
    },
    {
      name: '“Matchstick”',
      xws: 'matchstick',
      initiative: 4,
      limited: 1,
      ability:
        'While you perform a primary or [Single Turret Arc] attack, you may reroll 1 attack die for each red token you have.',
      standard: true,
      epic: true,
      slots: ['Talent', 'Turret', 'Astromech', 'Device', 'Modification'],
      cost: 3,
      ffg: 598,
      caption: 'Shadow Two',
      keywords: ['Clone', 'Y-wing'],
      loadout: 9,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/matchstick.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/matchstick.png',
    },
    {
      name: '“Broadside”',
      xws: 'broadside',
      initiative: 3,
      limited: 1,
      ability:
        'While you perform a [Single Turret Arc] attack, if your [Single Turret Arc] indicator is in your [Left Arc] or [Right Arc], you may change 1 blank result to a [Focus] result.',
      standard: true,
      epic: true,
      slots: ['Talent', 'Turret', 'Astromech', 'Device', 'Modification'],
      cost: 3,
      ffg: 599,
      caption: 'Shadow Three',
      keywords: ['Clone', 'Y-wing'],
      loadout: 10,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/broadside.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/broadside.png',
    },
    {
      name: '“Goji”',
      xws: 'goji',
      initiative: 2,
      limited: 1,
      ability:
        'While a friendly ship at range 0-3 defends, it may roll 1 additional defense die for each friendly bomb at range 0-1 of it.',
      standard: true,
      epic: true,
      slots: [
        'Talent',
        'Turret',
        'Gunner',
        'Astromech',
        'Device',
        'Device',
        'Device',
        'Modification',
      ],
      cost: 4,
      ffg: 601,
      caption: 'Payload Specialist',
      keywords: ['Clone', 'Y-wing'],
      loadout: 16,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/goji.png',
      artwork: 'https://infinitearenas.com/xw2/images/artwork/pilots/goji.png',
    },
    {
      name: 'Red Squadron Bomber',
      xws: 'redsquadronbomber',
      initiative: 2,
      limited: 0,
      text: 'At the battle of Geonosis, Red Squadron provided vital cover to the LAAT gunships deployed to secure the surface.',
      standard: true,
      epic: true,
      slots: ['Turret', 'Torpedo', 'Gunner', 'Astromech', 'Device'],
      cost: 4,
      ffg: 603,
      keywords: ['Clone', 'Y-wing'],
      loadout: 6,
      extended: true,
      image:
        'https://infinitearenas.com/xw2/images/pilots/redsquadronbomber.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/redsquadronbomber.png',
    },
  ],
  ffg: 68,
  icon: 'https://infinitearenas.com/xw2/images/shipicons/galactic-republic/I_BTL-B_Ywing.png',
};

export default t;