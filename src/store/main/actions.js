//actions types
const CHANGE_HEAD_MESSAGE = 'main/setHeadMessage';
const SET_PLAYER_NAME = 'welcome/setPlayerName';
const SELECT_FLEET_SHIP = 'placing/selectShip';
const CHANGE_PLACING_STATUS = 'placing/setStatus';
const CHANGE_PLACING_POSITION = 'placing/setPosition';
const CHANGE_PLAYER_TURN = 'battle/changePlayerTurn';
const CHANGE_BOT_TURN = 'battle/changeBotTurn';
//actions

const ChangeHeadMessage = (msg) => {
  return {
    type: CHANGE_HEAD_MESSAGE,
    payload: msg,
  };
};

const setPlayerName = (name) => {
  return { type: SET_PLAYER_NAME, payload: { name } };
};

const selectShip = (ship) => {
  return { type: SELECT_FLEET_SHIP, payload: { shipName: ship } };
};

const changePlacingStatus = (status) => {
  return {
    type: CHANGE_PLACING_STATUS,
    payload: { status },
  };
};

const changePlacingPosition = (position) => {
  return {
    type: CHANGE_PLACING_POSITION,
    payload: {
      position,
    },
  };
};
const changePlayerTurn = () => {
  return { type: CHANGE_PLAYER_TURN };
};
const changeBotTurn = () => {
  return { type: CHANGE_BOT_TURN };
};
export {
  setPlayerName,
  selectShip,
  changePlacingStatus,
  ChangeHeadMessage,
  changePlacingPosition,
  CHANGE_HEAD_MESSAGE,
  CHANGE_PLACING_POSITION,
  CHANGE_PLACING_STATUS,
  SELECT_FLEET_SHIP,
  SET_PLAYER_NAME,
  CHANGE_BOT_TURN,
  CHANGE_PLAYER_TURN,
  changeBotTurn,
  changePlayerTurn,
};
