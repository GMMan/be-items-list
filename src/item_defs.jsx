import icon422 from './assets/422_0x1a6.png'
import icon423 from './assets/423_0x1a7.png'
import icon424 from './assets/424_0x1a8.png'
import icon425 from './assets/425_0x1a9.png'
import icon426 from './assets/426_0x1aa.png'
import icon427 from './assets/427_0x1ab.png'
import icon428 from './assets/428_0x1ac.png'
import icon429 from './assets/429_0x1ad.png'
import iconNone from './assets/icon_none.png'

export const ItemDefs = Object.freeze({
    ITEM_NONE: Object.freeze({
        name: 'None',
        description: '',
        type: null,
        targets: null,
        amount: null,
        duration: null,
        icon: iconNone,
        hidden: true,
    }),
    ITEM_TRAINING_X3_ALL: Object.freeze({
        name: 'Training all boost x3',
        description: 'Receive 3x the amount of BP/PP/AP/HP from all training (3 hours).',
        type: 'multiplier',
        targets: ['pp', 'bp', 'ap', 'hp'],
        amount: 3,
        duration: 180,
        icon: icon422,
        hidden: false,
    }),
    ITEM_TRAINING_X3_PP: Object.freeze({
        name: 'Training PP boost x3',
        description: 'Receive 3x the amount of PP from squats training (1 hour).',
        type: 'multiplier',
        targets: ['pp'],
        amount: 3,
        duration: 60,
        icon: icon423,
        hidden: false,
    }),
    ITEM_TRAINING_X3_BP: Object.freeze({
        name: 'Training BP boost x3',
        description: 'Receive 3x the amount of BP from dash training (1 hour).',
        type: 'multiplier',
        targets: ['bp'],
        amount: 3,
        duration: 60,
        icon: icon424,
        hidden: false,
    }),
    ITEM_TRAINING_X3_AP: Object.freeze({
        name: 'Training AP boost x3',
        description: 'Receive 3x the amount of AP from punch training (1 hour).',
        type: 'multiplier',
        targets: ['ap'],
        amount: 3,
        duration: 60,
        icon: icon425,
        hidden: false,
    }),
    ITEM_TRAINING_X3_HP: Object.freeze({
        name: 'Training HP boost x3',
        description: 'Receive 3x the amount of HP from crunches training (1 hour).',
        type: 'multiplier',
        targets: ['hp'],
        amount: 3,
        duration: 60,
        icon: icon426,
        hidden: false,
    }),
    ITEM_TRAINING_LIMIT_5H: Object.freeze({
        name: 'Increase training limit 5h',
        description: 'Adds 5 hours to the training timer (up to maximum of 100 hours).',
        type: 'increment',
        targets: ['training_limit'],
        amount: 300,
        duration: null,
        icon: icon427,
        hidden: false,
    }),
    ITEM_TRAINING_LIMIT_10H: Object.freeze({
        name: 'Increase training limit 10h',
        description: 'Adds 10 hours to the training timer (up to maximum of 100 hours).',
        type: 'increment',
        targets: ['training_limit'],
        amount: 600,
        duration: null,
        icon: icon428,
        hidden: false,
    }),
    ITEM_BATTLE_X2_VP: Object.freeze({
        name: 'Battle VP reward x2',
        description: 'Receive 2x the amount of vital values from winning a battle (3 hours).',
        type: 'multiplier',
        targets: ['vp'],
        amount: 2,
        duration: 180,
        icon: icon429,
        hidden: false,
    }),
})

export const ItemIDToDefMap = Object.freeze([
    'ITEM_NONE',
    'ITEM_TRAINING_X3_ALL',
    'ITEM_TRAINING_X3_PP',
    'ITEM_TRAINING_X3_BP',
    'ITEM_TRAINING_X3_AP',
    'ITEM_TRAINING_X3_HP',
    'ITEM_TRAINING_LIMIT_5H',
    'ITEM_TRAINING_LIMIT_10H',
    'ITEM_BATTLE_X2_VP',
])

export const ItemGrantOrder = Object.freeze([
    1, 0, 2, 0, 7, 0, 0, 3, 0, 3, 0, 0, 6, 0, 0, 0, 1, 0, 0, 4,
    0, 0, 3, 0, 5, 0, 0, 1, 0, 5, 0, 0, 2, 0, 7, 0, 3, 0, 1, 0,
    0, 4, 0, 5, 0, 0, 1, 5, 0, 2, 0, 8, 0, 0, 3, 0, 3, 4, 0, 5,
    0, 1, 0, 0, 6, 0, 0, 2, 0, 0, 3, 0, 2, 8, 0, 4, 0, 0, 6, 0,
    5, 0, 1, 0, 4, 2, 0, 3, 0, 7, 4, 0, 5, 0, 0, 8, 0, 5, 0, 0,
    2, 1, 0, 2, 0, 3, 0, 4, 0, 4, 0, 7, 0, 5, 0, 3, 0, 1, 0, 0,
    5, 0, 2, 0, 0, 1, 0, 3, 0, 0, 8, 0, 0, 4, 0, 4, 0, 0, 5, 0,
    5, 0, 0, 1, 0, 0, 2, 0, 2, 0, 0, 3, 4, 0, 4, 0, 0, 5, 3, 0,
    0, 1, 0, 0, 6, 0, 8, 0, 0, 1, 0, 2, 0, 0, 3, 2, 0, 4, 0, 5,
    0, 0, 4, 0, 0, 7, 0, 1, 0, 0, 2, 0, 2, 0, 0, 3, 6, 0, 4, 5,
])
