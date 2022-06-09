export const getHeadMessage = (state) => {
	const msg = state.main.headMessage || " ";
	return msg;
};
export const getSelectedShip = (s) => s.main.slected;
export const getPlacingStatus = (s) => s.main.placingStatus;
