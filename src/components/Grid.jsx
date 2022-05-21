import React from "react";
import Row from "./Row";
const Grid = () => {
	return (
		<>
			<div
				className='w-2/3 h-2/3  text-white bg-transparent border-4 rounded-lg border-gray-900 border-opacity-70
			focus:grid-shadow hover:grid-shadow active:grid-shadow
			outline-none  border-solid border- flex p-1 '
			>
				<Row />
			</div>
		</>
	);
};

export default Grid;
