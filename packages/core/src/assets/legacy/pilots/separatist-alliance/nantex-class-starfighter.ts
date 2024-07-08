import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'Nantex-class Starfighter',
  xws: 'nantexclassstarfighter',
  size: 'Small',
  dial: [
    '1TW',
    '1BB',
    '1NB',
    '1YW',
    '2TW',
    '2BB',
    '2FB',
    '2NB',
    '2YW',
    '3LR',
    '3TW',
    '3BB',
    '3FB',
    '3NB',
    '3YW',
    '3PR',
    '4FW',
    '5FW',
    '5KR',
  ],
  dialCodes: ['NTX'],
  faction: 'Separatist Alliance',
  stats: [
    { arc: 'Bullseye Arc', type: 'attack', value: 3 },
    { arc: 'Single Turret Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 3 },
    { type: 'hull', value: 4 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Evade' },
  ],
  pilots: [
    {
      name: 'Stalgasin Hive Guard',
      initiative: 3,
      limited: 0,
      xws: 'stalgasinhiveguard',
      shipAbility: {
        name: 'Pinpoint Tractor Array',
        text: 'You cannot rotate your [Single Turret Arc] to your [Rear Arc]. After you fully execute a maneuver, you may gain 1 tractor token to perform a [Rotate Arc] action.',
      },
      standard: true,
      wildspace: true,
      text: 'Designed for the unique physiology of Geonosian pilots, Nantex-class starfighters are capable of maneuvers that would rip most ships—and pilots—apart.',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/stalgasinhiveguard.png',
      image:
        'https://infinitearenas.com/xw2/images/pilots/stalgasinhiveguard.png',
      cost: 33,
      slots: ['Talent'],
      epic: true,
    },
    {
      name: 'Sun Fac',
      initiative: 6,
      limited: 1,
      xws: 'sunfac',
      shipAbility: {
        name: 'Pinpoint Tractor Array',
        text: 'You cannot rotate your [Single Turret Arc] to your [Rear Arc]. After you fully execute a maneuver, you may gain 1 tractor token to perform a [Rotate Arc] action.',
      },
      standard: true,
      wildspace: true,
      caption: 'Archduke’s Enforcer',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/sunfac.png',
      image: 'https://infinitearenas.com/xw2/images/pilots/sunfac.png',
      ability:
        'While you perform a primary attack, if the defender is tractored, roll 1 additional attack die.',
      cost: 41,
      slots: ['Talent', 'Talent'],
      epic: true,
    },
    {
      name: 'Berwer Kret',
      xws: 'berwerkret',
      initiative: 5,
      limited: 1,
      shipAbility: {
        name: 'Pinpoint Tractor Array',
        text: 'You cannot rotate your [Single Turret Arc] to your [Rear Arc]. After you fully execute a maneuver, you may gain 1 tractor token to perform a [Rotate Arc] action.',
      },
      standard: true,
      wildspace: true,
      caption: 'Hive Guard Captain',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/berwerkret.png',
      image: 'https://infinitearenas.com/xw2/images/pilots/berwerkret.png',
      ability:
        'After you perform an attack that hits, each friendly ship with [Calculate] on its action bar and a lock on the defender may perform a red [Calculate] action.',
      cost: 36,
      slots: ['Talent', 'Talent'],
      epic: true,
    },
    {
      name: 'Chertek',
      xws: 'chertek',
      initiative: 4,
      limited: 1,
      shipAbility: {
        name: 'Pinpoint Tractor Array',
        text: 'You cannot rotate your [Single Turret Arc] to your [Rear Arc]. After you fully execute a maneuver, you may gain 1 tractor token to perform a [Rotate Arc] action.',
      },
      standard: true,
      wildspace: true,
      caption: 'Opportunistic Ace',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/chertek.png',
      image: 'https://infinitearenas.com/xw2/images/pilots/chertek.png',
      ability:
        'While you perform a primary attack, if the defender is tractored, you may reroll up to 2 attack dice.',
      cost: 36,
      slots: ['Talent', 'Talent'],
      epic: true,
    },
    {
      name: 'Gorgol',
      caption: 'Handy Engineer',

      limited: 1,
      initiative: 2,
      xws: 'gorgol',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/gorgol.png',
      image: 'https://infinitearenas.com/xw2/images/pilots/gorgol.png',
      shipAbility: {
        name: 'Pinpoint Tractor Array',
        text: 'You cannot rotate your [Single Turret Arc] to your [Rear Arc]. After you fully execute a maneuver, you may gain 1 tractor token to perform a [Rotate Arc] action.',
      },
      ability:
        'During the System Phase, you may gain 1 disarm token and choose a friendly ship at range 1-2. If you do, it gains 1 tractor token, then repairs 1 of its faceup Ship trait damage cards.',
      cost: 29,
      standard: true,
      wildspace: true,
      slots: ['Talent', 'Modification'],
      epic: true,
    },
    {
      name: 'Petranaki Arena Ace',
      cost: 36,
      limited: 0,
      initiative: 4,
      xws: 'petranakiarenaace',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/petranakiarenaace.png',
      image:
        'https://infinitearenas.com/xw2/images/pilots/petranakiarenaace.png',
      shipAbility: {
        name: 'Pinpoint Tractor Array',
        text: 'You cannot rotate your [Single Turret Arc] to your [Rear Arc]. After you execute a maneuver, you may gain 1 tractor token to perform a [Rotate Arc] action.',
      },
      text: 'The Petranaki Arena is a massive edifice on Geonosis that was a key site in the first battle of the Clone Wars.',
      standard: true,
      wildspace: true,
      slots: ['Talent', 'Talent'],
      epic: true,
    },
  ],
  icon: 'https://infinitearenas.com/xw2/images/shipicons/separatist-alliance/I_Nantex_Class_Starfighter.png',
};

export default t;
