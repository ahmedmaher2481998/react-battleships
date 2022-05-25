import React from "react";

const Cell = ({ cell, row }) => {
	return (
		<>
			<div
				key={cell}
				data-col={`${cell}`}
				onClick={(e) => {
					console.log("clicked");
				}}
				className={`rounded-xl bg-gray-500 p-4  flex flex-1
				text-xs break-all mx-1 hover:-mx-1  w-auto h-auto max-w-5
				`}
			>
				{row + " " + cell}
			</div>
		</>
	);
};

export default Cell;
