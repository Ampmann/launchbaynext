import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'Resistance Transport',
  xws: 'resistancetransport',
  size: 'Small',
  dial: [
    '0OR',
    '1AR',
    '1TR',
    '1BB',
    '1FB',
    '1NB',
    '1YR',
    '1DR',
    '2TW',
    '2BW',
    '2FB',
    '2NW',
    '2YW',
    '3BR',
    '3FW',
    '3NR',
    '4FR',
  ],
  faction: 'Resistance',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 1 },
    { type: 'hull', value: 5 },
    { type: 'shields', value: 3 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'Red', type: 'Coordinate' },
    { difficulty: 'Red', type: 'Jam' },
  ],
  pilots: [
    {
      name: 'Cova Nell',
      xws: 'covanell',
      initiative: 4,
      limited: 1,
      standard: true,
      epic: true,
      ability:
        'While you defend or perform a primary attack, if your revealed maneuver is red, roll 1 additional die.',
      slots: [
        'Talent',
        'Tech',
        'Cannon',
        'Cannon',
        'Torpedo',
        'Crew',
        'Crew',
        'Astromech',
        'Modification',
      ],
      cost: 5,
      ffg: 569,
      caption: 'Evacuation Escort',
      loadout: 20,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/covanell.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/covanell.png',
    },
    {
      name: 'Pammich Nerro Goode',
      xws: 'pammichnerrogoode',
      initiative: 3,
      limited: 1,
      caption: 'D’Qar Dispatcher',
      standard: true,
      epic: true,
      ability:
        'While you have 2 or fewer stress tokens, you may execute red maneuvers even while stressed.',
      slots: [
        'Sensor',
        'Tech',
        'Cannon',
        'Cannon',
        'Torpedo',
        'Crew',
        'Crew',
        'Astromech',
        'Modification',
      ],
      cost: 4,
      ffg: 570,
      loadout: 12,
      extended: true,
      image:
        'https://infinitearenas.com/xw2/images/pilots/pammichnerrogoode.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/pammichnerrogoode.png',
    },
    {
      name: 'Nodin Chavdri',
      xws: 'nodinchavdri',
      initiative: 2,
      limited: 1,
      standard: true,
      epic: true,
      ability:
        'After you coordinate or are coordinated, if you have 2 or fewer stress tokens, you may perform 1 action on your action bar as a red action, even if you are stressed.',
      slots: [
        'Tech',
        'Cannon',
        'Cannon',
        'Torpedo',
        'Missile',
        'Crew',
        'Astromech',
        'Modification',
      ],
      cost: 5,
      ffg: 571,
      caption: 'Insubordinate Insurgent',
      loadout: 20,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/nodinchavdri.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/nodinchavdri.png',
    },
    {
      name: 'Logistics Division Pilot',
      xws: 'logisticsdivisionpilot',
      initiative: 1,
      limited: 0,
      text: 'Without the support of the New Republic, members of the Resistance often pull double duty as transport pilots or mechanics, putting their skills and technical knowledge to use in the fight against the First Order.',
      standard: true,
      epic: true,
      slots: ['Cannon', 'Crew', 'Astromech', 'Astromech'],
      cost: 4,
      ffg: 572,
      loadout: 6,
      extended: true,
      image:
        'https://infinitearenas.com/xw2/images/pilots/logisticsdivisionpilot.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/logisticsdivisionpilot.png',
    },
    {
      name: 'Taka Jamoreesa',
      caption: 'Snograth Enthusiast',
      xws: 'takajamoreesa',
      initiative: 2,
      limited: 1,
      ability:
        'After you jam, you must assign 1 jam token to another ship at range 0-1 of the jammed ship, if able.',
      standard: true,
      extended: true,
      cost: 4,
      loadout: 15,
      slots: [
        'Talent',
        'Tech',
        'Cannon',
        'Cannon',
        'Torpedo',
        'Astromech',
        'Illicit',
        'Modification',
      ],
      image: 'https://infinitearenas.com/xw2/images/pilots/takajamoreesa.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/takajamoreesa.png',
      epic: true,
    },
  ],
  ffg: 63,
  icon: 'https://infinitearenas.com/xw2/images/shipicons/resistance/I_Resistance_Transport.png',
};

export default t;
