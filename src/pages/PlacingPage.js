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
				md:gap-2 lg:gap-3  bg-mainblue text-bage h-[100vh] md:min-h-[var(--contentHeight)] 
"
      >
        <ToastContainer />
        <div
          className="
				row-start-1 row-span-1 absolute mx-8
				md:mx-20 lg:w-4/5
        text-center p-2"
        >
          <h1 className="md:text-2xl text-xl lg:h-full lg:py-6 text-black  font-bold">
            {headMsg}
          </h1>
        </div>

        <div className="col-start-1  mt-4 row-start-1">
          <Fleet />
        </div>
        <div
          className=" 
          
          md:inline-block
				md:col-span-4 md:col-start-2 
         row-start-2 row-span-3 
absolute top-36 right-10  mt-16 
lg:mt-2
      
				"
        >
          <GridBoard />
        </div>
      </div>
    </>
  );
};
export default PlacingPage;
