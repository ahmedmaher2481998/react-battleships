//actions type
const INIT_CELLS = 'start/Create/Cell';
const OCCUPY_CELL = 'placing/occupyCell';
const HIT_CELL = 'battle/hitPlayerCell';
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

const hitPlayerCell = (cellId) => {
  return { type: HIT_CELL, payload: { cellId } };
};
export {
  hitPlayerCell,
  occupyCell,
  initCells,
  HIT_CELL,
  OCCUPY_CELL,
  INIT_CELLS,
};
