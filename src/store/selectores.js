export const getHeadMessage = (state) => {
	const msg = state.main.headMessage || " ";
	return msg;
};
