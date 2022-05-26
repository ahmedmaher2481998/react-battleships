let initState = {
	cellCol: "0",
	cellRow: "0",
	ocupied: {
		isOcupied: false,
		ocuper: null,
	},
	hit: false,
};

//actions type
export const INIT_CELLS = "start/Create/Cell";
const CELL_HIT = "combat/change/CellHit";
//hit cell , ocupy cell ,
//action creartors
export const initCells = (cells) => {
	return {
		type: INIT_CELLS,
		payload: { ...cells },
	};
};
export const cellHit = (row, col) => {
	return {
		type: CELL_HIT,
		payload: { row, col },
	};
};
//reducers
export const cellReducer = (state = {}, { type, payload }) => {
	let newState;
	switch (type) {
		case INIT_CELLS:
			newState = { ...payload };
			return newState;

		case CELL_HIT:
			let { row, col } = payload;
			newState = { ...state };
			newState[`r${row}-c${col}`].hit = true;
			return newState;

		default:
			return state;
	}
};
