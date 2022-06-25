import { generateCellId } from "../helpers/helpers";
export const getName = (state) => state.main.player.name;
export const getHeadMessage = (state) => {
	const msg = state.main.headMessage || " ";
	return msg;
};
export const getSelectedShip = (s) => s.main.slected;
export const getPlacingStatus = (s) => s.main.placingStatus;
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
