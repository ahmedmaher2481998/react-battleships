import { configStore } from "./store";
import { ChangeHeadMessage } from "./mainReducer";
import { getHeadMessage } from "./selectores";
import { initCells, cellHit, occupyCell } from "./cellReducer";
import { TIMELINE, setPlayerName } from "./mainReducer";
export {
	getHeadMessage,
	initCells,
	cellHit,
	occupyCell,
	configStore as storeConfig,
	ChangeHeadMessage,
	TIMELINE,
	setPlayerName,
};
