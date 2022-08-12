import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { GridBoard, Head, Notification } from '../components';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChangeHeadMessage,
  getName,
  getHeadMessage,
  startBattle,
  getBotResult,
  getPlayerResult,
} from '../store';
import { getDurationInMinutes } from '../helpers';
const BattlePage = () => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const name = useSelector(getName);
  const playerResult = useSelector(getPlayerResult);
  const botResult = useSelector(getBotResult);
  const headMessage = useSelector(getHeadMessage);
  const playerWon = playerResult === 15;
  const botWon = botResult === 15;

  useEffect(() => {
    if (name === '') Navigate('/');
    dispatch(startBattle());
    dispatch(
      ChangeHeadMessage(
        `${name.split(' ')[0]} the battle has started ... go hit the enemy`
      )
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const startTime = useSelector((s) => new Date(s.main?.startTime));

  useEffect(() => {
    let time;
    dispatch(
      ChangeHeadMessage(
        <span className="min-w-max text-black text-3xl font-semibold p-2 ">
          <p className="glass p-2 lg:-mt-4">{`${
            name.split(' ')[0]
          } score: ${playerResult} / 15`}</p>
          <p className="glass p-2 lg:-mt-4">{`bot score: ${botResult} / 15`}</p>
        </span>
      )
    );
    //wining cases
    if (playerResult === 15) {
      time = setTimeout(() => {
        Navigate(`/winner/${name.split(' ')[0]}`);
      }, 3000);
    } else if (botResult === 15) {
      time = setTimeout(() => {
        Navigate(`/winner/bot`);
      }, 3000);
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

      //constructing the result object to store in local Storage
      const result = {
        winner: playerWon ? name : 'Bot',
        playerName: name,
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
        durationOfGame: `${getDurationInMinutes(startTime)} min`,
      };

      //checking if there's a results array
      if (!localStorage.getItem('results')) {
        const results = [];
        results.push(result);
        localStorage.setItem('results', JSON.stringify(results));
      } else if (localStorage.getItem('results')) {
        const results = JSON.parse(localStorage.getItem('results'));
        results.push(result);
        localStorage.setItem('results', JSON.stringify(results));
      }
    }

    return () => clearTimeout(time);
    //will call only if someone won ..
    //eslint-disable-next-line
  }, [playerResult, botResult]);

  return (
    <div
      className=" bg-mainred text-center max-h-max min-h-[var(--contentHeight)]
    
    
    "
    >
      <Notification />
      <Head title="BattleShip | Battle" />
      <div className="flex flex-wrap justify-center items-center mt-12 md:mt-0">
        <span className="font-serif text-xl lg:text-3xl ">{headMessage}</span>
      </div>

      {/* <div className="flex p-2 h-4/5 justify-center gap-2 items-center flex-col xl:flex-row row-span-7 col-span-5 row-start-2 bg-sky-400"> */}
      {playerWon || botWon ? (
        <div className="bg-transparent w-screen  flex justify-center items-center">
          <style
            dangerouslySetInnerHTML={{
              __html:
                '\n\t@keyframes loader-rotate {\n\t\t0% {\n\t\t\ttransform: rotate(0);\n\t\t}\n\t\t100% {\n\t\t\ttransform: rotate(360deg);\n\t\t}\n\t}\n\t.loader {\n\t\tborder-right-color: transparent;\n\t\tanimation: loader-rotate 1s linear infinite;\n\t}\n',
            }}
          />

          <div className="w-20 h-20 border-4 border-blue-600 rounded-full loader"></div>
        </div>
      ) : (
        <div
          className="flex flex-col xl:flex-row justify-start  lg:p-8 p-4
        lg:mt-4 gap-2 "
        >
          <AnimatePresence>
            <motion.div
              className="w-min
              border-2 border-black rounded-xl bg-teal-800 "
              key={'playerGrid'}
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{
                y: -100,

                opacity: 0,
                transition: { duration: 0.2, ease: 'easeInOut' },
              }}
              transition={{ duration: 0.3, ease: 'easeIn' }}
            >
              <GridBoard />
            </motion.div>

            <motion.div
              className=" w-min
           
              border-2 border-black rounded-xl bg-amber-600 "
              key={'botGrid'}
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{
                y: -100,
                opacity: 0,
                transition: { duration: 0.2, ease: 'easeInOut' },
              }}
              transition={{ duration: 0.3, ease: 'easeIn' }}
            >
              <GridBoard pc={true} />
            </motion.div>
          </AnimatePresence>
        </div>
      )}
      {/* </div> */}
    </div>
  );
};

export default BattlePage;
