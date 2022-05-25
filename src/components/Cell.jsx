import React from "react";
// import { ROW_SIZE } from "../constants";

function Cell({ content }) {
	return (
		<>
			<div
				onClick={(e) => {
					console.log("clicked");
				}}
				className={`rounded-xl bg-gray-500 p-4  flex flex-1
				text-xs break-all mx-1 hover:-mx-1  w-auto h-auto max-w-5
				`}
			>
				{content}
			</div>
		</>
	);
}
export default Cell;
