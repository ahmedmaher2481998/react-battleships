import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cellHit, occupyCell } from "../store";
import { explosion } from "../assests";
import { colors } from "../constants";
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
					dispatch(cellHit(row, col));
				}}
				className={`rounded-full bg-red-200 p-2  flex flex-1
				text-xs break-all  hover:transition-all
                 hover:bg-pink-600 duration-500 ease-in-out text-center
                   lg:w-24 mx-1 my-1 max-w-5 
				   bg-[${colors.sub1}]
				`}
			>
				{isHit ? (
					<img src='../assests/explosion2.svg' alt='explosion' />
				) : (
					""
				)}
				{isOccupied ? "ocupyed" : " "}
			</div>
		</>
	);
};

export default Cell;
