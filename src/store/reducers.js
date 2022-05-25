//actions types
const CHANGE_HEAD_MESSAGE = "grid-wrapper/change/head-message";
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
};
export const mainReducer = (state = initState, action) => {
	switch (action.type) {
		case CHANGE_HEAD_MESSAGE:
			return { ...state, headMessage: action.payload };
		default:
			return state;
	}
};
