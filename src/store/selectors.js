import { generateCellId } from "../helpers/helpers";

export const getName = (state) => {
	let name =
		state.main.player.name === "" ? "player 1" : state.main.player.name;
	return name;
};
export const getHeadMessage = (state) => {
	const msg = state.main.headMessage || " ";
	return msg;
};
export const getSelectedShip = (s) => s.main.selectedShip;
export const getPlacingStatus = (s) => s.main.placing.placingStatus;
export const getIsHit = ({ cells }, cellId) => {
	let hit = cells[cellId]?.hit || false;
	return hit;
};
export const getIsOccupied = ({ cells }, cellId) => {
	// console.log("this is it " + Object.keys(cells));
	let occupyObj = cells[cellId]?.occupy || {};
	return occupyObj;
};
export const getTimeline = ({ main }) => {
	return main.timeLine;
};

export const getCellById = (s, cellId) => s.main.cells[cellId];
export const getPlacingType = (s) => s.main.placing.type;
export const getPlacingPosition = (s) => s.main.placing.position;
