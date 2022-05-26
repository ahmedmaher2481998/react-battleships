import React from "react";

const Row = ({ row, cells }) => {
	return (
		<>
			<div
				data-row={`${row}`}
				className=' flex h-max w-full rounded-lg justify-between '
			>
				{cells}
			</div>
		</>
	);
};

export default Row;
