import { useDispatch, useSelector } from 'react-redux';
import {
  generateCellId,
  validateShipLocation,
  getShipSize,
  getRandom,
} from '../helpers/';
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
  changePlayerTurn,
  changeBotTurn,
  getBotTurn,
  getPlayerTurn,
  getStartBattle,
  hitBotCell,
  getIsHitBot,
  getIsHit,
  hitPlayerCell,
  notify,
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
  const cellId = generateCellId(row, col);
  const placingPosition = useSelector(getPlacingPosition);

  const placingStatus = useSelector(getPlacingStatus);

  const selectedShip = useSelector(getSelectedShip);

  const isOccupied = useSelector((s) =>
    pc ? getIsOccupiedByBot({ cellId, s }) : getIsOccupied({ cellId, s })
  );
  const occupier = useSelector((s) =>
    pc ? getOccupierByBot({ cellId, s }) : getOccupier({ cellId, s })
  );
  const isHit = useSelector((s) =>
    pc ? getIsHitBot(s, cellId) : getIsHit(s, cellId)
  );
  const cells = useSelector((s) => s.cells);
  const state = useSelector((s) => s);

  const playerTurn = useSelector(getPlayerTurn);

  const battleStarted = useSelector(getStartBattle);
  //bot Variables
  const botTurn = useSelector(getBotTurn);

  //When a cell is clicked this will run ...
  const handleCellClick = () => {
    console.log(`%c ${cellId} is clicked`, 'color:blue;font-size:50px;');
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
    console.log(battleStarted);
    if (battleStarted) {
      console.log('its battle....', playerTurn);
      if (playerTurn && pc) {
        console.log('player Hit ' + cellId);
        if (!isHit) {
          dispatch(changePlayerTurn(false));
          dispatch(changeBotTurn(true));

          dispatch(hitBotCell(cellId));
          //the player hit a a target

          if (isOccupied) {
            dispatch(
              notify({
                body: `The player shot cell ${cellId} and ${occupier} was destroyed, it's a HIt`,
                cellId,
                isHit: true,
              })
            );
          } else {
            dispatch(
              notify({
                body: `The player shot cell ${cellId} and it's a Miss...`,
                cellId,
                isHit: false,
              })
            );
          }
          //the bot turn played
          botHit(state);
        } else {
          dispatch(
            ChangeHeadMessage(
              'this cell is already hit ,try a different cell....'
            )
          );
        }
      }
      console.log('player', playerTurn, 'bot', botTurn);
    }
  };

  const botHit = (state) => {
    //generates random id
    const getRandomCellId = () => generateCellId(getRandom(), getRandom());
    //holds that id
    let cellId = getRandomCellId();
    //change roles
    dispatch(changeBotTurn(false));
    dispatch(changePlayerTurn(true));
    //while the random cellId is been hit before get a new one
    while (getIsHit(state, cellId)) {
      cellId = getRandomCellId();
    }
    //hit the new cellId
    dispatch(hitPlayerCell(cellId));

    if (getIsOccupiedByBot({ s: state, cellId })) {
      dispatch(
        notify({
          body: `The Bot shot cell ${cellId} and ${getOccupierByBot({
            s: state,
            cellId,
          })} was destroyed, it's a HIt`,
          cellId,
          isHit: true,
        })
      );
    } else {
      dispatch(
        notify({
          body: `The Bot shot cell ${cellId} and it's a Miss...`,
          cellId,
          isHit: false,
        })
      );
    }
  };

  const getBgColor = ({ pc, isHit, isOccupied }) => {
    if (!pc && isOccupied && !isHit) return 'bg-gray-400';
    else if (pc && isOccupied && !isHit) return 'bg-sky-400';
    else if (isHit && isOccupied) return 'bg-pink-800';
    else if (isHit && !isOccupied) return 'bg-white';
    else return 'bg-gray-800';
  };

  return (
    <>
      <div
        className={` w-[9%] h-8 md:h-[100%]  m-[2px] rounded-full flex items-center justify-center hover:bg-slate-300 ${getBgColor(
          { pc, isHit, isOccupied }
        )} `}
        onClick={handleCellClick}
      >
        {/* showing img for both  */}
        {/*&& !pc*/}
        {isOccupied ? (
          <>
            <img
              src={getOccupierImageSrc(occupier)}
              className="w-full "
              alt={occupier}
            />
          </>
        ) : null}
      </div>
    </>
  );
};

export default Cell;
