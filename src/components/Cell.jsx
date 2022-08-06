// import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { ChangeHeadMessage } from '../store';
import { generateCellId, validateShipLocation, getShipSize } from '../helpers/';
import {
  battlesShip,
  ship,
  submarine,
  boat,
  carrier,
  // explosion,
} from '../assets';
import {
  getPlacingStatus,
  getSelectedShip,
  getPlacingPosition,
  occupyCell,
  changePlacingStatus,
  getIsOccupied,
  getOccupier,
  ChangeHeadMessage,
} from '../store/';
//end imports
const getOccupierImageSrc = (shipName) => {
  switch (shipName) {
    case 'boat':
      return boat;
    case 'ship':
      return ship;
    case 'submarine':
      return submarine;
    case 'battlesShip':
      return battlesShip;
    case 'carrier':
      return carrier;
    default:
      return null;
  }
};

const Cell = ({ col, row, pc }) => {
  const dispatch = useDispatch();
  // let cellId = `${generateCellId(row, col)}`;
  // const [cellContent, setCellContent] = useState(generateCellId(row, col));
  // const isHit = useSelector((s) => getIsHit(s, cellId));
  // const occupyObj = useSelector((s) => getIsOccupied(s, cellId));
  // const selectedShipPlacing = useSelector(getSelectedShip);
  // const timeline = useSelector(getTimeline);
  // const type = useSelector((s) => getPlacingType(s));
  const placingPosition = useSelector(getPlacingPosition);
  const placingStatus = useSelector(getPlacingStatus);
  const selectedShip = useSelector(getSelectedShip);
  const isOccupied = useSelector((s) =>
    getIsOccupied({ cellId: generateCellId(row, col), s })
  );
  const cells = useSelector((s) => s.cells);
  const occupier = useSelector((s) =>
    getOccupier({ cellId: generateCellId(row, col), s })
  );
  const handleCellClick = () => {
    console.log(placingStatus);
    if (placingStatus.split(' ')[0] === 'placing') {
      // console.log(
      //   `placing ship ${selectedShip} at ${generateCellId(
      //     row,
      //     col
      //   )} while in ${placingPosition}`,
      //   {
      //     row,
      //     col,
      //     placingPosition,
      //     shipSize: getShipSize(selectedShip),
      //   }
      // );
      if (
        validateShipLocation({
          row,
          col,
          placingPosition,
          shipSize: getShipSize(selectedShip),
          isOccupied,
          cells,
        })
      ) {
        dispatch(
          occupyCell({
            row,
            col,
            placingPosition,
            shipSize: getShipSize(selectedShip),
            ship: selectedShip,
          })
        );
        dispatch(changePlacingStatus('done'));
      } else {
        dispatch(
          ChangeHeadMessage(
            'this is not a valid location to place the ' + selectedShip
          )
        );
      }
    } else if (placingStatus === 'done') {
      dispatch(ChangeHeadMessage('Please Select a ship...'));
    }
  };

  // 	data-id={`${generateCellId(row, col)}`}
  return (
    <>
      <div
        className={` w-[9%] h-8 md:h-[100%]  m-[2px] rounded-full flex items-center justify-center hover:bg-slate-300 ${
          isOccupied ? 'bg-gray-400' : 'bg-gray-800'
        } `}
        onClick={handleCellClick}
      >
        {isOccupied ? (
          <img
            src={getOccupierImageSrc(occupier)}
            className="w-full "
            alt={occupier}
          />
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Cell;
