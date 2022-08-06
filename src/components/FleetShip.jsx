import { ChangeHeadMessage, selectShip, changePlacingStatus } from "../store";
import { useSelector, useDispatch } from "react-redux";
import { getSelectedShip, getPlacingStatus } from "../store";
// import { useState } from "react";
import { getName } from "../store/selectors";
const FleetShip = ({ img, name, cells, setFleet, fleet }) => {
	const selectedShip = useSelector(getSelectedShip);
	const placingStatus = useSelector(getPlacingStatus);
	// const [selectedShip, setSelectedShip] = useState(selectedShip);
	const dispatch = useDispatch();
	const playerName = useSelector(getName);
	// const selected = (nameOfShip) => {
	// 	dispatch(placeShip(nameOfShip));
	// 	setFleet([...fleet, name]);
	// };

	return (
		<>
			<span
				onClick={() => {
					// console.log(selectedShip);
					if (
						placingStatus.split(" ")[0] !== "placing" ||
						placingStatus === "start"
					) {
						dispatch(selectShip(name));
						dispatch(changePlacingStatus(`placing ${name}`));
						setFleet([...fleet, name]);
						dispatch(
							ChangeHeadMessage(
								`${
									playerName.split(" ")[0]
								}, please place ${name} on ${cells} cell${
									cells > 1 ? "s" : ""
								}.`
							)
						);
						console.log("placing status changed !!");
					} else {
						dispatch(
							ChangeHeadMessage(
								<>
									<p className='text-white bg-rose-900 rounded-lg p-1  font-bold'>
										Please, place the Selected Ship first....
									</p>
								</>
							)
						);
					}
				}}
				className={fleet.includes(name) ? "hidden" : ""}
			>
				<img src={img} alt={name} className='item' />
				<p>{`${name} (${cells})`}</p>
			</span>
		</>
	);
};

export default FleetShip;
