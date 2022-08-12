import {
  ChangeHeadMessage,
  selectShip,
  getSelectedShip,
  getPlacingStatus,
  changePlacingStatus,
} from '../store';
import { useSelector, useDispatch } from 'react-redux';
import { getName } from '../store/selectors';
const FleetShip = ({ img, name, cells, setFleet, fleet }) => {
  const selectedShip = useSelector(getSelectedShip);
  const placingStatus = useSelector(getPlacingStatus);
  const dispatch = useDispatch();
  const playerName = useSelector(getName);

  return (
    <>
      <span
        onClick={() => {
          if (
            placingStatus.split(' ')[0] !== 'placing' ||
            placingStatus === 'start'
          ) {
            dispatch(selectShip(name));
            dispatch(changePlacingStatus(`placing ${name}`));
            setFleet([...fleet, name]);
            dispatch(
              ChangeHeadMessage(
                `${
                  playerName.split(' ')[0]
                }, please place ${name} on ${cells} cell${
                  cells > 1 ? 's' : ''
                }.`
              )
            );
          } else {
            dispatch(
              ChangeHeadMessage(
                <>
                  <p className="text-white bg-rose-900 rounded-lg p-1  font-bold">
                    Please, place {selectedShip} first....
                  </p>
                </>
              )
            );
          }
        }}
        className={fleet.includes(name) ? 'hidden' : ''}
      >
        <img src={img} alt={name} className="item" />
        <span>{`${name} (${cells})`}</span>
      </span>
    </>
  );
};

export default FleetShip;
