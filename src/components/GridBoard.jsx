import React, { useEffect } from "react";
import Cell from "./Cell";
import Row from "./Row";
import { generateCellId } from "../helpers";
import { initCellState } from "../store/cellReducer";
import { ROW_SIZE } from "../helpers";
import {
	getSelectedShip,
	getPlacingStatus,
	initCells,
	changeGameState,
} from "../store";
import { useDispatch, useSelector } from "react-redux";
//end of imports
const createGrid = (size) => {
	let rows = [];
	let cellsState = {};
	//creating rows
	for (let row = 1; row < size + 1; row++) {
		let cells = [];
		//creating cells
		for (let col = 1; col < size + 1; col++) {
			//creating grid
			cells.push(
				<Cell key={generateCellId(row, col)} row={row} col={col} />
			);
			//creating cells state
			cellsState[`${generateCellId(row, col)}`] = initCellState(row, col);
		}
		rows.push(<Row key={row} cells={cells} row={row} />);
	}

	return { cellsState, rows };
};

const GridBoard = () => {
	const dispatch = useDispatch();
	// const { rows, cellsState } = createGrid(10);
	const selectedShip = useSelector((s) => getSelectedShip(s));
	const placingStatus = useSelector((s) => getPlacingStatus(s));

	const { rows, cellsState } = createGrid(ROW_SIZE);

	useEffect(() => {
		dispatch(initCells(cellsState));
	}, [cellsState, dispatch]);
	return (
		<div
			className={` bg-purple-900 bg-opacity-40
		md:h-full
		flex flex-col justify-between items-center
		rounded-lg p-2 lg:p-4 xl:p-6 
		${selectedShip !== "" && !placingStatus ? "cursor-grabbing" : null}
		`}
		>
			{rows}
		</div>
	);
};

export default GridBoard;
