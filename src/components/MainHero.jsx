import React from "react";
import { heroVideo } from "../assests";
const MainHero = () => {
	return (
		<main
			className=' 
    bg-mainmeduimblue w-screen h-[86.5vh]
    flex flex-col justify-center items-center p-8 
    '
		>
			<h1 className='mb-auto hover:text-bage text-mainheavyblue font-bold tracking-wide text-4xl'>
				Welcome to BattleShip{" "}
			</h1>
			<video
				frameborder='0'
				className='w-full aspect-video  h-[40vh] mb-4'
				autoPlay
				muted
				loop
			>
				<source type='video/mp4' src={heroVideo} />
			</video>
			<div>
				<label className='label' htmlFor='name'>
					Please enter Your name
				</label>
				<input
					className='inputtext'
					type='text'
					id='name'
					placeholder='Your Name ? '
				/>
			</div>
			<span>
				<button className='btn m-4'>Read Rules</button>
				<button className='btn mt-4'>Start Game</button>
			</span>
		</main>
	);
};

export default MainHero;
