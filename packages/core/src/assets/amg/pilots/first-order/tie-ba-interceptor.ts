import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'TIE/ba Interceptor',
  xws: 'tiebainterceptor',
  ffg: 70,
  size: 'Small',
  dial: [
    '1TB',
    '1BB',
    '1NB',
    '1YB',
    '2LR',
    '2TW',
    '2BB',
    '2FB',
    '2NB',
    '2YW',
    '2PR',
    '3TW',
    '3BW',
    '3FB',
    '3NW',
    '3YW',
    '4FB',
    '5FW',
    '5KR',
  ],
  faction: 'First Order',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 3 },
    { type: 'agility', value: 3 },
    { type: 'hull', value: 2 },
    { type: 'shields', value: 2 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Evade' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'White', type: 'Barrel Roll' },
    { difficulty: 'White', type: 'Boost' },
  ],
  ability: {
    name: 'Fine-Tuned Thrusters',
    text: 'After you fully execute a maneuver, if you are not depleted or strained, you may gain 1 deplete or strain token to perform a [Lock] or [Barrel Roll] action.',
  },
  icon: 'https://infinitearenas.com/xw2/images/shipicons/first-order/I_Vonregs-First-Order-TIE-Interceptor.png',
  pilots: [
    {
      name: 'Major Vonreg',
      caption: 'Red Baron',
      initiative: 6,
      limited: 1,
      cost: 5,
      xws: 'majorvonreg',
      ability:
        'During the System Phase, you may choose 1 enemy ship in your [Bullseye Arc]. That ship gains 1 deplete or strain token of your choice.',
      slots: [
        'Talent',
        'Talent',
        'Tech',
        'Missile',
        'Modification',
        'Modification',
      ],
      standard: true,
      epic: true,
      ffg: 624,
      keywords: ['TIE'],
      loadout: 14,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/majorvonreg.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/majorvonreg.png',
    },
    {
      name: '“Holo”',
      caption: 'Trick of the Light',
      initiative: 5,
      limited: 1,
      cost: 5,
      xws: 'holo',
      ability:
        'At the start of the Engagement Phase, you must transfer 1 of your tokens to another friendly ship at range 0-2.',
      slots: ['Talent', 'Tech', 'Missile', 'Modification', 'Modification'],
      standard: true,
      epic: true,
      ffg: 625,
      keywords: ['TIE'],
      loadout: 12,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/holo.png',
      artwork: 'https://infinitearenas.com/xw2/images/artwork/pilots/holo.png',
    },
    {
      name: '“Ember”',
      caption: 'Dying Flame',
      initiative: 4,
      limited: 1,
      cost: 4,
      xws: 'ember',
      ability:
        'While you perform an attack, if there is a damaged ship friendly to the defender at range 0-1 of the defender, the defender cannot spend focus or calculate tokens.',
      slots: ['Talent', 'Talent', 'Tech', 'Missile', 'Modification'],
      standard: true,
      epic: true,
      ffg: 626,
      keywords: ['TIE'],
      loadout: 7,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/ember.png',
      artwork: 'https://infinitearenas.com/xw2/images/artwork/pilots/ember.png',
    },
    {
      name: 'First Order Provocateur',
      initiative: 3,
      limited: 0,
      cost: 4,
      xws: 'firstorderprovocateur',
      slots: ['Talent', 'Tech', 'Modification'],
      standard: true,
      epic: true,
      ffg: 627,
      text: "Major Vonreg's vision guided the enhancement of proven designs while engineering this one-of-a-kind precise and lethal craft from Sienar-Jaemus Fleet Systems.",
      keywords: ['TIE'],
      loadout: 3,
      extended: true,
      image:
        'https://infinitearenas.com/xw2/images/pilots/firstorderprovocateur.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/firstorderprovocateur.png',
    },
  ],
};

export default t;