import React from "react";
import Cell from "./Cell";
import Grid from "./Grid";
import Row from "./Row";
const GridWrapper = () => {
	return (
		<div className='w-screen h-screen grid-shadow flex justify-center items-center bg-gray-100 border-2 border-x-2 border-solid border-gray-800  '>
			<Grid>
				<Row>
					<Cell />
				</Row>
			</Grid>
		</div>
	);
};

export default GridWrapper;
