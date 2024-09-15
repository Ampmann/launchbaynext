import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'Alpha-class Star Wing',
  xws: 'alphaclassstarwing',
  ffg: 14,
  size: 'Small',
  dial: [
    '1BW',
    '1FB',
    '1NW',
    '2TW',
    '2BB',
    '2FB',
    '2NB',
    '2YW',
    '3TW',
    '3BW',
    '3FW',
    '3NW',
    '3YW',
    '4FR',
  ],
  faction: 'Galactic Empire',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 4 },
    { type: 'shields', value: 3 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'White', type: 'SLAM' },
    { difficulty: 'White', type: 'Reload' },
  ],
  icon: 'https://infinitearenas.com/xw2/images/shipicons/galactic-empire/I_AlphaStarwing.png',
  pilots: [
    {
      name: 'Lieutenant Karsabi',
      caption: 'Brash Noble',
      initiative: 3,
      limited: 1,
      cost: 5,
      xws: 'lieutenantkarsabi',
      ability:
        'After you gain a disarm token, if you are not stressed, you may gain 1 stress token to remove 1 disarm token.',
      slots: ['Talent', 'Sensor', 'Missile', 'Modification', 'Configuration'],
      ffg: 136,
      standard: false,
      epic: true,
      loadout: 14,
      extended: true,
      image:
        'https://infinitearenas.com/xw2/images/pilots/lieutenantkarsabi.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/lieutenantkarsabi.png',
    },
    {
      name: 'Major Vynder',
      caption: 'Pragmatic Survivor',
      initiative: 4,
      limited: 1,
      cost: 5,
      xws: 'majorvynder',
      ability:
        'While you defend, if you are disarmed, roll 1 additional defense die.',
      slots: ['Talent', 'Sensor', 'Torpedo', 'Modification', 'Configuration'],
      ffg: 135,
      standard: false,
      epic: true,
      loadout: 16,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/majorvynder.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/majorvynder.png',
    },
    {
      name: 'Nu Squadron Pilot',
      initiative: 2,
      limited: 0,
      cost: 5,
      xws: 'nusquadronpilot',
      text: 'With a design inspired by other Cygnus Spaceworks vessels, the Alpha-class star wing is a versatile craft assigned to Imperial Navy specialist units that need a starfighter they can outfit for multiple roles.',
      slots: ['Sensor', 'Cannon', 'Modification', 'Configuration'],
      ffg: 138,
      standard: false,
      epic: true,
      loadout: 7,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/nusquadronpilot.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/nusquadronpilot.png',
    },
    {
      name: 'Rho Squadron Pilot',
      initiative: 3,
      limited: 0,
      cost: 5,
      xws: 'rhosquadronpilot',
      text: 'The elite pilots of Rho Squadron instill terror in the Rebellion, using both the Xg-1 assault configuration and Os-1 arsenal loadout of the Alpha-class star wing to devastating effect.',
      slots: ['Talent', 'Sensor', 'Modification', 'Configuration'],
      ffg: 137,
      standard: false,
      epic: true,
      loadout: 9,
      extended: true,
      image:
        'https://infinitearenas.com/xw2/images/pilots/rhosquadronpilot.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/rhosquadronpilot.png',
    },
    {
      "name": "Lieutenant Karsabi",
      "caption": "Payload Courier",
      "initiative": 3,
      "limited": 1,
      "cost": 5,
      "xws": "lieutenantkarsabi-alphaclassstarwing",
      "ability": "When you perform a [Reload] action, the chosen upgrade recovers 1 additional [Charge].",
      "shipAbility": {
        "name": "Prioritized Weapons Systems",
        "text": "Before you engage, you may gain a strain token to remove a disarm token."
      },
      "shipActions": [
        { "difficulty": "White", "type": "Focus" },
        { "difficulty": "White", "type": "Lock" },
        { "difficulty": "White", "type": "SLAM", "linked": { "difficulty": "Red", "type": "Lock" } },
        { "difficulty": "White", "type": "SLAM", "linked": { "difficulty": "Red", "type": "Reload" } },
        { "difficulty": "White", "type": "Reload" }
      ],
      "standardLoadout": ["protontorpedoes", "saturationrockets-alphaclassstarwing", "electronicbaffle"],
      "image": "https://infinitearenas.com/xw2/images/quickbuilds/lieutenantkarsabi-alphaclassstarwing.png",
      "artwork": "",
      "standard": true,
      "extended": true,
      "epic": true
    },
    {
      "name": "Major Vynder",
      "caption": "Helping Hand",
      "initiative": 4,
      "limited": 1,
      "cost": 5,
      "xws": "majorvynder-alphaclassstarwing",
      "ability": "After you perform a [Missile] attack, you may perform a bonus [Cannon] attack. While you perform this bonus attack, you may change 1 [Focus] result to a [Hit] result.",
      "shipAbility": {
        "name": "Prioritized Weapons Systems",
        "text": "Before you engage, you may gain a strain token to remove a disarm token."
      },
      "shipActions": [
        { "difficulty": "White", "type": "Focus" },
        { "difficulty": "White", "type": "Lock" },
        { "difficulty": "White", "type": "SLAM", "linked": { "difficulty": "Red", "type": "Lock" } },
        { "difficulty": "White", "type": "SLAM", "linked": { "difficulty": "Red", "type": "Reload" } },
        { "difficulty": "White", "type": "Reload" }
      ],
      "standardLoadout": ["longrangescanners-alphaclassstarwing", "ioncannon", "heavyplasmamissiles-alphaclassstarwing"],
      "image": "https://infinitearenas.com/xw2/images/quickbuilds/majorvynder-alphaclassstarwing.png",
      "artwork": "",
      "standard": true,
      "extended": true,
      "epic": true
    }
  ],
};

export default t;
