import React from "react";
import { GridBoard } from "../components";
import { Fleet } from "../components";
const PlacingPage = () => {
	return (
		<div className='flex flex-col justify-start items-start p-2 bg-mainblue text-bage h-[var(--contentHeight)]'>
			<h1 className='text-2xl text-black mx-auto font-bold'>
				Place Your Fleet{" "}
			</h1>
			<div>{/* <Fleet /> */}</div>
			<div>
				<GridBoard />
			</div>
		</div>
	);
};

export default PlacingPage;
