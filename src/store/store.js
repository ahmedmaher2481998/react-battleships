import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { mainReducer } from "./mainReducer";
import { cellReducer } from "./cellReducer";

const RootReducer = combineReducers({
	main: mainReducer,
	cells: cellReducer,
});
let enhancer;
if (process.env.NODE_ENV !== "production") {
	const logger = require("redux-logger").default;
	const composeEnahncer =
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
	enhancer = composeEnahncer(applyMiddleware(logger));
}

export const configStore = () => {
	return createStore(RootReducer, {}, enhancer);
};
