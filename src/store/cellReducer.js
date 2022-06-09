import { generateCellId } from "../helpers/helpers";

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

//actions type
export const INIT_CELLS = "start/Create/Cell";
const CELL_HIT = "combat/change/CellHit";
const CELL_OCCUPY = "comabt/change/CellOcupy";
//hit cell , ocupy cell ,
//action creartors
export const initCells = (cells) => {
	return {
		type: INIT_CELLS,
		payload: { ...cells },
	};
};
export const cellHit = (row, col) => {
	return { type: CELL_HIT, payload: { row, col } };
};
export const occupyCell = (row, col) => {
	return { type: CELL_OCCUPY, payload: { row, col } };
};
//reducers
export const cellReducer = (state = {}, { type, payload }) => {
	let newState = { ...state };
	switch (type) {
		case INIT_CELLS:
			newState = { ...payload };
			return newState;

		case CELL_HIT:
			newState[generateCellId(payload.row, payload.col)].hit = true;
			return newState;
		case CELL_OCCUPY:
			newState[
				`r${payload.row}-c${payload.col}`
			].occupy.isOccupied = true;
			return newState;
		default:
			return state;
	}
};
