import { generateCellId } from "../../helpers/helpers";
import { CELL_HIT, CELL_OCCUPY, INIT_CELLS } from "./actions";
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
				generateCellId(payload.row, payload.col)
			].occupy.isOccupied = true;
			newState[generateCellId(payload.row, payload.col)].occupy.occupier =
				payload.ship;

			return newState;
		default:
			return state;
	}
};
