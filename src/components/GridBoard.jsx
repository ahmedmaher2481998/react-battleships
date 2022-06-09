import React, { useEffect } from "react";

import { ROW_SIZE, createGrid } from "../helpers";
import { getSelectedShip, getPlacingStatus, initCells } from "../store";
import { useDispatch, useSelector } from "react-redux";
const GridBoard = () => {
	const dispatch = useDispatch();
	const { rows, cellsState } = createGrid(ROW_SIZE);
	const selectedShip = useSelector((s) => getSelectedShip(s));
	const placingStatus = useSelector((s) => getPlacingStatus(s));
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
