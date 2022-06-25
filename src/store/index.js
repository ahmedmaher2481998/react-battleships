import { configStore } from "./store";

import {
	getHeadMessage,
	getSelectedShip,
	getPlacingStatus,
	getIsOccupuied,
	getTimeline,
	getIsHit,
	getPlacingPostion,
	getPlacingType,
} from "./selectores";
import { initCells, cellHit, occupyCell } from "./cellReducer";
import {
	ChangeHeadMessage,
	changePlacingPostion,
	changePlacingType,
	TIMELINE,
	setPlayerName,
	placeShip,
	endPlacing,
	changeGameState,
} from "./mainReducer";
export {
	getHeadMessage,
	getPlacingStatus,
	getIsOccupuied,
	getTimeline,
	getIsHit,
	initCells,
	cellHit,
	occupyCell,
	configStore as storeConfig,
	ChangeHeadMessage,
	TIMELINE,
	setPlayerName,
	placeShip,
	getSelectedShip,
	endPlacing,
	changeGameState,
	changePlacingPostion,
	changePlacingType,
	getPlacingPostion,
	getPlacingType,
};
