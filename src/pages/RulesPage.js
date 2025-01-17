import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Head } from '../components';
import { getName } from '../store/selectors';
const RulesPage = () => {
  const Navigate = useNavigate();
  const name = useSelector((s) => getName(s));
  const startGame = (e) => {
    e.preventDefault();
    Navigate('/placing', { replace: true });
  };
  useEffect(() => {
    if (name === '') Navigate('/');
  }, [name, Navigate]);

  const gameObjectives = `	The object of Battleship is to try and sink all of the
						other player's before they sink all of your ships. All
						of the other player's ships are somewhere on his/her
						board. You try and hit them by calling out the
						coordinates of one of the squares on the board. The
						other player also tries to hit your ships by calling out
						coordinates. Neither you nor the other player can see
						the other's board so you must try to guess where they
						are. Each board in the physical game has two grids: the
						lower (horizontal) section for the player's ships and
						the upper part (vertical during play) for recording the
						player's guesses`;
  const startingNewGame = `		Each player places the 5 ships somewhere on their board. The ships
						can only be placed vertically or horizontally. Diagonal placement is
						not allowed. No part of a ship may hang off the edge of the board.
						Ships may not overlap each other. No ships may be placed on another
						ship. Once the guessing begins, the players may not move the ships.
						The 5 ships are: Carrier (occupies 5 spaces), Battleship (4),
						Cruiser (3), Submarine (3), and Destroyer (2).`;
  const playingGame = `Player's take turns guessing by calling out the coordinates. The
						opponent responds with "hit" or "miss" as appropriate. Both players
						should mark their board with pegs: red for hit, white for miss. For
						example, if you call out F6 and your opponent does not have any ship
						located at F6, your opponent would respond with "miss". You record
						the miss F6 by placing a white peg on the lower part of your board
						at F6. Your opponent records the miss by placing. When all of the
						squares that one your ships occupies have been hit, the ship will be
						sunk. You should announce "hit and sunk". In the physical game, a
						red peg is placed on the top edge of the vertical board to indicate
						a sunk ship. As soon as all of one player's ships have been sunk,
						the game ends.`;

  return (
    <>
      <Head title={'BattleShip | Rules'} />
      <div
        className=" h-full min-h-[var(--contentHeight)] md:h-fit w-[100vw] p-[2px] flex-col
       items-center  justify-start flex bg-mainmeduimblue"
      >
        <div className=" mb-2 text-mainheavyblue text-4xl  hover:text-bage ">
          Welcome {name}.
        </div>
        <div className="text-xl  text-bage">
          Please read the rules if you don&apos;t know it .
        </div>

        <div className="md:w-[60vw] rounded-2xl  text-center bg-bage md:mx-6 p-2 mb-2 border-2 my-2 border-mainheavyblue ">
          <span className="text-xl font-bold">
            Rules for BattleShip (a Milton Bradley Game)
          </span>
          <hr className=" mx-auto  mt-2 border-t-4 rounded-full w-full md:max-w-md border-lightblue " />
          <div className="rule-title "> Game Objective</div>
          <p className="rule-content hover:bg-stone-400">{gameObjectives}</p>
          <div className="rule-title ">Starting a New Game</div>
          <p className="rule-content hover:bg-stone-400">{startingNewGame}</p>
          <div className="rule-title ">Playing the Game</div>
          <p className="rule-content hover:bg-stone-400">{playingGame}</p>
        </div>
        <button
          onClick={startGame}
          className="btn w-40 lg:w-80 h-15 text-lg lg:text-4xl mb-4 font-bold"
        >
          Start
        </button>
      </div>
    </>
  );
};

export default RulesPage;
