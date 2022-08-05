//size of grid
export const ROW_SIZE = 10;
export const generateCellId = (row, col) => {
	return row * ROW_SIZE + col - ROW_SIZE;
};
//takes the coordinates of the cell and returns an obj {}
//the returned obj has array of cells ocupied in case the validity of the ocuupition is true
export const validateShipLocation = (row, col, ship, type, postion) => {
	let shipSize;
	//getting the size of the ship
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
	//the id of the clicked cell
	const id = +generateCellId(row, col);

	let placingIsVaild, size;
	// placment type from start ? end ? center ?
	if (type === "H") {
		//horizontal placing
		if (postion === "start") {
			// from start
			size = id + shipSize - 1;
			placingIsVaild = size <= row * 10;
		} else if (postion === "center") {
			// from center may not work
			size = id + Math.floor(shipSize / 2);
			let size2 = id - Math.floor(shipSize / 2);
			placingIsVaild = size - 1 >= row * 10 || size2 - 1 <= row * 10;
		} else if (postion === "end") {
			//from the end
			size = id - shipSize + 1;
			placingIsVaild = size > (row - 1) * 10;
		}
	} else if (type === "V") {
		if (postion === "start") {
			// from start
			size = id + (shipSize - 1) * 10;
			placingIsVaild = size <= 9 * 10 + col;
		} else if (postion === "center") {
			size = id + (Math.floor(shipSize / 2) - 1) * 10;
			let size2 = id - (Math.floor(shipSize / 2) - 1) * 10;
			placingIsVaild = size <= 9 * 10 + col || size2 > col;
			console.log(
				`${size2}<= 9*10 + ${col} || ${size2} >${col}${
					size <= 9 * 10 + col || size2 > col
				}`
			);
		}
	}

	// vertical placing
	// from center
	// const size = id + Math.floor(shipSize / 2);
	// const placing = size - 1 >= col * 10
	//from the end
	// const size = id - shipSize + 1;
	// const placing = size > (col - 1) * 10;

	console.log("**************");
	console.log(
		"size " + size,
		"sipsize " + shipSize,
		"placingIsVaild " + placingIsVaild,
		" 9 * 10 * col",
		9 * 10 * col,
		"row,col " + row,
		col,
		"id " + generateCellId(row, col)
	);
	console.log("**************");
	//when done send true if valid or false if not valid and then send the array of cells that need to be occupied
};
