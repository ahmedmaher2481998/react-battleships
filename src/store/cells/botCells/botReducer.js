import { generateCellId } from '../../../helpers';
import { BOT_CELL_HIT, BOT_CELL_OCCUPY, INIT_BOT_CELLS } from './actions';
// cell Obj
// "56": {col, row, occupy: {
//     isOccupied: false,
//     occupier: null,
//   },
//   hit: false,
// };

//reducers
export const botReducer = (state = {}, { type, payload }) => {
  let newState = { ...state };
  switch (type) {
    case INIT_BOT_CELLS:
      console.log('bot cells', payload);
      newState = { botCells: { ...payload } };
      return newState;

    case BOT_CELL_HIT:
      //   newState[generateCellId(payload.row, payload.col)].hit = true;
      return newState;

    case BOT_CELL_OCCUPY:
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
          console.log('State', newState);
          newState[cellId].occupy.isOccupied = true;
          newState[cellId].occupy.occupier = ship;
        }
      }
      return newState;
    default:
      return state;
  }
};
