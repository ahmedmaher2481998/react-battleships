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

const playerGridAnimation = {};
const botGridAnimation = {};

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

  useEffect(() => {
    console.log(
      `%c ${botResult}, ${playerResult}`,
      'color:blue;font-size:50px;'
    );
    if (playerResult === 15) {
      setPlayerWon(true);
    } else if (botResult === 15) {
      setBotWon(true);
    }
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
        <p className="font-serif text-3xl text-green-300">{headMessage}</p>
      </div>

      {/* <div className="flex p-2 h-4/5 justify-center gap-2 items-center flex-col xl:flex-row row-span-7 col-span-5 row-start-2 bg-sky-400"> */}
      {playerWon || botWon ? (
        <Winner playerWon={playerWon} botWon={botWon} />
      ) : (
        <>
          <AnimatePresence>
            <motion.div
              key={'playerGrid'}
              initial={{ y: 0, x: '-50%', opacity: 0 }}
              animate={{ y: 0, x: 0, opacity: 1 }}
              exit={{
                y: 0,
                x: '50%',
                opacity: 0,
                transition: { duration: 0.2, ease: 'easeInOut' },
              }}
              transition={{ duration: 0.3, ease: 'easeIn' }}
              className="border-2 border-gray bg-neutral-100 "
            >
              <GridBoard />
            </motion.div>
          </AnimatePresence>

          <div className=" border-2 border-black bg-slate-700 ">
            <GridBoard pc={true} />
          </div>
        </>
      )}
      {/* </div> */}
    </div>
  );
};

export default BattlePage;
