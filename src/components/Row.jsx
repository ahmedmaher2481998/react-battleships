import React from 'react';

const Row = ({ cells }) => {
  return (
    <>
      <div className=" h-[9%] w-full flex  rounded-lg justify-between">
        {cells}
      </div>
    </>
  );
};

export default Row;
