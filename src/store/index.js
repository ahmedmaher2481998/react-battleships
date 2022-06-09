import { configStore } from "./store";
import { ChangeHeadMessage } from "./mainReducer";
import { getHeadMessage, getSelectedShip } from "./selectores";
import { initCells, cellHit, occupyCell } from "./cellReducer";
import { TIMELINE, setPlayerName, placeShip } from "./mainReducer";
export {
	getHeadMessage,
	initCells,
	cellHit,
	occupyCell,
	configStore as storeConfig,
	ChangeHeadMessage,
	TIMELINE,
	setPlayerName,
	placeShip,
	getSelectedShip,
};
