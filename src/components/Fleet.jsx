import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FleetShip from './FleetShip';
import {
  // placeShip,
  // getSelectedShip,
  getPlacingStatus,
  // ChangeHeadMessage,
  changePlacingPosition,
  changePlacingStatus,
  ChangeHeadMessage,
  // changePlacingStatus,
} from '../store';
import { boat, battlesShip, submarine, ship, carrier } from '../assets';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { flushSync } from 'react-dom';

const Fleet = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const placingStatus = useSelector((s) => getPlacingStatus(s));
  const [placingPosition, setPlacingPosition] = useState('V');
  const [fleet, setFleet] = useState([]);
  console.log(
    '*****',
    useSelector((s) => s.main.placing.placingPosition)
  );
  useEffect(() => {
    if (fleet.length === 5 && placingStatus === 'done') {
      dispatch(changePlacingStatus('end'));
      dispatch(
        ChangeHeadMessage(
          <p className="bg-green-400 text-black font-bold p-1 text-xl rounded-lg">
            Let&apos;s start the battle
          </p>
        )
      );
    }
  }, [fleet, placingStatus, dispatch]);
  useEffect(() => {
    const placingType = placingPosition === 'v' ? 'Vertical' : 'Horizontal';
    toast.success(`Ship position now Is  ${placingType}`);
    dispatch(changePlacingPosition(placingPosition));
  }, [placingPosition]);
  return (
    <>
      <div className={placingStatus === 'end' ? 'hidden' : ''}>
        <div className=" absolute">
          <div
            className="relative 
            w-full
          top-16 left-0
          lg:left-5 lg:top-8 "
            id="fleet"
          >
            <div className="-mt-8 mb-2 sm:max-w-max  flex lg:w-80 gap-2 max-w-min ">
              <label className="text-sm" htmlFor="placingPosition">
                placing Type :{' '}
              </label>
              <select
                className="md:mt-1 block lg:w-80 w-40  border  
                 text-white border-black-300 bg-mainmeduimblue 
                 rounded-md shadow-sm focus:outline-none
                  focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                id="placingPosition"
                name="placingPosition"
                value={placingPosition}
                onChange={(e) => {
                  flushSync(() => setPlacingPosition(() => e.target.value));
                }}
              >
                <option value="V">Vertical</option>
                <option value="H">Horizontal</option>
              </select>
            </div>
            <div className="flex lg:flex-col">
              <FleetShip
                setFleet={setFleet}
                fleet={fleet}
                cells={1}
                img={boat}
                name={'boat'}
              />
              <FleetShip
                setFleet={setFleet}
                fleet={fleet}
                cells={2}
                img={ship}
                name={'ship'}
              />
              <FleetShip
                setFleet={setFleet}
                fleet={fleet}
                cells={3}
                img={submarine}
                name={'submarine'}
              />
              <FleetShip
                setFleet={setFleet}
                fleet={fleet}
                cells={4}
                img={battlesShip}
                name={'battlesShip'}
              />
              <FleetShip
                setFleet={setFleet}
                fleet={fleet}
                cells={4}
                img={carrier}
                name={'carrier'}
              />
            </div>
          </div>
        </div>
      </div>
      {placingStatus === 'end' ? (
        <div className=" absolute">
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              navigate('/battle');
            }}
            className=" 
            relative 
            top-20 left-52
            lg:left-6 lg:top-96 lg:px-14 lg:text-3xl
            hover:text-mainblue 
            rounded-full  btn bg-rose-500 text-black hover:bg-rose-300 
            "
          >
            Start Battle
          </button>
        </div>
      ) : null}
    </>
  );
};

export default Fleet;
