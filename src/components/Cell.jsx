import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {} from "../store";
import { generateCellId, validateShipLocation } from "../helpers/helpers";
import {
	battlesShip,
	ship,
	submarine,
	boat,
	carrier,
	explosion,
} from "../assets";
import {
	getPlacingStatus,
	getSelectedShip,
	getPlacingPosition,
} from "../store/";
//end imports
const getOccupierImageSrc = (ship) => {
	switch (ship) {
		case "boat":
			return boat;
		case "ship":
			return ship;
		case "submarine":
			return submarine;
		case "battlesShip":
			return battlesShip;
		case "carrier":
			return carrier;
		default:
			return null;
	}
};

const Cell = ({ col, row }) => {
	const dispatch = useDispatch();
	let cellId = `${generateCellId(row, col)}`;
	// const [cellContent, setCellContent] = useState(generateCellId(row, col));
	// const isHit = useSelector((s) => getIsHit(s, cellId));
	// const occupyObj = useSelector((s) => getIsOccupied(s, cellId));
	// const selectedShipPlacing = useSelector(getSelectedShip);
	// const timeline = useSelector(getTimeline);
	// const type = useSelector((s) => getPlacingType(s));
	const position = useSelector(getPlacingPosition);
	const placingStatus = useSelector(getPlacingStatus);
	const selectedShip = useSelector(getSelectedShip);
	const handleCellClick = () => {
		if (placingStatus.split(" ")[0] === "placing") {
			console.log(
				`placing ship ${selectedShip} at ${generateCellId(
					row,
					col
				)} while in ${position}`
			);
		}
		// if (timeline.placing) {
		// 	let isValidLocation =
		// 		selectedShipPlacing === ""
		// 			? null
		// 			: validateShipLocation(row, col, selectedShipPlacing, type, position);
		// 	if (isValidLocation) dispatch(occupyCell(row, col, selectedShipPlacing));
		// }
	};

	// 	data-id={`${generateCellId(row, col)}`}
	return (
		<>
			<div
				className={` w-[9%] h-8 md:h-[100%] bg-indigo-400 m-[2px] rounded-full flex items-center justify-center hover:bg-verydarkblue `}
				onClick={handleCellClick}
			>
				{/* {occupyObj.isOccupied ? (
					<img
						src={getOccupierImageSrc(occupyObj.occupier)}
						alt={occupyObj.occupier}
					/> 
				) : null}*/}
			</div>
		</>
	);
};

export default Cell;
