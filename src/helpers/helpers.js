import Cell from "../components/Cell";
import Row from "../components/Row";

export const createGrid = (size) => {
	let rows = [];
	//creating rows
	for (let row = 1; row < size + 1; row++) {
		let cells = [];
		//creating cells
		for (let cell = 1; cell < size + 1; cell++) {
			cells.push(<Cell row={row} cell={cell} />);
		}
		rows.push(<Row cells={cells} row={row} />);
	}
	return rows;
};
