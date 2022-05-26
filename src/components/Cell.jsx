import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cellHit, occupyCell } from "../store";
const Cell = ({ col, row }) => {
	const dispatch = useDispatch();
	let title = `r${row}-c${col}`;
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
					console.log(row, col);
					dispatch(occupyCell(row, col));
				}}
				className={`rounded-xl bg-gray-500 p-2  flex flex-1
				text-xs break-all  hover:transition-all
                 hover:bg-pink-600 duration-500 ease-in-out text-center
                   w-24 mx-1 max-w-5
				   ${isOccupied ? "bg-black" : "bg-gray-500"}
				`}
			>
				{row + " " + col}
			</div>
		</>
	);
};

export default Cell;
