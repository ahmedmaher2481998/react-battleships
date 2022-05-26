import { configStore } from "./store";
import { ChangeHeadMessage } from "./reducers";
import { getHeadMessage } from "./selectores";
import { initCell } from "./cellReducer";
export {
	getHeadMessage,
	initCell,
	configStore as storeConfig,
	ChangeHeadMessage,
};
