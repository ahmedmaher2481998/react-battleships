import { useState, useEffect } from 'react';
import Cell from './Cell';
import Row from './Row';
import { generateCellId, validateShipLocation, ROW_SIZE } from '../helpers';
import { initCellState } from '../store/cells/cellReducer';
import {
  initCells,
  initBotCells,
  occupyBotCell,
  ChangeHeadMessage,
} from '../store';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
//end of imports

//creating cell states and components  to form grid for pc / player
export const createGrid = (size, pc = false) => {
  console.log(pc);
  let rows = [];
  let cellsState = {};
  //creating rows
  for (let row = 1; row < size + 1; row++) {
    let cells = [];
    //creating cells
    for (let col = 1; col < size + 1; col++) {
      //creating cells state
      cellsState[`${generateCellId(row, col)}`] = initCellState(row, col);
      //creating grid
      cells.push(
        <Cell key={generateCellId(row, col)} row={row} col={col} pc={pc} />
      );
    }
    rows.push(<Row key={row} cells={cells} />);
  }
  return { cellsState, rows };
};

const GridBoard = ({ pc }) => {
  pc = pc || false;

  const dispatch = useDispatch();

  const { pathname } = useLocation();

  // const selectedShip = useSelector((s) => getSelectedShip(s));

  // const placingStatus = useSelector((s) => getPlacingStatus(s));

  const { rows, cellsState } = createGrid(ROW_SIZE, pc);

  useEffect(() => {
    if (!pc) {
      dispatch(initCells(cellsState));
    } else {
      dispatch(initBotCells(cellsState));
    }
    // eslint-disable-next-line
  }, []);

  const botCellStates = useSelector((s) => s.bot?.botCells);

  //the pc is the on generating the grid
  if (pc && botCellStates) {
    //get random cell row,or col number
    const getRandom = () => Math.floor(Math.random() * ROW_SIZE + 1);

    //get the random position for placing  but optimize it for placing possibility
    const getPlacingPositionForPc = ({ row, col }) => {
      //improving the chances of placing the ship
      if (row > 5) return 'H';
      else if (col > 5) return 'V';
      else if (col > row) return 'V';
      //means it's better chance in the h direction
      else if (row > col) return 'H';
      else return 'V';
    };

    const fleetShips = ['boat', 'ship', 'battlesShip', 'submarine', 'carrier'];
    const sizeOfShips = {
      boat: 1,
      ship: 2,
      submarine: 3,
      battlesShip: 4,
      carrier: 5,
    };

    fleetShips.forEach((shipName) => {
      let randomCol = getRandom();

      let randomRow = getRandom();

      const shipSize = sizeOfShips[shipName];

      /* START THE BIG WHILE LOOP */

      //keep changing coordinates till finding a right cell to place the current ship in

      while (
        //while the ship location is not valid keep trying
        !validateShipLocation({
          row: randomRow,
          col: randomCol,
          placingPosition: getPlacingPositionForPc({
            row: randomRow,
            col: randomCol,
          }),
          shipSize,
          isOccupied:
            cellsState[generateCellId(randomRow, randomCol)].occupy.isOccupied,
          cells: cellsState,
        })
      ) {
        //while ship location is not valid randomize another cell coordination
        // logging if the random cell is vialed
        randomCol = getRandom();
        randomRow = getRandom();
      }

      /** END OF THE BIG WHILE LOOP**/

      const col = randomCol;
      const row = randomRow;
      const placingPosition = getPlacingPositionForPc({ row, col });
      dispatch(
        occupyBotCell({ row, col, placingPosition, shipSize, ship: shipName })
      );
      dispatch(ChangeHeadMessage(`bot is now placing ${shipName}`));

      //end of ForEach....
    });
  }

  return (
    <div
      className={`${
        pathname === '/battle'
          ? 'bg-transparent'
          : 'bg-opacity-40 bg-purple-900'
      }
		md:h-full
		flex flex-col justify-between items-center
		rounded-lg p-2 lg:p-4 xl:p-6 
		`}
      // ${selectedShip !== '' && !placingStatus ? 'cursor-grabbing' : null}
    >
      {rows}
    </div>
  );
};

export default GridBoard;
