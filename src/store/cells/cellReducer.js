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
      newState = { ...payload };
      return newState;

    case HIT_CELL:
      newState[generateCellId(payload.row, payload.col)].hit = true;
      return newState;

    case OCCUPY_CELL:
      const { row, col, placingPosition, shipSize, ship } = payload;
      if (placingPosition === 'H') {
        for (let newCol = col; newCol < col + shipSize; newCol++) {
          const cellId = generateCellId(row, newCol);
          console.log(cellId);
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
