//size of grid
export const ROW_SIZE = 10;

export const generateCellId = (row, col) => {
	return row * ROW_SIZE + col - ROW_SIZE;
	// return row * 10 + col - 10;
};
export const validateShipLocation = (row, col, ship) => {
	let shipSize;
	switch (ship) {
		case "boat":
			shipSize = 1;
			break;
		case "ship":
			shipSize = 2;
			break;
		case "submarine":
			shipSize = 3;
			break;
		case "battlesShip":
			shipSize = 4;
			break;
		case "carrier":
			shipSize = 5;
			break;
		default:
			return;
	}
	const size = col + shipSize;

	if (size <= 10) {
		console.log(shipSize, generateCellId(row, col));
		return true;
	} else return false;
};
