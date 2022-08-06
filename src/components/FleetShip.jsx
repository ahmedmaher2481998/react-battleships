import { ChangeHeadMessage, placeShip, changePlacingStatus } from "../store";
import { useSelector, useDispatch } from "react-redux";
import { getSelectedShip, getPlacingStatus } from "../store";

const FleetShip = ({ img, name, cells, setFleet, fleet }) => {
	const selectedShip = useSelector((s) => getSelectedShip(s));
	const placingStatus = useSelector((s) => getPlacingStatus(s));
	const dispatch = useDispatch();
	const playerName = useSelector((s) => s.main.player.name);
	const selected = (nameOfShip) => {
		dispatch(placeShip(nameOfShip));
		setFleet([...fleet, name]);
	};

	return (
		<>
			<span
				onClick={() => {
					console.log(selectedShip);
					if (
						placingStatus.split(" ")[0] !== "placing" ||
						placingStatus === "start"
					) {
						selected(name);
						dispatch(
							ChangeHeadMessage(
								`${
									playerName.split(" ")[0]
								}, please place ${name} on ${cells} cell${
									cells > 1 ? "s" : ""
								}.`
							)
						);
						dispatch(changePlacingStatus(`placing ${name}`));
					} else {
						dispatch(ChangeHeadMessage(`Please ,place ${selectedShip} first`));
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
