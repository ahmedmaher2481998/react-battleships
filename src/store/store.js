import { createStore, combineReducers, compose, applyMiddleware } from "redux";

let val;
const RootReducer = combineReducers({
	red: val,
});
let enhancer;
if (process.env.NODE_ENV === "production") {
	const logger = require("redux-logger");
	const composeEnahncer =
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
	enhancer = composeEnahncer(applyMiddleware(logger));
}

const configStore = (preloaderState) => {
	return createStore(RootReducer, preloaderState, enhancer);
};
export default configStore;
