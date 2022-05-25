import React from "react";

import Grid from "./Grid";
import { useDispatch, useSelector } from "react-redux";
import { ChangeHeadMessage, getHeadMessage } from "../store";
const GridWrapper = () => {
	let dispatch = useDispatch();

	return (
		<div
			className="w-screen h-screen flex-col flex justify-center items-center z-0 
        bg-[url('../src/main.jpg')] bg-no-repeat bg-cover bg-center  bg-fixed  shadow-inner"
		>
			{useSelector(getHeadMessage())}
			<button
				onClick={() => {
					dispatch(ChangeHeadMessage("Changees!"));
				}}
			>
				Change Head Message{" "}
			</button>
			<h1 className='text-4xl text-black bg-gray-500  rounded-lg p-3 bg-opacity-50 hover:bg-opacity-70 hover:shadow-2xl -mt-30  mb-4 '></h1>
			<Grid />
		</div>
	);
};

export default GridWrapper;
