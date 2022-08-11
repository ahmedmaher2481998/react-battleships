import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Fleet, GridBoard, Head } from '../components';
import { ChangeHeadMessage } from '../store';
import { getHeadMessage, getName } from '../store/selectors';
import { ToastContainer } from 'react-toastify';

const PlacingPage = () => {
  const Navigate = useNavigate();
  const name = useSelector((s) => getName(s));
  const dispatch = useDispatch();
  const headMsg = useSelector((s) => getHeadMessage(s));
  //taking the first name // redirect to welcome page
  useEffect(() => {
    dispatch(ChangeHeadMessage('Place Your Fleet ' + name.split(' ')[0]));
  }, [dispatch, name]);
  useEffect(() => {
    if (name === '') Navigate('/');
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <Head title={'BattleShip | Placing ships'} />
      <div
        className="
				grid grid-cols-5 grid-rows-5
				gap-4 p-2 bg-mainblue text-bage max-h-[var(--contentHeight)] 
"
      >
        <ToastContainer />
        <div
          className="
				row-start-1 row-span-1
				w-screen text-center p-2"
        >
          <h1 className="text-2xl text-black mx-auto font-bold">{headMsg}</h1>
        </div>

        <div className="col-start-1  row-start-1">
          <Fleet />
        </div>
        <div
          className=" 
				md:col-span-5 md:mt-8 md:col-start-2  row-start-2 row-span-3
				"
        >
          <GridBoard />
        </div>
      </div>
    </>
  );
};
export default PlacingPage;
