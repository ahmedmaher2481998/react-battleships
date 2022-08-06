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
      <div className=" bg-mainred text-center  ">
        <p className="font-serif text-3xl text-green-300">{headMessage}</p>

        <Head title="BattleShip | Battle" />
        <div className="flex justify-center items-center flex-col lg:flex-row">
          <div className="  mb-4 border-6 border-mainmeduimblue">
            <GridBoard />
          </div>
          <div className=" mt-6 mb-g border-4 border-mainmeduimblue">
            <GridBoard pc={true} />
          </div>
        </div>
      </div>
    </>
  );
};

export default BattlePage;
