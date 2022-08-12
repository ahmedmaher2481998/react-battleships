const INIT_BOT_CELLS = 'battle/initBotCells';
const BOT_CELL_OCCUPY = 'battle/occupyBotCell';
const BOT_CELL_HIT = 'battle/hitBotCell';
//action generators
const initBotCells = (cells) => {
  return {
    type: INIT_BOT_CELLS,
    payload: { ...cells },
  };
};
const occupyBotCell = (payload) => {
  return {
    type: BOT_CELL_OCCUPY,
    payload,
  };
};

const hitBotCell = (cellId) => {
  return { type: BOT_CELL_HIT, payload: { cellId } };
};
export {
  BOT_CELL_HIT,
  BOT_CELL_OCCUPY,
  INIT_BOT_CELLS,
  hitBotCell,
  initBotCells,
  occupyBotCell,
};
