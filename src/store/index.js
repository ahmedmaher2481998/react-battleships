import { configStore } from "./store";

import {
	getHeadMessage,
	getSelectedShip,
	getPlacingStatus,
	// getIsOccupied,
	// getTimeline,
	// getIsHit,
	getPlacingPosition,
	// getPlacingType,
} from "./selectors";
import {
	ChangeHeadMessage,
	selectShip,
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
	initCells,
	cellHit,
	occupyCell,
	configStore as storeConfig,
	ChangeHeadMessage,
	setPlayerName,
	selectShip,
	getSelectedShip,
	getPlacingPosition,
	changePlacingPosition,
	changePlacingStatus,
};
