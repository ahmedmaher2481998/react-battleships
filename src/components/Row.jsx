import React from "react";

const Row = ({ row, cells }) => {
	return (
		<>
			{/* <div data-row={`${row}`}				className=' h-[9%] w-[100%] flex  rounded-lg justify-between'			> */}
			<div className=' h-[9%] w-[100%] flex  rounded-lg justify-between'>
				{cells}
			</div>
		</>
	);
};

export default Row;
