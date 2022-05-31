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
	switch (action.type) {
		case CHANGE_HEAD_MESSAGE:
			return { ...state, headMessage: action.payload };
		default:
			return state;
	}
};
