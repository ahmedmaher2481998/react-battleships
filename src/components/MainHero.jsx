import React, { useState } from "react";
import { heroVideo } from "../assests";
import { useDispatch } from "react-redux";
import { setPlayerName } from "../store";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const MainHero = () => {
	const [name, changeName] = useState("");
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const setName = (e, isStart) => {
		e.preventDefault();
		dispatch(setPlayerName(name));
		console.log("clicked");
		name === ""
			? toast("Please Enter Your Name !!")
			: isStart
			? navigate("/placing", { replace: true })
			: navigate("/rules", { replace: true });
	};
	return (
		<main
			className=' 
     bg-transparent w-screen h-[var(--contentHeight)]
    flex flex-col justify-center items-center p-8 
    '
		>
			<ToastContainer />
			<h1 className='mb-auto hover:text-bage text-mainheavyblue font-bold tracking-wide text-4xl'>
				Welcome to BattleShip{" "}
			</h1>
			<div className='w-screen  h-screen -z-10 absolute'>
				<video
					frameBorder='0'
					className='relative top-0 left-0 w-screen h-screen object-cover '
					autoPlay
					muted
					loop
				>
					<source type='video/mp4' src={heroVideo} />
				</video>
			</div>
			<div className=' mb-auto'>
				<div>
					<label className='label' htmlFor='name'>
						Please enter Your name
					</label>
					<input
						className='inputtext'
						type='text'
						id='name'
						value={name}
						placeholder='Your Name ? '
						onChange={(e) => {
							changeName(e.target.value);
						}}
					/>
				</div>
				<span className='flex flex-col lg:flex-row justify-center mt-2 lg:mt-6 items-center '>
					<button
						onClick={(e) => setName(e, false)}
						className='btn m-2 w-28 h-18 lg:w-32 lg:h-22'
					>
						Read Rules
					</button>
					<button
						onClick={(e) => setName(e, true)}
						className='btn m-2  w-28 h-18 lg:w-32 lg:h-22'
					>
						Start Game
					</button>
				</span>
			</div>
		</main>
	);
};

export default MainHero;
