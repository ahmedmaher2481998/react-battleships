import React from "react";
import Cell from "./Cell";
const Row = (props) => {
	return (
		<>
			<div className=' flex h-max w-full rounded-lg gap-1 '>
				<Cell />
				<Cell />
				<Cell />
				<Cell />
				<Cell />
				<Cell />
				<Cell />
				<Cell />
				<Cell />
				<Cell />
			</div>
		</>
	);
};

export default Row;
