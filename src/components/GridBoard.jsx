import { useEffect } from 'react';
import Cell from './Cell';
import {
  generateCellId,
  getRandom,
  validateShipLocation,
  ROW_SIZE,
} from '../helpers';
import { initCellState } from '../store/cells/cellReducer';
import {
  initCells,
  initBotCells,
  occupyBotCell,
  changePlayerTurn,
} from '../store';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
//end of imports

//creating cell states and components  to form grid for pc / player
export const createGrid = (size, pc = false) => {
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
    rows.push(
      <div
        key={row}
        className="hover:bg-slate-400 
        rounded-lg
        lg:my-2 md:my-[2px] 
      h-15

        hover:bg-opacity-25 min-h-min min-w-max flex justify-between"
      >
        {cells}
      </div>
    );
  }
  return { cellsState, rows };
};

const GridBoard = ({ pc }) => {
  pc = pc || false;
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const { rows, cellsState } = createGrid(ROW_SIZE, pc);
  const botCellStates = useSelector((s) => s.bot?.botCells);

  useEffect(() => {
    if (!pc && pathname === '/placing') {
      dispatch(initCells(cellsState));
    } else {
      dispatch(initBotCells(cellsState));
      dispatch(changePlayerTurn(true));
    }

    // eslint-disable-next-line
  }, []);

  function populateBotGrid(pc, botCellStates) {
    //the pc is the on generating the grid
    if (pc && botCellStates) {
      //get random cell row,or col number

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

      const fleetShips = [
        'boat',
        'ship',
        'battlesShip',
        'submarine',
        'carrier',
      ];
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
              cellsState[generateCellId(randomRow, randomCol)].occupy
                .isOccupied,
            cells: botCellStates,
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

        //end of ForEach....
      });
    }
  }

  useEffect(() => {
    if (pc && botCellStates) populateBotGrid(pc, botCellStates);
    //eslint-disable-next-line
  }, [Boolean(botCellStates)]);

  return (
    <div
      className={`${
        pathname === '/battle'
          ? 'bg-transparent'
          : 'bg-opacity-40 bg-purple-900'
      }
      flex flex-col justify-between items-center
	min-h-min
  ${pathname === '/placing' && 'lg:-mt-20'}
  max-w-max

  sm:w-screen
		rounded-lg 
    

		`}
    >
      {rows}
    </div>
  );
};

export default GridBoard;
