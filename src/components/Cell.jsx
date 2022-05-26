import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { initCell } from "../store";
const Cell = ({ cell, row }) => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(initCell(row, cell));
	}, [cell, row, dispatch]);
	return (
		<>
			<div
				key={row + "-" + cell}
				data-col={`${cell}`}
				onClick={(e) => {
					console.log("clicked");
				}}
				className={`rounded-xl bg-gray-500 p-2  flex flex-1
				text-xs break-all  hover:transition-all
                 hover:bg-pink-600 duration-500 ease-in-out text-center
                   w-24 mx-1 max-w-5
				`}
			>
				{row + " " + cell}
			</div>
		</>
	);
};

export default Cell;
