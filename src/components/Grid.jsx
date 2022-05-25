import { ROW_SIZE } from "../constants";
import { createGrid } from "../helpers/";

const Grid = () => {
	//generating the grid array
	let grid = createGrid(ROW_SIZE);

	return (
		<>
			<div
				className='w-2/3 h-2/3  text-white bg-gray-300 bg-opacity-50 border-4 rounded-lg border-gray-900 border-opacity-70
			focus:grid-shadow hover:grid-shadow active:grid-shadow
			outline-none  border-solid border- flex flex-col space-y-4 p-1 '
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
