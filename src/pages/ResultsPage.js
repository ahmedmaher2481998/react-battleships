import React from 'react';
import { Link } from 'react-router-dom';
import { Head, Card } from '../components';
import { motion } from 'framer-motion';

const ResultsPage = () => {
  return (
    <>
      <Head title={'BattleShip | Results'} />
      <>
        <section className="text-gray-600 body-font w-screen h-[var(--contentHeight)] bg-mainblue">
          <div
            className="text-green 
          hover:underline-offset-8 transition-all duration-1000 ease-in-out hover:underline
          w-screen flex justify-center "
          >
            <Link to={'/'}>
              <p className="text-3xl p-4 text-slate-400 hover:text-white">
                Play again?
              </p>
            </Link>
          </div>
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-bage">
                This is all results collected on this device.
              </h1>
              <p className="lg:w-2/3 mx-auto text-bage leading-relaxed text-base">
                all scores are from /15
              </p>
            </div>
            <div className="flex flex-wrap -m-4">
              <Card />
            </div>
          </div>
        </section>
      </>
    </>
  );
};

export default ResultsPage;
