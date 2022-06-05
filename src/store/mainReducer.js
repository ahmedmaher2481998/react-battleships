import { type } from "@testing-library/user-event/dist/type";

//actions types
const CHANGE_HEAD_MESSAGE = "grid-wrapper/change/head-message";

const GAME_START = "game/start";
const GAME_PLACING = "game/placing";
const GAME_BATTLE = "game/battle";
const GAME_END = "game/end";
export const TIMELINE = {
	GAME_START,
	GAME_PLACING,
	GAME_BATTLE,
	GAME_END,
};
//actions
export const ChangeHeadMessage = (msg) => {
	return {
		type: CHANGE_HEAD_MESSAGE,
		payload: msg,
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
		case "place":
			return { type: GAME_PLACING };
		default:
			return { type: "ERROR" };
	}
};
//reducers
const initState = {
	headMessage: "Welcome To BattleShip",
	//there will be 3 time line events (start , placing , battle , end )
	timeLine: {
		start: false,
		end: false,
		battle: false,
		placing: false,
	},
};
export const mainReducer = (state = initState, action) => {
	const newState = { ...state };
	switch (action.type) {
		case CHANGE_HEAD_MESSAGE:
			newState.headMessage = action.payload;
			return newState;
		case GAME_BATTLE:
			newState.timeLine.battle = true;
			newState.timeLine.end = false;
			newState.timeLine.start = false;
			newState.timeLine.placing = false;
			return newState;
		case GAME_END:
			newState.timeLine.battle = false;
			newState.timeLine.end = true;
			newState.timeLine.start = false;
			newState.timeLine.placing = false;
			return newState;
		case GAME_PLACING:
			newState.timeLine.battle = false;
			newState.timeLine.end = false;
			newState.timeLine.start = false;
			newState.timeLine.placing = true;
			return newState;
		case GAME_START:
			newState.timeLine.battle = false;
			newState.timeLine.end = false;
			newState.timeLine.start = true;
			newState.timeLine.placing = false;
			return newState;

		default:
			return state;
	}
};
