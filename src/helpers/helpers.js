import Cell from "../components/Cell";
import Row from "../components/Row";
const INIT_CELLS = "grid-generation/Create/Cell";
export const createGrid = (size) => {
	let rows = [];
	let cellsState = {};
	//creating rows
	for (let row = 1; row < size + 1; row++) {
		let cells = [];
		//creating cells
		for (let col = 1; col < size + 1; col++) {
			//creating grid
			cells.push(<Cell row={row} col={col} />);
			//creating cells state
			cellsState[`r${row}-c${col}`] = {
				col,
				row,
				ocupied: {
					isOcupied: false,
					ocuper: null,
				},
				hit: false,
			};
		}
		rows.push(<Row cells={cells} row={row} />);
	}
	console.log(rows);
	return { cellsState, rows };
};
