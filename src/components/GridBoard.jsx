import React, { useEffect } from "react";
import { ROW_SIZE } from "../constants";
import { createGrid } from "../helpers";
import { initCells } from "../store";
import { useDispatch } from "react-redux";
const GridBoard = () => {
	const dispatch = useDispatch();
	const { rows, cellsState } = createGrid(ROW_SIZE);
	useEffect(() => {
		dispatch(initCells(cellsState));
	}, [cellsState, dispatch]);
	return <div>hello</div>;
};

export default GridBoard;
