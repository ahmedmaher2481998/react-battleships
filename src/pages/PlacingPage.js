import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GridBoard } from "../components";
import { Fleet } from "../components";
import { changeGameState, ChangeHeadMessage } from "../store";
import { getHeadMessage, getName } from "../store/selectores";
import { ToastContainer } from "react-toastify";
const PlacingPage = () => {
	const name = useSelector((s) => getName(s));
	const dispatch = useDispatch();
	const headMsg = useSelector((s) => getHeadMessage(s));
	useEffect(() => {
		dispatch(changeGameState("placing"));
		//just taking the first name
		dispatch(ChangeHeadMessage("Place Your Fleet " + name.split(" ")[0]));
	}, [dispatch, name]);
	return (
		<div className=' grid grid-cols-6 grid-rows-9 gap-4 p-2 bg-mainblue text-bage h-[var(--contentHeight)]'>
			<ToastContainer />
			<h1 className='text-2xl md:col-span-9 md:row-start-1 md:my-auto col-span-3 row-start-1 row-end-2 text-black mx-auto font-bold'>
				{headMsg}
			</h1>
			<div className='col-start-1 col-end-3 row-span-1 row-start-2 row-end-3 md:row-span-5 md:col-span-1 md:row-start-2'>
				<Fleet />
			</div>
			<div className='col-span-6  row-sart-4 row-end-7md:col-span-5 md:row-start-2 md:row-end-7 md:col-start-2 '>
				<GridBoard />
			</div>
		</div>
	);
};
export default PlacingPage;
