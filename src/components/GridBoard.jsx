import React, { useEffect } from 'react';
import Cell from './Cell';
import Row from './Row';
import { generateCellId, validateShipLocation, ROW_SIZE } from '../helpers';
import { initCellState } from '../store/cells/cellReducer';
import { initCells } from '../store';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
//end of imports
const createGrid = (size, pc = false) => {
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
        <Cell
          key={generateCellId(row, col)}
          row={row}
          col={col}
          pc={{
            pc,
            cellState: cellsState[`${generateCellId(row, col)}`],
          }}
        />
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

  const [pcCells, setPcCells] = useState([]);

  const { rows, cellsState } = createGrid(ROW_SIZE, pc ? pc : false);

  useEffect(() => {
    if (!pc) {
      dispatch(initCells(cellsState));
    } else {
      setPcCells(cellsState);
    }
    //eslint-disable-next-line
  }, []);

  //the pc is the on generating the grid
  if (pc) {
    //get random cell row,or col number
    const getRandom = () => Math.floor(Math.random() * ROW_SIZE + 1);
    //get the random position for placing  but optimize it for placing possibility
    const getPlacingPosition = ({ row, col }) => {
      //improving the chances of placing the ship
      if (row > 5) return 'H';
      else if (col > 5) return 'V';
      else if (col > row) return 'V';
      //means it's better chance in the h direction
      else if (row > col) return 'H';
      else return 'V';
    };

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

    fleet.ship.forEach((shipName) => {
      let randomCol = getRandom();

      let randomRow = getRandom();

      while (
        !validateShipLocation({
          row: randomRow,
          col: randomCol,
          placingPosition: getPlacingPosition({
            row: randomRow,
            col: randomCol,
          }),
          cells: '',
          isOccupied:
            pcCells[generateCellId(randomRow, randomCol)]?.occupy.isOccupied,
          shipSize: fleet.shipSize[shipName],
        })
      ) {
        randomCol = getRandom();
        randomRow = getRandom();
      }
      // const { row, col, placingPosition, shipSize, ship } = payload;
      const col = randomCol;
      const row = randomRow;
      const shipSize = fleet.shipSize[shipName];
      const placingPosition = getPlacingPosition({ row, col });
      if (placingPosition === 'H') {
        for (let newCol = col; newCol < col + shipSize; newCol++) {
          const cellId = generateCellId(row, newCol);
          cellsState[cellId].occupy.isOccupied = true;
          cellsState[cellId].occupy.occupier = shipName;
        }
      } else if (placingPosition === 'V') {
        for (let newRow = row; newRow < row + shipSize; newRow++) {
          const cellId = generateCellId(newRow, col);
          cellsState[cellId].occupy.isOccupied = true;
          cellsState[cellId].occupy.occupier = shipName;
        }
      }

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
