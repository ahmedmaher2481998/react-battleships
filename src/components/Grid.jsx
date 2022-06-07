import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { createGrid, ROW_SIZE } from "../helpers/";
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
	}, [cellState, dispatch]);
	useEffect(() => {
		setCellState(cellState);
	}, [cellState, rows]);
	let start = false;
	return (
		<>
			<div className=''>{grid}</div>
		</>
	);
};

export default Grid;
/* 
lg:w-max  lg:h-max w-screen h-4/6   text-white bg-gray-300
				bg-opacity-50 border-2 rounded-lg border-gray-900
				border-opacity-70 focus:grid-shadow 
				hover:grid-shadow active:grid-shadow
				outline-none  border-solid border- 
				flex flex-col space-y-4 p-1 '
*/
