let initState = {
	cellCol: "0",
	cellRow: "0",
	ocupied: false,
	hit: false,
};
//actions type
const INIT_CELL = "grid-generation/Create/Cell";
//action creartors
export const initCell = (row, col) => {
	return {
		type: INIT_CELL,
		payload: {
			...initState,
			cellCol: col,
			cellRow: row,
		},
	};
};
//reducers
export const cellReducer = (state = {}, { type, payload }) => {
	switch (type) {
		case INIT_CELL:
			let newState = { ...state };
			newState[`cell-${payload.row}-${payload.col}`] = { ...payload };
			console.log(newState);
			return newState;
		default:
			return state;
	}
};
