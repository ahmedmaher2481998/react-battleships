//actions types
const CHANGE_HEAD_MESSAGE = "main/setHeadMessage";
const SET_PLAYER_NAME = "welcome/setPlayerName";
const SELECT_FLEET_SHIP = "placing/selectShip";
const CHANGE_PLACING_STATUS = "placing/setStatus";
const CHANGE_PLACING_POSITION = "placing/setPosition";
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

const placeShip = (ship) => {
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

export {
	setPlayerName,
	placeShip,
	changePlacingStatus,
	ChangeHeadMessage,
	changePlacingPosition,
	CHANGE_HEAD_MESSAGE,
	CHANGE_PLACING_POSITION,
	CHANGE_PLACING_STATUS,
	SELECT_FLEET_SHIP,
	SET_PLAYER_NAME,
};
