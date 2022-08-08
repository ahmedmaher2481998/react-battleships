import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Head } from '../components';
import { GridBoard } from '../components';
import {
  ChangeHeadMessage,
  getName,
  getHeadMessage,
  startBattle,
  changePlayerTurn,
} from '../store';
const BattlePage = () => {
  const Navigate = useNavigate();

  const dispatch = useDispatch();

  const name = useSelector(getName);

  const headMessage = useSelector(getHeadMessage);

  useEffect(() => {
    dispatch(ChangeHeadMessage(`it's ${name.split(' ')[0]} turn ..`));
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (name === '') Navigate('/');
    console.log('starting');
    dispatch(startBattle());
    dispatch(changePlayerTurn());
    //eslint-disable-next-line
  }, []);
  return (
    <>
      <Head title="BattleShip | Battle" />
      <div
        className=" bg-mainred text-center  md:h-[var(--contentHeight)]
      
      grid grid-rows-9 grid-cols-5 gap-2
      "
      >
        <div className="col-span-5 row-start-1 flex flex-wrap justify-center items-center row-span-1">
          <p className="font-serif text-3xl text-green-300">{headMessage}</p>
        </div>

        {/* <div className="flex p-2 h-4/5 justify-center gap-2 items-center flex-col xl:flex-row row-span-7 col-span-5 row-start-2 bg-sky-400"> */}
        <div className="border-2 border-gray bg-neutral-100 ">
          <GridBoard />
        </div>

        <div className=" border-2 border-black bg-slate-700 ">
          <GridBoard pc={true} />
        </div>
        {/* </div> */}
      </div>
    </>
  );
};

export default BattlePage;
