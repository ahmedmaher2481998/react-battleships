//size of grid
export const ROW_SIZE = 10;
export const generateCellId = (row, col) => {
  return row * ROW_SIZE + col - ROW_SIZE;
};
export const validateShipLocation = ({
  row,
  col,
  placingPosition = 'H',
  shipSize,
  isOccupied,
  cells,
}) => {
  //test the parameters is right
  row = 1 * row;
  col = col * 1;
  if (isOccupied) return false;
  else if (placingPosition === 'H') {
    if (col - 1 + shipSize > ROW_SIZE) return false;

    for (let newCol = col; newCol < col + shipSize; newCol++) {
      const cellId = generateCellId(row, newCol);
      if (cells[cellId]?.occupy.isOccupied) return false;
    }
  } else if (placingPosition === 'V') {
    if (row - 1 + shipSize > ROW_SIZE) return false;

    for (let newRow = row; newRow < row + shipSize; newRow++) {
      const cellId = generateCellId(newRow, col);
      if (cells[cellId]?.occupy.isOccupied) return false;
    }
  }
  return true;
};
export const getShipSize = (ship) => {
  switch (ship) {
    case 'boat':
      return 1;
    case 'ship':
      return 2;
    case 'submarine':
      return 3;
    case 'battlesShip':
      return 4;
    case 'carrier':
      return 5;
    default:
      return 0;
  }
};
// returns a random cell / col number
export const getRandom = () => Math.floor(Math.random() * ROW_SIZE + 1);

export const getDurationInMinutes = (startTime) => {
  //formatting the data to save in local Storage
  const diffInMilliSeconds = Math.abs(startTime - Date.now()) / 1000;
  const minutes = Math.floor(diffInMilliSeconds / 60) % 60;
  return minutes;
};
