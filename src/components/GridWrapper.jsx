import React from "react";
import Cell from "./Cell";
import Grid from "./Grid";
import Row from "./Row";
const GridWrapper = () => {
	return (
		<div
			className="w-screen h-screen flex-col flex justify-center items-center z-0 
        bg-[url('../src/main.jpg')] bg-no-repeat bg-cover bg-center  bg-fixed  shadow-inner"
		>
			<h1 className='text-4xl text-black bg-gray-500  rounded-lg p-3 bg-opacity-50 hover:bg-opacity-70 hover:shadow-2xl -mt-30  mb-4 '>
				Welcome To BattleShip
			</h1>
			<Grid>
				<Row>
					<Cell />
				</Row>
			</Grid>
		</div>
	);
};

export default GridWrapper;
