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
      <div className=" gap-4 p-2 bg-mainblue text-bage h-[var(--contentHeight)] ">
        <ToastContainer />
        <h1
          className="text-2xl text-black mx-auto font-bol
				
				d"
        >
          {headMsg}
        </h1>
        <div
          className="
				 "
        >
          <Fleet />
        </div>
        <div
          className="
				"
        >
          <GridBoard />
        </div>
      </div>
    </>
  );
};
export default PlacingPage;
