import { configStore } from "./store";
import { ChangeHeadMessage } from "./mainReducer";
import { getHeadMessage } from "./selectores";
import { initCells, cellHit } from "./cellReducer";
export {
	getHeadMessage,
	initCells,
	cellHit,
	configStore as storeConfig,
	ChangeHeadMessage,
};
