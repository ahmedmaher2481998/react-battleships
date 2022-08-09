import React from 'react';
import { useParams } from 'react-router-dom';
import { FaSmileBeam, FaRegSadTear } from 'react-icons/fa/index';
const WinnerPage = () => {
  const { winnerName } = useParams();
  return (
    <>
      bg-cover bg-center
      <div
        style={{ backgroundImage: `url('../assets/victory.jpg')` }}
        className=" mx-auto h-screen w-screen bg-cover bg-center"
      >
        <div className="flex items-center justify-center h-full">
          <div className="bg-mainblue shadow-2xl p-6 rounded-2xl border-2 border-gray-50">
            <div className="flex flex-col">
              <div>
                <h2 className="font-bold text-gray-300 text-center">
                  The Winner Is {winnerName}
                </h2>
              </div>
              <div className="my-6">
                <div className="flex flex-row space-x-4 items-center">
                  <div id="icon">
                    <span
                      className={`text-${
                        winnerName === 'bot' ? 'rose' : 'green'
                      }-500 text-4xl`}
                    >
                      {winnerName === 'bot' ? (
                        <FaRegSadTear />
                      ) : (
                        <FaSmileBeam />
                      )}
                    </span>
                  </div>
                  <div id="temp">
                    <h4 className="text-4xl text-white">Score : </h4>
                    <p className="text-xs text-gray-200">
                      the game lasted for it was an epic battle{' '}
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full place-items-end text-right border-t-2 border-gray-100 mt-2">
                <button
                  type="button"
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
