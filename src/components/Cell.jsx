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
  getIsOccupiedByBot,
  getOccupierByBot,
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
  pc = pc || false;

  const dispatch = useDispatch();

  const placingPosition = useSelector(getPlacingPosition);

  const placingStatus = useSelector(getPlacingStatus);

  const selectedShip = useSelector(getSelectedShip);

  const isOccupied = useSelector((s) =>
    pc
      ? getIsOccupiedByBot({ cellId: generateCellId(row, col), s })
      : getIsOccupied({ cellId: generateCellId(row, col), s })
  );
  const occupier = useSelector((s) =>
    pc
      ? getOccupierByBot({ cellId: generateCellId(row, col), s })
      : getOccupier({ cellId: generateCellId(row, col), s })
  );
  const cells = useSelector((s) => s.cells);

  //bot Variables
  const botCells = useSelector((s) => s.bot.botCells);

  const handleCellClick = () => {
    //handle placing ship
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
    }
    //clicked on after placing a ship
    else if (placingStatus === 'done') {
      dispatch(ChangeHeadMessage('Please Select a ship...'));
    }
    //clicked to hit a ship
    else if (placingStatus === 'end' && !pc) {
      // hitCell
    }
  };
  if (isOccupied && pc)
    console.log(
      "this is a bot cell and it's occupied at ",
      'row',
      row,
      'col',
      col
    );
  return (
    <>
      <div
        className={` w-[9%] h-8 md:h-[100%]  m-[2px] rounded-full flex items-center justify-center hover:bg-slate-300 ${
          isOccupied && !pc ? 'bg-gray-400' : 'bg-gray-800'
        } `}
        onClick={handleCellClick}
      >
        {/* showing img for both  */}
        {isOccupied && !pc ? (
          <>
            <img
              src={getOccupierImageSrc(occupier)}
              className="w-full "
              alt={occupier}
            />
          </>
        ) : null}
        {/* {pc ? (isOccupied ? `${occupier}` : null) : 'pc'} */}
      </div>
    </>
  );
};

export default Cell;
