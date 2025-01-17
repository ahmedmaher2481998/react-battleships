import {
  CHANGE_HEAD_MESSAGE,
  CHANGE_PLACING_POSITION,
  CHANGE_PLACING_STATUS,
  SELECT_FLEET_SHIP,
  SET_PLAYER_NAME,
  CHANGE_BOT_TURN,
  CHANGE_PLAYER_TURN,
  START_BATTLE,
  NOTIFY,
} from './actions';

//initial state
const initState = {
  headMessage: 'Welcome To BattleShip',
  // startTime: null,
  player: {
    name: localStorage.getItem('playerName') || '',
    // just for development
  },
  placing: {
    selectedShip: '',
    placingStatus: 'start', //start select placed end
    placingPosition: 'H',
  },
  battle: {
    start: false,
    isPlayerTurn: false,
    isBotTurn: false,

    end: false,
  },
  notification: [],
  startTime: Date.now(),
};

//reducers
export const mainReducer = (state = initState, action) => {
  //coping the unmuted state
  const newState = { ...state };
  //destructuring the action object
  const { type, payload } = action;
  // reducers
  switch (type) {
    case CHANGE_HEAD_MESSAGE:
      newState.headMessage = payload;
      return newState;

    case SELECT_FLEET_SHIP:
      newState.placing.selectedShip = payload.shipName;
      return newState;

    case SET_PLAYER_NAME:
      newState.player.name = payload.name;
      return newState;

    case CHANGE_PLACING_STATUS:
      newState.placing.placingStatus = payload.status;
      return newState;

    case CHANGE_PLACING_POSITION:
      newState.placing.placingPosition = payload.position;
      return newState;

    case CHANGE_BOT_TURN:
      newState.battle.isBotTurn = payload;
      return newState;

    case CHANGE_PLAYER_TURN:
      newState.battle.isPlayerTurn = payload;
      return newState;

    case START_BATTLE:
      newState.battle.start = true;
      return newState;

    case NOTIFY:
      newState.notification.push(payload);
      return newState;

    case 'CLEAR_MAIN':
      return {
        headMessage: 'Welcome To BattleShip',
        // startTime: null,
        player: {
          name: '',
        },
        placing: {
          selectedShip: '',
          placingStatus: 'start', //start select placed end
          placingPosition: 'H',
        },
        battle: {
          start: false,
          isPlayerTurn: false,
          isBotTurn: false,

          end: false,
        },
        notification: [],
        startTime: Date.now(),
      };
    default:
      return newState;
  }
};
