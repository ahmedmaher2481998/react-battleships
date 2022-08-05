import { configStore } from "./store";

import {
	getHeadMessage,
	getSelectedShip,
	getPlacingStatus,
	getIsOccupied,
	getTimeline,
	getIsHit,
	getPlacingPostion,
	getPlacingType,
} from "./selectors";
import { initCells, cellHit, occupyCell } from "./cells/cellReducer";
import {
	ChangeHeadMessage,
	changePlacingPostion,
	changePlacingType,
	TIMELINE,
	setPlayerName,
	placeShip,
	endPlacing,
	changeGameState,
} from "./main/mainReducer";

//exports
export {
	getHeadMessage,
	getPlacingStatus,
	getIsOccupied as getIsOccupuied,
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
