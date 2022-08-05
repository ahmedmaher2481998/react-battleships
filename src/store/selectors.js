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
export const getSelectedShip = (s) => s.main.slected;
export const getPlacingStatus = (s) => s.main.placing.placingStatus;
export const getIsHit = ({ cells }, cellId) => {
	let hit = cells[cellId]?.hit || false;
	return hit;
};
export const getIsOccupuied = ({ cells }, cellId) => {
	// console.log("this is it " + Object.keys(cells));
	let eccupyObj = cells[cellId]?.occupy || {};
	return eccupyObj;
};
export const getTimeline = ({ main }) => {
	return main.timeLine;
};

export const getCellById = (s, cellId) => s.main.cells[cellId];
export const getPlacingType = (s) => s.main.placing.type;
export const getPlacingPostion = (s) => s.main.placing.postion;
