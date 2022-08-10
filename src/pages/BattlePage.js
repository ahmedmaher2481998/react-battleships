import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { GridBoard, Head, Notification, Winner } from '../components';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChangeHeadMessage,
  getName,
  getHeadMessage,
  startBattle,
  getBotResult,
  getPlayerResult,
} from '../store';

const BattlePage = () => {
  const Navigate = useNavigate();

  const dispatch = useDispatch();

  const name = useSelector(getName);

  const playerResult = useSelector(getPlayerResult);
  const botResult = useSelector(getBotResult);
  const headMessage = useSelector(getHeadMessage);

  const [playerWon, setPlayerWon] = useState(false);

  const [botWon, setBotWon] = useState(false);

  useEffect(() => {
    dispatch(ChangeHeadMessage(`it's ${name.split(' ')[0]} turn ..`));
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (name === '') Navigate('/');
    dispatch(startBattle());
    //eslint-disable-next-line
  }, []);
  const startTime = useSelector((s) => s.main.startTime);

  useEffect(() => {
    let time;
    console.log(
      `%c ${botResult}, ${playerResult}`,
      'color:blue;font-size:50px;'
    );
    if (playerResult === 15) {
      setPlayerWon(true);
      time = setTimeout(() => {
        Navigate(`/winner/${name.split(' ')[0]}`);
      }, 4000);
    } else if (botResult === 15) {
      setBotWon(true);
      time = setTimeout(() => {
        Navigate(`/winner/bot`);
      }, 4000);
    }
    //the game ended and there's a winner
    if (playerWon || botWon) {
      dispatch(
        ChangeHeadMessage(
          <span className="text-white bg-green-500 p-2 rounded-md">
            Game Ended,Please Wait to See Tee Result in 4 sec ...
          </span>
        )
      );

      //formatting the data to save in local Storage
      const diffInMilliSeconds = Math.abs(startTime - Date.now()) / 1000;
      const minutes = Math.floor(diffInMilliSeconds / 60) % 60;
      //constructing the result object to store in local Storage
      const result = {
        winner: playerWon ? name : 'Bot',
        startTime,
        playerScore: `${playerResult}`,
        botScore: `${botResult}`,
        timePlayed: `${startTime.toLocaleDateString('en-us', {
          weekday: 'long',
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        })} , at :
          ${startTime.toLocaleTimeString('en-US')}`,
        durationOfGame: `${minutes} min`,
      };
      console.log('***************************', result);
      //checking if there's a results array
      if (!localStorage.getItem('results')) {
        const results = [];
        results.push(result);
        localStorage.setItem('results', JSON.stringify(results));
      } else if (localStorage.getItem('results')) {
        const results = JSON.parse(localStorage.getItem('results'));
        result.push(result);
        localStorage.setItem('results', JSON.stringify(results));
      }
      if (time) return clearTimeout(time);
    }
    //will call only if someone won ..
  }, [playerResult, botResult]);

  return (
    <div
      className=" bg-mainred text-center  md:h-[var(--contentHeight)]
    
    grid grid-rows-9 grid-cols-5 gap-2 relative
    "
    >
      <Notification />
      <Head title="BattleShip | Battle" />
      <div className="col-span-5 row-start-1 flex flex-wrap justify-center items-center row-span-1">
        <span className="font-serif text-3xl text-green-300">
          {headMessage}
        </span>
      </div>

      {/* <div className="flex p-2 h-4/5 justify-center gap-2 items-center flex-col xl:flex-row row-span-7 col-span-5 row-start-2 bg-sky-400"> */}
      {playerWon || botWon ? (
        <div className="bg-blue-400 w-screen h-screen flex justify-center items-center">
          <style
            dangerouslySetInnerHTML={{
              __html:
                '\n\t@keyframes loader-rotate {\n\t\t0% {\n\t\t\ttransform: rotate(0);\n\t\t}\n\t\t100% {\n\t\t\ttransform: rotate(360deg);\n\t\t}\n\t}\n\t.loader {\n\t\tborder-right-color: transparent;\n\t\tanimation: loader-rotate 1s linear infinite;\n\t}\n',
            }}
          />

          <div className="w-20 h-20 border-4 border-blue-600 rounded-full loader"></div>
        </div>
      ) : (
        <>
          <AnimatePresence>
            <motion.div
              key={'playerGrid'}
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{
                y: -100,

                opacity: 0,
                transition: { duration: 0.2, ease: 'easeInOut' },
              }}
              transition={{ duration: 0.3, ease: 'easeIn' }}
              className="border-2 border-gray bg-neutral-100 "
            >
              <GridBoard />
            </motion.div>

            <motion.div
              key={'botGrid'}
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{
                y: -100,
                opacity: 0,
                transition: { duration: 0.2, ease: 'easeInOut' },
              }}
              transition={{ duration: 0.3, ease: 'easeIn' }}
              className=" border-2 border-black bg-slate-700 "
            >
              <GridBoard pc={true} />
            </motion.div>
          </AnimatePresence>
        </>
      )}
      {/* </div> */}
    </div>
  );
};

export default BattlePage;
