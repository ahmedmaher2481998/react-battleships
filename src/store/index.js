import { configStore } from './store';
import {
  getHeadMessage,
  getSelectedShip,
  getPlacingStatus,
  getPlacingPosition,
  getOccupier,
  getIsOccupied,
  getName,
  getIsHit,
} from './selectors';
import {
  ChangeHeadMessage,
  selectShip,
  setPlayerName,
  changePlacingPosition,
  changePlacingStatus,
} from './main/actions';
import {
  HIT_CELL,
  OCCUPY_CELL,
  INIT_CELLS,
  initCells,
  cellHit,
  occupyCell,
} from './cells/actions';
import {
  BOT_CELL_HIT,
  BOT_CELL_OCCUPY,
  INIT_BOT_CELLS,
  hitBotCell,
  initBotCells,
  occupyBotCell,
} from './cells/botCells/actions';
//exports
export {
  getHeadMessage,
  INIT_CELLS,
  HIT_CELL,
  getIsOccupied,
  getOccupier,
  OCCUPY_CELL,
  getPlacingStatus,
  initCells,
  cellHit,
  occupyCell,
  configStore,
  ChangeHeadMessage,
  setPlayerName,
  selectShip,
  getSelectedShip,
  getPlacingPosition,
  changePlacingPosition,
  changePlacingStatus,
  getIsHit,
  getName,
  BOT_CELL_HIT,
  BOT_CELL_OCCUPY,
  INIT_BOT_CELLS,
  hitBotCell,
  initBotCells,
  occupyBotCell,
};
