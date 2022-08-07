import { generateCellId } from '../../helpers/helpers';
import { HIT_CELL, OCCUPY_CELL, INIT_CELLS } from './actions';
export const initCellState = (row, col) => {
  return {
    col,
    row,
    occupy: {
      isOccupied: false,
      occupier: null,
    },
    hit: false,
  };
};

//reducers
export const cellReducer = (state = {}, { type, payload }) => {
  let newState = { ...state };
  switch (type) {
    case INIT_CELLS:
      // newState = { ...payload };
      //experimental for building the battle page
      newState = { ...test };
      return newState;

    case HIT_CELL:
      newState[generateCellId(payload.row, payload.col)].hit = true;
      return newState;

    case OCCUPY_CELL:
      const { row, col, placingPosition, shipSize, ship } = payload;
      if (placingPosition === 'H') {
        for (let newCol = col; newCol < col + shipSize; newCol++) {
          const cellId = generateCellId(row, newCol);
          newState[cellId].occupy.isOccupied = true;
          newState[cellId].occupy.occupier = ship;
        }
      } else if (placingPosition === 'V') {
        for (let newRow = row; newRow < row + shipSize; newRow++) {
          const cellId = generateCellId(newRow, col);
          console.log(cellId);
          newState[cellId].occupy.isOccupied = true;
          newState[cellId].occupy.occupier = ship;
        }
      }
      return newState;
    default:
      return state;
  }
};

const test = {
  1: {
    col: 1,
    row: 1,
    occupy: {
      isOccupied: true,
      occupier: 'boat',
    },
    hit: false,
  },
  2: {
    col: 2,
    row: 1,
    occupy: {
      isOccupied: false,
      occupier: null,
    },
    hit: false,
  },
  3: {
    col: 3,
    row: 1,
    occupy: {
      isOccupied: false,
      occupier: null,
    },
    hit: false,
  },
  4: {
    col: 4,
    row: 1,
    occupy: {
      isOccupied: false,
      occupier: null,
    },
    hit: false,
  },
  5: {
    col: 5,
    row: 1,
    occupy: {
      isOccupied: false,
      occupier: null,
    },
    hit: false,
  },
  6: {
    col: 6,
    row: 1,
    occupy: {
      isOccupied: false,
      occupier: null,
    },
    hit: false,
  },
  7: {
    col: 7,
    row: 1,
    occupy: {
      isOccupied: false,
      occupier: null,
    },
    hit: false,
  },
  8: {
    col: 8,
    row: 1,
    occupy: {
      isOccupied: false,
      occupier: null,
    },
    hit: false,
  },
  9: {
    col: 9,
    row: 1,
    occupy: {
      isOccupied: false,
      occupier: null,
    },
    hit: false,
  },
  10: {
    col: 10,
    row: 1,
    occupy: {
      isOccupied: false,
      occupier: null,
    },
    hit: false,
  },
  11: {
    col: 1,
    row: 2,
    occupy: {
      isOccupied: false,
      occupier: null,
    },
    hit: false,
  },
  12: {
    col: 2,
    row: 2,
    occupy: {
      isOccupied: false,
      occupier: null,
    },
    hit: false,
  },
  13: {
    col: 3,
    row: 2,
    occupy: {
      isOccupied: false,
      occupier: null,
    },
    hit: false,
  },
  14: {
    col: 4,
    row: 2,
    occupy: {
      isOccupied: false,
      occupier: null,
    },
    hit: false,
  },
  15: {
    col: 5,
    row: 2,
    occupy: {
      isOccupied: false,
      occupier: null,
    },
    hit: false,
  },
  16: {
    col: 6,
    row: 2,
    occupy: {
      isOccupied: false,
      occupier: null,
    },
    hit: false,
  },
  17: {
    col: 7,
    row: 2,
    occupy: {
      isOccupied: false,
      occupier: null,
    },
    hit: false,
  },
  18: {
    col: 8,
    row: 2,
    occupy: {
      isOccupied: false,
      occupier: null,
    },
    hit: false,
  },
  19: {
    col: 9,
    row: 2,
    occupy: {
      isOccupied: false,
      occupier: null,
    },
    hit: false,
  },
  20: {
    col: 10,
    row: 2,
    occupy: {
      isOccupied: false,
      occupier: null,
    },
    hit: false,
  },
  21: {
    col: 1,
    row: 3,
    occupy: {
      isOccupied: false,
      occupier: null,
    },
    hit: false,
  },
  22: {
    col: 2,
    row: 3,
    occupy: {
      isOccupied: false,
      occupier: null,
    },
    hit: false,
  },
  23: {
    col: 3,
    row: 3,
    occupy: {
      isOccupied: true,
      occupier: 'ship',
    },
    hit: false,
  },
  24: {
    col: 4,
    row: 3,
    occupy: {
      isOccupied: true,
      occupier: 'ship',
    },
    hit: false,
  },
  25: {
    col: 5,
    row: 3,
    occupy: {
      isOccupied: false,
      occupier: null,
    },
    hit: false,
  },
  26: {
    col: 6,
    row: 3,
    occupy: {
      isOccupied: false,
      occupier: null,
    },
    hit: false,
  },
  27: {
    col: 7,
    row: 3,
    occupy: {
      isOccupied: false,
      occupier: null,
    },
    hit: false,
  },
  28: {
    col: 8,
    row: 3,
    occupy: {
      isOccupied: false,
      occupier: null,
    },
    hit: false,
  },
  29: {
    col: 9,
    row: 3,
    occupy: {
      isOccupied: false,
      occupier: null,
    },
    hit: false,
  },
  30: {
    col: 10,
    row: 3,
    occupy: {
      isOccupied: false,
      occupier: null,
    },
    hit: false,
  },
  31: {
    col: 1,
    row: 4,
    occupy: {
      isOccupied: false,
      occupier: null,
    },
    hit: false,
  },
  32: {
    col: 2,
    row: 4,
    occupy: {
      isOccupied: false,
      occupier: null,
    },
    hit: false,
  },
  33: {
    col: 3,
    row: 4,
    occupy: {
      isOccupied: false,
      occupier: null,
    },
    hit: false,
  },
  34: {
    col: 4,
    row: 4,
    occupy: {
      isOccupied: false,
      occupier: null,
    },
    hit: false,
  },
  35: {
    col: 5,
    row: 4,
    occupy: {
      isOccupied: false,
      occupier: null,
    },
    hit: false,
  },
  36: {
    col: 6,
    row: 4,
    occupy: {
      isOccupied: false,
      occupier: null,
    },
    hit: false,
  },
  37: {
    col: 7,
    row: 4,
    occupy: {
      isOccupied: false,
      occupier: null,
    },
    hit: false,
  },
  38: {
    col: 8,
    row: 4,
    occupy: {
      isOccupied: false,
      occupier: null,
    },
    hit: false,
  },
  39: {
    col: 9,
    row: 4,
    occupy: {
      isOccupied: false,
      occupier: null,
    },
    hit: false,
  },
  40: {
    col: 10,
    row: 4,
    occupy: {
      isOccupied: false,
      occupier: null,
    },
    hit: false,
  },
  41: {
    col: 1,
    row: 5,
    occupy: {
      isOccupied: false,
      occupier: null,
    },
    hit: false,
  },
  42: {
    col: 2,
    row: 5,
    occupy: {
      isOccupied: false,
      occupier: null,
    },
    hit: false,
  },
  43: {
    col: 3,
    row: 5,
    occupy: {
      isOccupied: false,
      occupier: null,
    },
    hit: false,
  },
  44: {
    col: 4,
    row: 5,
    occupy: {
      isOccupied: false,
      occupier: null,
    },
    hit: false,
  },
  45: {
    col: 5,
    row: 5,
    occupy: {
      isOccupied: false,
      occupier: null,
    },
    hit: false,
  },
  46: {
    col: 6,
    row: 5,
    occupy: {
      isOccupied: false,
      occupier: null,
    },
    hit: false,
  },
  47: {
    col: 7,
    row: 5,
    occupy: {
      isOccupied: true,
      occupier: 'submarine',
    },
    hit: false,
  },
  48: {
    col: 8,
    row: 5,
    occupy: {
      isOccupied: true,
      occupier: 'submarine',
    },
    hit: false,
  },
  49: {
    col: 9,
    row: 5,
    occupy: {
      isOccupied: true,
      occupier: 'submarine',
    },
    hit: false,
  },
  50: {
    col: 10,
    row: 5,
    occupy: {
      isOccupied: false,
      occupier: null,
    },
    hit: false,
  },
  51: {
    col: 1,
    row: 6,
    occupy: {
      isOccupied: false,
      occupier: null,
    },
    hit: false,
  },
  52: {
    col: 2,
    row: 6,
    occupy: {
      isOccupied: false,
      occupier: null,
    },
    hit: false,
  },
  53: {
    col: 3,
    row: 6,
    occupy: {
      isOccupied: false,
      occupier: null,
    },
    hit: false,
  },
  54: {
    col: 4,
    row: 6,
    occupy: {
      isOccupied: false,
      occupier: null,
    },
    hit: false,
  },
  55: {
    col: 5,
    row: 6,
    occupy: {
      isOccupied: false,
      occupier: null,
    },
    hit: false,
  },
  56: {
    col: 6,
    row: 6,
    occupy: {
      isOccupied: true,
      occupier: 'battlesShip',
    },
    hit: false,
  },
  57: {
    col: 7,
    row: 6,
    occupy: {
      isOccupied: true,
      occupier: 'battlesShip',
    },
    hit: false,
  },
  58: {
    col: 8,
    row: 6,
    occupy: {
      isOccupied: true,
      occupier: 'battlesShip',
    },
    hit: false,
  },
  59: {
    col: 9,
    row: 6,
    occupy: {
      isOccupied: true,
      occupier: 'battlesShip',
    },
    hit: false,
  },
  60: {
    col: 10,
    row: 6,
    occupy: {
      isOccupied: false,
      occupier: null,
    },
    hit: false,
  },
  61: {
    col: 1,
    row: 7,
    occupy: {
      isOccupied: false,
      occupier: null,
    },
    hit: false,
  },
  62: {
    col: 2,
    row: 7,
    occupy: {
      isOccupied: false,
      occupier: null,
    },
    hit: false,
  },
  63: {
    col: 3,
    row: 7,
    occupy: {
      isOccupied: false,
      occupier: null,
    },
    hit: false,
  },
  64: {
    col: 4,
    row: 7,
    occupy: {
      isOccupied: false,
      occupier: null,
    },
    hit: false,
  },
  65: {
    col: 5,
    row: 7,
    occupy: {
      isOccupied: false,
      occupier: null,
    },
    hit: false,
  },
  66: {
    col: 6,
    row: 7,
    occupy: {
      isOccupied: false,
      occupier: null,
    },
    hit: false,
  },
  67: {
    col: 7,
    row: 7,
    occupy: {
      isOccupied: false,
      occupier: null,
    },
    hit: false,
  },
  68: {
    col: 8,
    row: 7,
    occupy: {
      isOccupied: false,
      occupier: null,
    },
    hit: false,
  },
  69: {
    col: 9,
    row: 7,
    occupy: {
      isOccupied: false,
      occupier: null,
    },
    hit: false,
  },
  70: {
    col: 10,
    row: 7,
    occupy: {
      isOccupied: false,
      occupier: null,
    },
    hit: false,
  },
  71: {
    col: 1,
    row: 8,
    occupy: {
      isOccupied: false,
      occupier: null,
    },
    hit: false,
  },
  72: {
    col: 2,
    row: 8,
    occupy: {
      isOccupied: false,
      occupier: null,
    },
    hit: false,
  },
  73: {
    col: 3,
    row: 8,
    occupy: {
      isOccupied: false,
      occupier: null,
    },
    hit: false,
  },
  74: {
    col: 4,
    row: 8,
    occupy: {
      isOccupied: false,
      occupier: null,
    },
    hit: false,
  },
  75: {
    col: 5,
    row: 8,
    occupy: {
      isOccupied: false,
      occupier: null,
    },
    hit: false,
  },
  76: {
    col: 6,
    row: 8,
    occupy: {
      isOccupied: false,
      occupier: null,
    },
    hit: false,
  },
  77: {
    col: 7,
    row: 8,
    occupy: {
      isOccupied: false,
      occupier: null,
    },
    hit: false,
  },
  78: {
    col: 8,
    row: 8,
    occupy: {
      isOccupied: false,
      occupier: null,
    },
    hit: false,
  },
  79: {
    col: 9,
    row: 8,
    occupy: {
      isOccupied: false,
      occupier: null,
    },
    hit: false,
  },
  80: {
    col: 10,
    row: 8,
    occupy: {
      isOccupied: false,
      occupier: null,
    },
    hit: false,
  },
  81: {
    col: 1,
    row: 9,
    occupy: {
      isOccupied: true,
      occupier: 'carrier',
    },
    hit: false,
  },
  82: {
    col: 2,
    row: 9,
    occupy: {
      isOccupied: true,
      occupier: 'carrier',
    },
    hit: false,
  },
  83: {
    col: 3,
    row: 9,
    occupy: {
      isOccupied: true,
      occupier: 'carrier',
    },
    hit: false,
  },
  84: {
    col: 4,
    row: 9,
    occupy: {
      isOccupied: true,
      occupier: 'carrier',
    },
    hit: false,
  },
  85: {
    col: 5,
    row: 9,
    occupy: {
      isOccupied: true,
      occupier: 'carrier',
    },
    hit: false,
  },
  86: {
    col: 6,
    row: 9,
    occupy: {
      isOccupied: false,
      occupier: null,
    },
    hit: false,
  },
  87: {
    col: 7,
    row: 9,
    occupy: {
      isOccupied: false,
      occupier: null,
    },
    hit: false,
  },
  88: {
    col: 8,
    row: 9,
    occupy: {
      isOccupied: false,
      occupier: null,
    },
    hit: false,
  },
  89: {
    col: 9,
    row: 9,
    occupy: {
      isOccupied: false,
      occupier: null,
    },
    hit: false,
  },
  90: {
    col: 10,
    row: 9,
    occupy: {
      isOccupied: false,
      occupier: null,
    },
    hit: false,
  },
  91: {
    col: 1,
    row: 10,
    occupy: {
      isOccupied: false,
      occupier: null,
    },
    hit: false,
  },
  92: {
    col: 2,
    row: 10,
    occupy: {
      isOccupied: false,
      occupier: null,
    },
    hit: false,
  },
  93: {
    col: 3,
    row: 10,
    occupy: {
      isOccupied: false,
      occupier: null,
    },
    hit: false,
  },
  94: {
    col: 4,
    row: 10,
    occupy: {
      isOccupied: false,
      occupier: null,
    },
    hit: false,
  },
  95: {
    col: 5,
    row: 10,
    occupy: {
      isOccupied: false,
      occupier: null,
    },
    hit: false,
  },
  96: {
    col: 6,
    row: 10,
    occupy: {
      isOccupied: false,
      occupier: null,
    },
    hit: false,
  },
  97: {
    col: 7,
    row: 10,
    occupy: {
      isOccupied: false,
      occupier: null,
    },
    hit: false,
  },
  98: {
    col: 8,
    row: 10,
    occupy: {
      isOccupied: false,
      occupier: null,
    },
    hit: false,
  },
  99: {
    col: 9,
    row: 10,
    occupy: {
      isOccupied: false,
      occupier: null,
    },
    hit: false,
  },
  100: {
    col: 10,
    row: 10,
    occupy: {
      isOccupied: false,
      occupier: null,
    },
    hit: false,
  },
};
