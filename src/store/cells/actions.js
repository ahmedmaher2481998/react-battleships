//actions type
const INIT_CELLS = 'start/Create/Cell';
const OCCUPY_CELL = 'placing/occupyCell';
const HIT_CELL = 'combat/change/CellHit';
//hit cell , occupy cell ,
//action creators
const initCells = (cells) => {
  return {
    type: INIT_CELLS,
    payload: { ...cells },
  };
};
const occupyCell = (payload) => {
  return {
    type: OCCUPY_CELL,
    payload,
  };
};

//needs modifications
const cellHit = (row, col) => {
  return { type: HIT_CELL, payload: { row, col } };
};
export { cellHit, occupyCell, initCells, HIT_CELL, OCCUPY_CELL, INIT_CELLS };
