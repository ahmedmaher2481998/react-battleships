import React from "react";

const Row = ({ row, cells }) => {
	return (
		<>
			<div
				key={`${row}`}
				data-row={`${row}`}
				className=' flex h-max w-full rounded-lg justify-between '
			>
				{cells}
			</div>
		</>
	);
};

export default Row;
