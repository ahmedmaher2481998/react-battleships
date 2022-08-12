import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FaSmileBeam, FaRegSadTear } from 'react-icons/fa/index';
import { useDispatch, useSelector } from 'react-redux';
import { getBotResult, getName, getPlayerResult } from '../store';
import { victory } from '../assets';
import { getDurationInMinutes } from '../helpers';
import { useEffect } from 'react';
const WinnerPage = () => {
  const navigate = useNavigate();
  const { winnerName } = useParams();
  const getWinnerScore = useSelector((s) =>
    winnerName === 'bot' ? getBotResult(s) : getPlayerResult(s)
  );
  const name = useSelector(getName);
  const startTime = useSelector((s) => new Date(s.main.startTime));
  const botResult = useSelector(getBotResult);
  const playerResult = useSelector(getPlayerResult);
  const timePlayed = `${startTime.toLocaleDateString('en-us', {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })} , at :
          ${startTime.toLocaleTimeString('en-US')}`;
  useEffect(() => {
    if (name === '') navigate('/');
  }, []);
  return (
    <>
      <div
        style={{ backgroundImage: `url(${victory})` }}
        className=" mx-auto h-screen w-screen bg-cover bg-center"
      >
        <div className="flex items-center justify-center h-full">
          <div className="glass shadow-2xl p-6 rounded-2xl border-2 border-gray-200">
            <div className="flex flex-col">
              <div>
                <h2 className="font-bold text-gray-500 text-center">
                  The Winner Is {winnerName}
                </h2>
              </div>
              <div className="my-6">
                <div className="flex flex-row space-x-4 items-center">
                  <div id="icon">
                    <span
                      className={`${
                        winnerName === 'bot'
                          ? 'text-rose-400'
                          : 'text-green-400'
                      } text-4xl`}
                    >
                      {winnerName === 'bot' ? (
                        <FaRegSadTear />
                      ) : (
                        <FaSmileBeam />
                      )}
                    </span>
                  </div>
                  <div id="temp">
                    <h4 className="text-4xl mb-4  text-white">
                      Score: {getWinnerScore}
                    </h4>
                    <p className="text-s flex flex-wrap max-w-sm text-gray-400 lg:text-lg">
                      the game started at {timePlayed}, and it lasted for{' '}
                      {getDurationInMinutes(startTime)} min, it was an epic
                      battle.which ended by winning of {winnerName} by
                      {playerResult > botResult ? playerResult : botResult}
                      ,great game {name}
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full place-items-end text-right border-t-2 border-gray-100 mt-2">
                <button
                  type="button"
                  onClick={() => {
                    navigate('/results');
                  }}
                  className="border border-teal-500 bg-teal-500 text-white rounded-md px-3 py-2 m-2 
                  transition duration-500 ease select-none hover:bg-teal-600 focus:outline-none
                  focus:shadow-outline"
                >
                  Go to Results board
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WinnerPage;
