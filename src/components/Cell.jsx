import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	cellHit,
	getPlacingPostion,
	getPlacingType,
	occupyCell,
} from "../store";
import { generateCellId, validateShipLocation } from "../helpers/helpers";
import {
	battlesShip,
	ship,
	submarine,
	boat,
	carrier,
	explosion,
} from "../assests";
import {
	getIsHit,
	getIsOccupuied,
	getTimeline,
	getSelectedShip,
} from "../store/";
//end imports
const getOcuupierImageSrc = (ship) => {
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
	const [cellContent, setCellContent] = useState(generateCellId(row, col));
	const isHit = useSelector((s) => getIsHit(s, cellId));
	const occupyObj = useSelector((s) => getIsOccupuied(s, cellId));
	const selectedShipPlacing = useSelector(getSelectedShip);
	const timeline = useSelector(getTimeline);
	const type = useSelector((s) => getPlacingType(s));
	const postion = useSelector((s) => getPlacingPostion(s));

	const handleCellClick = () => {
		if (timeline.placing) {
			let isVaildLocation =
				selectedShipPlacing === ""
					? null
					: validateShipLocation(
							row,
							col,
							selectedShipPlacing,
							type,
							postion
					  );
			if (isVaildLocation)
				dispatch(occupyCell(row, col, selectedShipPlacing));
		}
	};
	// 	data-id={`${generateCellId(row, col)}`}
	return (
		<>
			<div
				className={` w-[9%] h-8 md:h-[100%] bg-indigo-400 m-[2px] rounded-full flex items-center justify-center hover:bg-yeelow `}
				onClick={handleCellClick}
			>
				{occupyObj.isOccupied ? (
					<img
						src={getOcuupierImageSrc(occupyObj.occupier)}
						alt={occupyObj.occupier}
					/>
				) : null}
			</div>
		</>
	);
};

export default Cell;
