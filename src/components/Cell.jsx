import React from "react";
import { ROW_SIZE } from "../constants";
const CELL_WIDTH = 1 / ROW_SIZE;
function Cell() {
	return (
		<>
			<div
				className={`rounded-sm hover:bg-gray-500 p-4 w-[${
					CELL_WIDTH * 100 + "%"
				}]`}
			>
				Cell
			</div>
		</>
	);
}
export default Cell;
