import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Head } from '../components';
import { GridBoard } from '../components';
import { ChangeHeadMessage, getName, getHeadMessage } from '../store';
const BattlePage = () => {
  const dispatch = useDispatch();
  const name = useSelector(getName);
  const headMessage = useSelector(getHeadMessage);
  useEffect(() => {
    dispatch(ChangeHeadMessage(`it's ${name.split(' ')[0]} turn ..`));
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

        <div className="flex p-2 h-4/5 justify-center gap-2 items-center flex-col xl:flex-row row-span-7 col-span-5 row-start-2">
          <div className="border-2 border-gray">
            <GridBoard />
          </div>

          <div className=" border-2 border-black bg-slate-700">
            <GridBoard pc={true} />
          </div>
        </div>
      </div>
    </>
  );
};

export default BattlePage;
