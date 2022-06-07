import React from "react";
import { ROW_SIZE } from "../constants";
import { createGrid } from "../helpers";
const GridBoard = () => {
	const { rows, cellsState } = createGrid(ROW_SIZE);
	console.log(rows);
	return <>{rows}</>;
};

export default GridBoard;
