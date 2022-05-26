import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cellHit } from "../store";
const Cell = ({ col, row }) => {
	const dispatch = useDispatch();
	const isHit = useSelector(({ cells }) => {
		let title = `r${row}-c${col}`;

		let hit = cells[title]?.hit || false;
		return hit;
	});

	return (
		<>
			<div
				data-col={`${col}`}
				onClick={(e) => {
					console.log(row, col);
					dispatch(cellHit(row, col));
				}}
				className={`rounded-xl bg-gray-500 p-2  flex flex-1
				text-xs break-all  hover:transition-all
                 hover:bg-pink-600 duration-500 ease-in-out text-center
                   w-24 mx-1 max-w-5
				   ${isHit ? "bg-black" : "bg-gray-500"}
				`}
			>
				{row + " " + col}
			</div>
		</>
	);
};

export default Cell;
