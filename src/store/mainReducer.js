import { type } from "@testing-library/user-event/dist/type";
//inital state
const initState = {
	headMessage: "Welcome To BattleShip",
	player: {
		name: "",
	},
	//there will be 3 time line events (start , placing , battle , end )
	timeLine: {
		start: false,
		end: false,
		battle: false,
		placing: false,
	},
	slected: "",
	placing: {
		placingStatus: false,
		type: "V",
		postion: "start",
	},
};

//actions types
const CHANGE_HEAD_MESSAGE = "grid-wrapper/change/head-message";

const GAME_START = "game/start";
const GAME_PLACING = "game/placing";
const GAME_BATTLE = "game/battle";
const GAME_END = "game/end";
const SET_PLAYER_NAME = "welcome/setplayerName";
const SELECT_FLEET_SHIP = "placing/selectShip";
const END_PLACING = "placing/endofplacing";
export const TIMELINE = {
	GAME_START,
	GAME_PLACING,
	GAME_BATTLE,
	GAME_END,
};
const CHANGER_PLACING_TYPE = "placing/placingtype";
const CHANGER_PLACING_POSTION = "placing/placingpostion";
//actions
export const ChangeHeadMessage = (msg) => {
	return {
		type: CHANGE_HEAD_MESSAGE,
		payload: msg,
	};
};
export const setPlayerName = (name) => {
	return { type: SET_PLAYER_NAME, payload: name };
};
export const placeShip = (ship) => {
	return { type: SELECT_FLEET_SHIP, payload: ship };
};
export const endPlacing = () => {
	return {
		type: END_PLACING,
	};
};
export const changeGameState = (state) => {
	switch (state) {
		case "start":
			return { type: GAME_START };
		case "end":
			return { type: GAME_END };
		case "battle":
			return { type: GAME_BATTLE };
		case "placing":
			return { type: GAME_PLACING };
		default:
			return { type: "ERROR" };
	}
};
export const changePlacingType = (type) => {
	return {
		type: CHANGER_PLACING_TYPE,
		payload: {
			type,
		},
	};
};
export const changePlacingPostion = (postion) => {
	return {
		type: CHANGER_PLACING_POSTION,
		payload: {
			postion,
		},
	};
};
//reducers
export const mainReducer = (state = initState, action) => {
	const newState = { ...state };
	const { type, payload } = action;
	switch (type) {
		case CHANGE_HEAD_MESSAGE:
			newState.headMessage = payload;
			return newState;
		case SELECT_FLEET_SHIP:
			newState.slected = payload;
			return newState;
		case SET_PLAYER_NAME:
			newState.player.name = payload;
			return newState;
		case END_PLACING:
			newState.placing.placingStatus = true;
			return newState;
		case GAME_START:
			newState.timeLine.start = true;
			return newState;
		case GAME_PLACING:
			newState.timeLine.start = false;
			newState.timeLine.placing = true;
			return newState;
		case GAME_BATTLE:
			newState.timeLine.placing = false;
			newState.timeLine.battle = true;
			return newState;
		case GAME_END:
			newState.timeLine.battle = false;
			newState.timeLine.end = true;
			return newState;
		case CHANGER_PLACING_POSTION:
			newState.placing.postion = payload.postion;
			return newState;
		case changePlacingType:
			newState.placing.type = payload.type;
			return newState;

		default:
			return state;
	}
};
