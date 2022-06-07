import React from "react";

const Row = ({ row, cells }) => {
	return (
		<>
			<div data-row={`${row}`} className='flex -flex-row m-0'>
				{cells}
			</div>
		</>
	);
};

export default Row;
