import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'Gozanti-class Cruiser',
  xws: 'gozanticlasscruiser',
  faction: 'First Order',
  icon: 'https://infinitearenas.com/xw2/images/shipicons/galactic-empire/I_Gozanti.png',
  size: 'Huge',
  dial: [
    '0BR',
    '0OR',
    '0NR',
    '1BW',
    '1NW',
    '1FB',
    '2BR',
    '2NR',
    '2FB',
    '3FB',
    '4FR',
  ],
  dialCodes: ['GOZ-FO'],
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 3 },
    { type: 'agility', value: 0 },
    { type: 'hull', value: 11 },
    { type: 'shields', value: 5, recovers: 1 },
    { type: 'energy', value: 3, recovers: 1 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'White', type: 'Coordinate' },
    { difficulty: 'White', type: 'Reinforce' },
    { difficulty: 'White', type: 'Jam' },
  ],
  pilots: [
    {
      name: 'First Order Sympathizers',
      initiative: 7,
      cost: 66,
      limited: 0,
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/firstordersympathizers.png',
      image:
        'https://infinitearenas.com/xw2/images/pilots/firstordersympathizers.png',
      shipAbility: {
        name: 'Docking Clamps',
        text: 'You can dock up to 4 small ships.',
      },
      text: "The First Order's swift rise to power rests upon ruthless innovation. However, sympathizers often repurpose Imperial designs, like the venerable Gozanti-class cruiser, in surveillance and patrol operations.",
      standard: false,
      wildspace: false,
      epic: true,
      engagement: 1,
      xws: 'firstordersympathizers',
      slots: [
        'Command',
        'Hardpoint',
        'Crew',
        'Crew',
        'Gunner',
        'Team',
        'Cargo',
        'Cargo',
      ],
    },
  ],
};

export default t;
