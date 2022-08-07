import { useDispatch, useSelector } from 'react-redux';
import { generateCellId, validateShipLocation, getShipSize } from '../helpers/';
import { battlesShip, ship, submarine, boat, carrier } from '../assets';
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

const Cell = ({ col, row, pcObj }) => {
  // console.log(cellState);
  const dispatch = useDispatch();
  const { pc, cellState } = pcObj || {};
  const placingPosition = useSelector(getPlacingPosition);

  const placingStatus = useSelector(getPlacingStatus);

  const selectedShip = useSelector(getSelectedShip);

  const isOccupied = useSelector((s) =>
    getIsOccupied({ cellId: generateCellId(row, col), s })
  );

  const occupier = useSelector((s) =>
    getOccupier({ cellId: generateCellId(row, col), s })
  );

  //pc Variables
  const isOccupiedPc = cellState?.occupy.isOccupied;
  const occupierPc = cellState?.occupy.occupier;
  const isHitPc = cellState?.hit;
  const cells = useSelector((s) => s.cells);

  const handleCellClick = () => {
    if (placingStatus.split(' ')[0] === 'placing') {
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
    } else if (placingStatus === 'end' && !pc) {
      // hitCell
    }
  };
  if (isOccupiedPc) console.log('row', row, 'col', col);
  return (
    <>
      <div
        className={` w-[9%] h-8 md:h-[100%]  m-[2px] rounded-full flex items-center justify-center hover:bg-slate-300 ${
          isOccupied && !pc
            ? 'bg-gray-400'
            : isOccupiedPc && pc
            ? 'bg-blue-600'
            : 'bg-gray-800'
        } `}
        onClick={handleCellClick}
      >
        {/* showing img for player  */}
        {isOccupied && !pc ? (
          <img
            src={getOccupierImageSrc(occupier)}
            className="w-full "
            alt={occupier}
          />
        ) : (
          <></>
        )}
        {/* showing img for pc  */}
        {pc && isOccupiedPc ? (
          <>
            <img
              src={getOccupierImageSrc(occupierPc)}
              className="w-full "
              alt={occupierPc}
            />
            <div>"HH"</div>
          </>
        ) : (
          <>
            {' '}
            <div>"HH"</div>
          </>
        )}
      </div>
    </>
  );
};

export default Cell;
