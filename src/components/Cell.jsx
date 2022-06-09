import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { cellHit, occupyCell } from "../store";

import { generateCellId } from "../helpers/helpers";

import { battlesShip, ship, submarine, boat, explosion } from "../assests";
//end imports

const Cell = ({ col, row }) => {
	const dispatch = useDispatch();
	let title = `${generateCellId(row, col)}`;
	const [cellContent, setCellContent] = useState(generateCellId(row, col));

	const isHit = useSelector(({ cells }) => {
		let hit = cells[title]?.hit || false;
		return hit;
	});

	const isOccupied = useSelector(({ cells }) => {
		let isOccupied = cells[title]?.occupy.isOccupied;
		return isOccupied;
	});

	return (
		<>
			<div
				data-id={`${generateCellId(row, col)}`}
				className={`
				w-[9%] h-8 md:h-[100%]
				 bg-indigo-400 m-[2px] rounded-full flex items-center justify-center hover:bg-yeelow  
				`}
			>
				{/* {generateCellId(row, col)} */}
			</div>
		</>
	);
};

export default Cell;
/* w-8 h-8 lg:w-12
				md:h-12 md:w-12
				lg:h-12
				xl:w-16  xl:h-14 
				*/
