//  import { getPlacingPosition } from "../store";
import { generateCellId, validateShipLocation } from './helpers';

import { createGrid } from '../components/GridBoard';
const fleet = {
  ship: ['boat', 'ship', 'battlesShip', 'submarine', 'carrier'],
  shipSize: {
    boat: 1,
    ship: 2,
    submarine: 3,
    battlesShip: 4,
    carrier: 5,
  },
};
const { cellsState } = createGrid(10);
const getPlacingPosition = ({ row, col }) => {
  //improving the chances of placing the ship
  if (row > 5) return 'H';
  else if (col > 5) return 'V';
  else if (col > row) return 'V';
  //means it's better chance in the h direction
  else if (row > col) return 'H';
  else return 'V';
};

const getRandom = () => Math.floor(Math.random() * 10 + 1);
fleet.ship.forEach((shipName) => {
  let randomCol = getRandom();

  let randomRow = getRandom();

  const shipSize = fleet.shipSize[shipName];

  while (
    //while the ship location is not valid keep trying
    !validateShipLocation({
      row: randomRow,
      col: randomCol,
      placingPosition: getPlacingPosition({
        row: randomRow,
        col: randomCol,
      }),
      cells: cellsState,
      isOccupied:
        cellsState[generateCellId(randomRow, randomCol)]?.occupy.isOccupied,
      shipSize: fleet.shipSize[shipName],
    })
  ) {
    //while ship location is not valid randomize another cell coordination
    // console.log(
    //   !validateShipLocation({
    //     row: randomRow,
    //     col: randomCol,
    //     placingPosition: getPlacingPosition({
    //       row: randomRow,
    //       col: randomCol,
    //     }),
    //     cells: cellsState,
    //     isOccupied:
    //       cellsState[generateCellId(randomRow, randomCol)]?.occupy.isOccupied,
    //     shipSize,
    //   })
    // );

    randomCol = getRandom();
    randomRow = getRandom();
  }
});
