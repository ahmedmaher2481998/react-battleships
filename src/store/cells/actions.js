//actions type
const INIT_CELLS = "start/Create/Cell";
const CELL_HIT = "combat/change/CellHit";
const CELL_OCCUPY = "combat/change/CellOccupy";
//hit cell , occupy cell ,
//action creators
const initCells = (cells) => {
	return {
		type: INIT_CELLS,
		payload: { ...cells },
	};
};
const cellHit = (row, col) => {
	return { type: CELL_HIT, payload: { row, col } };
};
const occupyCell = (row, col, ship) => {
	return { type: CELL_OCCUPY, payload: { row, col, ship } };
};
export { cellHit, occupyCell, initCells, CELL_HIT, CELL_OCCUPY, INIT_CELLS };
