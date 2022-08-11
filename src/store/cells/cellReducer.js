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
      newState = { playerCells: { ...payload }, botResult: 0 };
      //experimental for building the battle page
      return newState;

    case HIT_CELL:
      const { cellId } = payload;
      if (!newState.playerCells[cellId].hit)
        newState.playerCells[cellId].hit = true;
      if (newState.playerCells[cellId].occupy.isOccupied) {
        newState.botResult++;
      }
      return newState;

    case OCCUPY_CELL:
      const { row, col, placingPosition, shipSize, ship } = payload;

      if (placingPosition === 'H') {
        for (let newCol = col; newCol < col + shipSize; newCol++) {
          const cellId = generateCellId(row, newCol);
          newState.playerCells[cellId].occupy.isOccupied = true;
          newState.playerCells[cellId].occupy.occupier = ship;
        }
      } else if (placingPosition === 'V') {
        for (let newRow = row; newRow < row + shipSize; newRow++) {
          const cellId = generateCellId(newRow, col);
          newState.playerCells[cellId].occupy.isOccupied = true;
          newState.playerCells[cellId].occupy.occupier = ship;
        }
      }
      return newState;

    case 'CLEAR_CELLS':
      return { playerCells: {}, botResult: 0 };
    default:
      return state;
  }
};
