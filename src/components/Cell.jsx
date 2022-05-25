import React from "react";
import { ROW_SIZE } from "../constants";
const CELL_WIDTH = 1 / ROW_SIZE;
function Cell() {
	return (
		<>
			<div
				onClick={(e) => {
					let classes = e.target.classList;
					// console.log(classes);
					e.target.classList.remove("bg-gray-500");
					e.target.classList.add("bg-pink-600");
					console.log(classes);
				}}
				className={`rounded-xl bg-gray-500 p-4  flex flex-1
				text-xs break-all mx-1 hover:-mx-1  w-auto h-auto max-w-5
				`}
			>
				cell
			</div>
		</>
	);
}
export default Cell;
