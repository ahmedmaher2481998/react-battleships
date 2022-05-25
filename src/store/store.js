import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { mainReducer } from "./reducers";

const RootReducer = combineReducers({
	main: mainReducer,
});
let enhancer;
if (process.env.NODE_ENV !== "production") {
	const logger = require("redux-logger");
	const composeEnahncer =
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
	enhancer = composeEnahncer(applyMiddleware(logger));
}

export const configStore = (preloaderState) => {
	return createStore(RootReducer, preloaderState, enhancer);
};
