import React, { useState } from 'react';
import { heroVideo } from '../assets';
import { useDispatch } from 'react-redux';
import { setPlayerName } from '../store';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const MainHero = () => {
  const [name, changeName] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [remember, setRemember] = useState(false);
  const setName = (e, isStart) => {
    e.preventDefault();
    //set playerName in the local storage
    if (remember) localStorage.setItem('playerName', name);
    dispatch(setPlayerName(name));

    name === ''
      ? toast('Please Enter Your Name !!')
      : isStart
      ? navigate('/placing', { replace: true })
      : navigate('/rules', { replace: true });
  };

  return (
    <main
      className=" 
     bg-transparent w-screen h-[var(--contentHeight)]
    flex flex-col justify-center items-center p-8 
    "
    >
      <ToastContainer />
      <h1 className="mb-auto hover:text-mainheavyblue text-bage  font-bold tracking-wide text-4xl">
        Welcome to BattleShip{' '}
      </h1>
      <div className="w-screen  h-screen -z-10 absolute">
        <video
          frameBorder="0"
          className="relative top-0 left-0 w-screen h-screen object-cover "
          autoPlay
          muted
          loop
        >
          <source type="video/mp4" src={heroVideo} />
        </video>
      </div>
      <div className=" mb-auto">
        <div>
          <label className="label" htmlFor="name">
            Please enter Your name
          </label>
          <input
            className="inputtext focus:outline-hidden "
            autoFocus={true}
            type="text"
            id="name"
            value={name}
            placeholder="Your Name ? "
            onChange={(e) => {
              changeName(e.target.value);
            }}
            onKeyUp={(e) => {
              if (e.key === 'Enter') setName(e, false);
            }}
          />
        </div>

        <div className="flex mt-4">
          <div className="flex items-center h-5">
            <input
              id="helper-checkbox"
              aria-describedby="helper-checkbox-text"
              type="checkbox"
              checked={remember}
              onChange={(e) => {
                setRemember((pre) => e.target.checked);
              }}
              className="w-4 h-4 text-blue-600  bg-gray-100 rounded  border-gray-600 focus:ring-rose-500  focus:ring-2"
            />
          </div>
          <div className="ml-2 text-sm">
            <label
              htmlFor="helper-checkbox"
              className="font-medium text-gray-300 "
            >
              Remember Me.
            </label>
            <p
              id="helper-checkbox-text"
              className="text-xs font-normal text-gray-300 "
            >
              You enter yor name only once and the game will remember it .
            </p>
          </div>
        </div>
        <span className="flex flex-col lg:flex-row justify-center mt-2 lg:mt-6 items-center ">
          <button
            onClick={(e) => setName(e, false)}
            className="btn m-2 w-28 h-18 lg:w-32 lg:h-22"
          >
            Read Rules
          </button>
          <button
            onClick={(e) => setName(e, true)}
            className="btn m-2  w-28 h-18 lg:w-32 lg:h-22"
          >
            Start Game
          </button>
        </span>
      </div>
    </main>
  );
};

export default MainHero;
