import { configStore } from "./store";
import { ChangeHeadMessage } from "./mainReducer";
import {
	getHeadMessage,
	getSelectedShip,
	getPlacingStatus,
	getIsOccupuied,
	getTimeline,
	getIsHit,
} from "./selectores";
import { initCells, cellHit, occupyCell } from "./cellReducer";
import {
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
};
