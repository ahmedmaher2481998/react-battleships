import { configStore } from "./store";

import {
	getHeadMessage,
	getSelectedShip,
	getPlacingStatus,
	getIsOccupied,
	getTimeline,
	getIsHit,
	getPlacingPosition,
	getPlacingType,
} from "./selectors";
import {
	ChangeHeadMessage,
	placeShip,
	setPlayerName,
	changePlacingPosition,
	changePlacingStatus,
} from "./main/actions";
import {
	CELL_HIT,
	CELL_OCCUPY,
	INIT_CELLS,
	initCells,
	cellHit,
	occupyCell,
} from "./cells/actions";
//exports
export {
	getHeadMessage,
	CELL_HIT,
	CELL_OCCUPY,
	INIT_CELLS,
	getPlacingStatus,
	getIsOccupied,
	getTimeline,
	getIsHit,
	initCells,
	cellHit,
	occupyCell,
	configStore as storeConfig,
	ChangeHeadMessage,
	setPlayerName,
	placeShip,
	getSelectedShip,
	getPlacingPosition,
	getPlacingType,
	changePlacingPosition,
	changePlacingStatus,
};
