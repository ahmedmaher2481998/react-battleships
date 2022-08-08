import { generateCellId } from '../helpers';

//selectors
export const getName = (state) => {
  let name = state.main.player.name;
  return name;
};

export const getHeadMessage = (state) => {
  const msg = state.main.headMessage || ' ';
  return msg;
};

export const getSelectedShip = (s) => s.main.placing.selectedShip;

export const getPlacingStatus = (s) => s.main.placing.placingStatus;

export const getPlacingPosition = (s) => s.main.placing.placingPosition;

export const getIsOccupied = ({ cellId, s }) =>
  s.cells[cellId]?.occupy.isOccupied;

export const getOccupier = ({ cellId, s }) => s.cells[cellId]?.occupy.occupier;

export const getIsOccupiedByBot = ({ cellId, s }) => {
  if (s.bot.botCells) return s.bot?.botCells[cellId]?.occupy.isOccupied;
};
export const getOccupierByBot = ({ cellId, s }) => {
  if (s.bot.botCells) return s.bot?.botCells[cellId]?.occupy.occupier;
};
export const getIsHitBot = (s, cellId) => {
  if (s.bot.botCells) return s.bot?.botCells[cellId]?.hit;
};
export const getIsHit = (s, cellId) => s.cells[cellId]?.hit;
export const getPlayerTurn = (s) => s.main.battle.isPlayerTurn;
export const getBotTurn = (s) => s.main.battle.isBotTurn;
export const getStartBattle = (s) => s.main.battle.start;
// need to be modified
export const getTimeline = ({ main }) => {
  return main.timeLine;
};

export const getCellById = (s, cellId) => s.main.cells[cellId];
