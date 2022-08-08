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

export const getIsOccupied = ({ cellId, s }) => {
  if (s.cells.playerCells)
    return s.cells.playerCells[cellId]?.occupy.isOccupied;
};

export const getOccupier = ({ cellId, s }) => {
  if (s.cells.playerCells) return s.cells.playerCells[cellId]?.occupy.occupier;
};

export const getIsOccupiedByBot = ({ cellId, s }) => {
  if (s.bot.botCells) return s.bot?.botCells[cellId]?.occupy.isOccupied;
};
export const getOccupierByBot = ({ cellId, s }) => {
  if (s.bot.botCells) return s.bot?.botCells[cellId]?.occupy.occupier;
};
export const getIsHitBot = (s, cellId) => {
  if (s.bot.botCells) return s.bot?.botCells[cellId]?.hit;
};
export const getIsHit = (s, cellId) => {
  if (s.cells.playerCells) return s.cells.playerCells[cellId]?.hit;
};
export const getPlayerTurn = (s) => s.main.battle.isPlayerTurn;
export const getBotTurn = (s) => s.main.battle.isBotTurn;
export const getStartBattle = (s) => s.main.battle.start;

export const getPlayerResult = (s) => s.bot.playerResult;
export const getBotResult = (s) => s.cells.botResult;
