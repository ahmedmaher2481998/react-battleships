// import React, { useEffect } from "react";
// import { useEffect } from "react";
// import { ROW_SIZE } from "../constants";
import Cell from "./Cell";
let id = 0;
const Row = ({ cellNumber }) => {
	return (
		<>
			<div className=' flex h-max w-full rounded-lg justify-between '>
				<Cell />
			</div>
		</>
	);
};

export default Row;
