import React, { useState } from "react";
import { heroVideo } from "../assests";
import { useDispatch } from "react-redux";
import { setPlayerName } from "../store";
const MainHero = () => {
	const [name, changeName] = useState("");
	const dispatch = useDispatch();
	let setName = (e) => {
		e.preventDefault();
		dispatch(setPlayerName(name));
	};
	return (
		<main
			className=' 
    bg-mainmeduimblue w-screen h-full
    flex flex-col justify-center items-center p-8 
    '
		>
			<h1 className='mb-auto hover:text-bage text-mainheavyblue font-bold tracking-wide text-4xl'>
				Welcome to BattleShip{" "}
			</h1>
			<span className='w-full aspect-video  h-[50%] md:h-[40%] my-2'>
				<video frameborder='0' autoPlay muted loop>
					<source type='video/mp4' src={heroVideo} />
				</video>
			</span>
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
				<button onClick={setName} className='btn m-4'>
					Read Rules
				</button>
				<button onClick={setName} className='btn mt-4'>
					Start Game
				</button>
			</span>
		</main>
	);
};

export default MainHero;
