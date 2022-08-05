import React from "react";
import { useNavigate } from "react-router-dom";
import { image404 } from "../assets/index";
import { Head } from "../components";

const NotFound = () => {
	const navigate = useNavigate();
	return (
		<>
			<Head title={"BattleShip | 404"} />
			<div
				className='bg-mainheavyblue
			flex justify-center items-center gap-3 flex-col
			h-[var(--contentHeight)]'
			>
				<img
					className='w-[60%] rounded-lg'
					src={image404}
					alt='Not found img'
				/>
				<h2 className='text-white font-mono lg:text-4xl text-3xl'>
					The page Requested is not Found!!
				</h2>
				<button onClick={() => navigate(-1)} className='btn w-32 text-xl  '>
					Back
				</button>
			</div>
		</>
	);
};

export default NotFound;
