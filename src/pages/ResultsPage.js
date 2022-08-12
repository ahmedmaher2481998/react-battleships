import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Head, Card } from '../components';
import { useDispatch } from 'react-redux';

const ResultsPage = () => {
  const dispatch = useDispatch();
  const results = JSON.parse(localStorage.getItem('results'));

  useEffect(() => {
    dispatch({ type: 'CLEAR_BOT' });
    dispatch({ type: 'CLEAR_MAIN' });
    dispatch({ type: 'CLEAR_CELLS' });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Head title={'BattleShip | Results'} />
      <>
        <section className="text-gray-600 body-font min-w-max max-h-max min-h-[var(--contentHeight)] bg-mainblue">
          <div
            className="text-green 
          hover:underline-offset-8 transition-all  ease-in-out hover:underline
          w-full flex justify-center "
          >
            <Link to={'/'}>
              <p className="text-3xl p-4 text-slate-400 hover:text-white">
                Play again?
              </p>
            </Link>
          </div>
          {results ? (
            <ResultBody>
              {results.map((result, index) => {
                return <Card key={index} result={result} />;
              })}
            </ResultBody>
          ) : (
            <>
              <div className="flex flex-col text-center w-full mb-20">
                <h1 className="sm:text-3xl text-2xl font-medium mt-20 title-font mb-4 text-bage">
                  No Results Yet..
                </h1>
              </div>
            </>
          )}
        </section>
      </>
    </>
  );
};

const ResultBody = ({ children }) => {
  return (
    <>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-bage">
            This is all results collected on this device.
          </h1>
          <p className="lg:w-2/3 mx-auto text-bage leading-relaxed text-base">
            all scores are from /15
          </p>
        </div>
        <div className="flex flex-wrap -m-4">{children}</div>
      </div>
    </>
  );
};

export default ResultsPage;
