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
    bg-mainmeduimblue w-screen lg:h-[var(--contentHeight)]
	h-full
    flex flex-col justify-center items-center p-8 
    '
		>
			<ToastContainer />
			<h1 className='mb-auto hover:text-bage text-mainheavyblue font-bold tracking-wide text-4xl'>
				Welcome to BattleShip{" "}
			</h1>

			<video frameBorder='0' autoPlay muted loop>
				<source
					className='w-4/6 h-3/6'
					type='video/mp4'
					src={heroVideo}
				/>
			</video>

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
			<span>
				<button onClick={(e) => setName(e, false)} className='btn m-4'>
					Read Rules
				</button>
				<button onClick={(e) => setName(e, true)} className='btn mt-4'>
					Start Game
				</button>
			</span>
		</main>
	);
};

export default MainHero;
