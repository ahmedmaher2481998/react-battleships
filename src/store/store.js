import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { mainReducer } from './main/mainReducer';
import { cellReducer } from './cells/cellReducer';
import { botReducer } from './cells/botCells/botReducer';
const RootReducer = combineReducers({
  main: mainReducer,
  cells: cellReducer,
  bot: botReducer,
});
let enhancer;
if (process.env.NODE_ENV !== 'production') {
  const logger = require('redux-logger').default;
  const composeEnhancer =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancer(applyMiddleware(logger));
}

export const configStore = () => {
  return createStore(RootReducer, {}, enhancer);
};
