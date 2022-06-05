const WelcomePage = () => {
	return (
		<>
			<div className='flex items-center justify-center flex-col gap-10'>
				<p className='bg-gray-300 rounded-lg w-4/5'>
					Game Objective The object of Battleship is to try and sink
					all of the other player's before they sink all of your
					ships. All of the other player's ships are somewhere on
					his/her board. You try and hit them by calling out the
					coordinates of one of the squares on the board. The other
					player also tries to hit your ships by calling out
					coordinates. Neither you nor the other player can see the
					other's board so you must try to guess where they are. Each
					board in the physical game has two grids: the lower
					(horizontal) section for the player's ships and the upper
					part (vertical during play) for recording the player's
					guesses.
				</p>
				<button className=' text-white p-8 w-1/5 h-10 flex items-center justify-center hover:text-black hover:w-2/5 transition duration-500 ease-out hover:bg-slate-200  rounded-xl text-xl bg-slate-600 md:text-lg sm:text-sm'>
					Start Game
				</button>
				<div className='bg-gray-800 w-4/5 p-6 text-gray-50 rounded border-4 flex items-center justify-center flex-col border-black r '>
					<h1 className='text-xl mb-4 '>Rules of the game</h1>
					<p className='px-4 text-gray-100'>
						Each player places the 5 ships somewhere on their board.
						The ships can only be placed vertically or horizontally.
						Diagonal placement is not allowed. No part of a ship may
						hang off the edge of the board. Ships may not overlap
						each other. No ships may be placed on another ship. Once
						the guessing begins, the players may not move the ships.
						The 5 ships are: Carrier (occupies 5 spaces), Battleship
						(4), Cruiser (3), Submarine (3), and Destroyer (2).
					</p>
				</div>
			</div>
		</>
	);
};
export default WelcomePage;
