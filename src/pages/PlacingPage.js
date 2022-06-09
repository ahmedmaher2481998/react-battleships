import React from "react";
import { GridBoard } from "../components";
import { Fleet } from "../components";
const PlacingPage = () => {
	return (
		<div
			className=' 
		 grid grid-cols-6 grid-rows-9 gap-4
		p-2 bg-mainblue text-bage h-[var(--contentHeight)]'
		>
			<h1
				className='text-2xl 
			md:col-span-9 md:row-start-1 md:my-auto
			col-span-3 row-start-1 row-end-2   text-black mx-auto font-bold'
			>
				Place Your Fleet
			</h1>
			<div
				className='
			 col-start-1 col-end-3 row-span-1 row-start-2 row-end-3
			 		md:row-span-5 md:col-span-1 md:row-start-2

			 '
			>
				<Fleet />
			</div>
			<div
				className='
			
			col-span-6  row-sart-4 row-end-7
			md:col-span-5 md:row-start-2 md:row-end-7 md:col-start-2
		 '
			>
				<GridBoard />
			</div>
		</div>
	);
};
export default PlacingPage;
