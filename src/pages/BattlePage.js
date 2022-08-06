import React from 'react';
import { useSelector } from 'react-redux';
import { Head } from '../components';
import { GridBoard } from '../components';
import { getHeadMessage } from '../store';
const BattlePage = () => {
  const headMessage = useSelector(getHeadMessage);
  return (
    <>
      <div className=" bg-mainred">
        <Head title="BattleShip | Battle" />
        <p>{headMessage}</p>
        <div className="h-[80vh] mb-4 border-6 border-mainmeduimblue">
          <GridBoard />
        </div>
        <div className="h-[80vh] mt-6 mb-g border-4 border-mainmeduimblue">
          <GridBoard />
        </div>
      </div>
    </>
  );
};

export default BattlePage;
