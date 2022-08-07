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
// need to be modified
export const getTimeline = ({ main }) => {
  return main.timeLine;
};

export const getCellById = (s, cellId) => s.main.cells[cellId];

export const getIsHit = ({ cells }, cellId) => {
  let hit = cells[cellId]?.hit || false;
  return hit;
};
