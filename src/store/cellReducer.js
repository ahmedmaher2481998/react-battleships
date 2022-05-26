let initState = {
	cellCol: "0",
	cellRow: "0",
	ocupied: {
		isOcupied: false,
		ocuper: null,
	},
	hit: false,
};

//actions type
const INIT_CELLS = "grid-generation/Create/Cell";
//hit cell , ocupy cell ,
//action creartors
export const initCell = (row, col) => {
	return {
		type: INIT_CELLS,
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
		case INIT_CELLS:
			console.log(payload);
			let newState = { ...state };
			newState[`cell-${payload.cellRow}-${payload.cellCol}`] = {
				...payload,
			};
			return newState;
		default:
			return state;
	}
};
