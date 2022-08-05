import {
	CHANGE_HEAD_MESSAGE,
	CHANGE_PLACING_POSITION,
	CHANGE_PLACING_STATUS,
	SELECT_FLEET_SHIP,
	SET_PLAYER_NAME,
} from "./actions";
//initial state
const initState = {
	headMessage: "Welcome To BattleShip",
	player: {
		name: "",
	},
	placing: {
		selectedShip: "",
		placingStatus: undefined,
		placingPosition: "V",
	},
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
			newState.selected = payload;
			return newState;
		case SET_PLAYER_NAME:
			newState.player.name = payload;
			return newState;
		case CHANGE_PLACING_STATUS:
			newState.placing.placingStatus = true;
			return newState;
		case CHANGE_PLACING_POSITION:
			newState.placing.position = payload.position;
			return newState;

		default:
			return state;
	}
};
