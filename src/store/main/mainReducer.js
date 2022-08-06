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
		// name: "",
		// just for development
		name: "ahmed maher ",
	},
	placing: {
		selectedShip: "",
		placingStatus: "start", //start select placed end
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
		default:
			return newState;
	}
};
