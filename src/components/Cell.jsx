import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cellHit, occupyCell } from "../store";
import { colors } from "../constants";
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
				data-col={`${col}`}
				onClick={(e) => {
					dispatch(cellHit(row, col));
				}}
				className={`rounded-full bg-gray-200 text-black p-2  flex flex-1
				text-xs break-all  hover:transition-all
                 hover:bg-pink-600 duration-500 ease-in-out text-center
                   lg:w-24 mx-1 my-1 max-w-5 
				   bg-[${colors.sub1}]
				`}
			>
				{isHit ? (
					<img
						className='w-16 h-16'
						src={explosion}
						alt='explosion'
					/>
				) : (
					""
				)}

				{/* {isOccupied ? "ocupyed" : " "}  */}
			</div>
		</>
	);
};

export default Cell;
