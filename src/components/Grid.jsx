import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ROW_SIZE } from "../constants";
import { createGrid } from "../helpers/";
import { initCells } from "../store";
const Grid = () => {
	//generating the grid array
	const { rows, cellsState } = createGrid(ROW_SIZE);
	const [grid, setGrid] = useState(rows);
	const [cellState, setCellState] = useState(cellsState);
	const dispatch = useDispatch();

	//useEffect init grid and cells state
	useEffect(() => {
		dispatch(initCells(cellState));
	}, []);
	useEffect(() => {
		setCellState(cellState);
	}, [cellState, rows]);
	return (
		<>
			<div
				className='
				lg:w-max  lg:h-max w-screen h-4/6   text-white bg-gray-300
				bg-opacity-50 border-2 rounded-lg border-gray-900
				border-opacity-70 focus:grid-shadow 
				hover:grid-shadow active:grid-shadow
				outline-none  border-solid border- 
				flex flex-col space-y-4 p-1 '
			>
				{grid}
			</div>
		</>
	);
};

export default Grid;

/*
//row
import { ROW_SIZE } from "../constants";
import { createComponentArray } from "../helpers";
import Cell from "./Cell";

const Row = ({ size }) => {
	let row = createComponentArray(ROW_SIZE, <Cell></Cell>);
	return (
		<>
			<div className=' flex h-max w-full rounded-lg justify-between '>
				{row}
			</div>
		</>
	);
};

export default Row;
//cell
import React from "react";
// import { ROW_SIZE } from "../constants";

function Cell({ content }) {
	return (
		<>
			<div
				onClick={(e) => {
					console.log("clicked");
				}}
				className={`rounded-xl bg-gray-500 p-4  flex flex-1
				text-xs break-all mx-1 hover:-mx-1  w-auto h-auto max-w-5
				`}
			>
				{content}
			</div>
		</>
	);
}
export default Cell;

*/
