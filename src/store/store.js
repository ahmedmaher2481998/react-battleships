import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import logger from "redux-logger";
import { mainReducer } from "./reducers";

const RootReducer = combineReducers({
	main: mainReducer,
});
let enhancer;
if (process.env.NODE_ENV !== "production") {
	const composeEnahncer =
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
	enhancer = composeEnahncer(applyMiddleware(logger));
}

export const configStore = () => {
	const store = createStore(RootReducer, undefined, enhancer);
	return store;
};
