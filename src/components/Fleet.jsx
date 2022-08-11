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

const Fleet = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const placingStatus = useSelector((s) => getPlacingStatus(s));
  const [placingPosition, setPlacingPosition] = useState('v');
  const [fleet, setFleet] = useState([]);

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

  return (
    <>
      <div className={placingStatus === 'end' ? 'hidden' : ''}>
        <div className=" absolute   ">
          <div className="relative   left-5 lg:-top-28" id="fleet">
            <div className="-mt-8 mb-2 sm:max-w-[8rem]  max-w-[4rem] ">
              <select
                id="placingPosition"
                name="placingPosition"
                value={placingPosition}
                onChange={(e) => {
                  setPlacingPosition(() => e.target.value);
                  dispatch(changePlacingPosition(placingPosition));
                  toast.success(`Ship position now Is  ${placingPosition}`);
                }}
                className="mt-1 block w-full py-2 px-3 border   text-white border-black-300 bg-mainmeduimblue rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm"
              >
                <option value="v">Vertical</option>
                <option value="h">Horizontal</option>
              </select>
            </div>
            <div className="flex lg:flex-col text-center">
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
            className=" relative -top-5  md:top-40 md:left-0 left-40 btn w-[100%] mx-auto my-auto"
          >
            Start Battle
          </button>
        </div>
      ) : null}
    </>
  );
};

export default Fleet;
