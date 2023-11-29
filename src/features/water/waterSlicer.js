import { createSlice } from "@reduxjs/toolkit";

/* The code is defining a Redux slice for managing the state of a water tracker application. */
const initialState = {
	logs: [],
};


export const waterSlice = createSlice({
	name: "water",
	initialState,
	reducers: {
		ADD_LOG: (state, action) => {
			const date = new Date();
			const log = {
				date: date.toLocaleString(),
				waterAmount: action.payload.amount,
				unit: action.payload.unit,
				id: state.logs.length,
			};
			return { ...state, logs: [...state.logs, log] };
		},
		DELETE_LOG: (state, action) => {
			const updatedLog = state.logs.filter((log) => log.id !== action.payload.id);
			return { ...state, logs: updatedLog };
		},
		EDIT_LOG: (state, action) => {
			const { id, log: updatedLog } = action.payload;
			const updatedLogs = state.logs.map((log) => {
				if (log.id === id) {
					return { ...log, ...updatedLog };
				}
				return log;
			});
			return {
				...state,
				logs: updatedLogs,
			};
		},
	},
});


export const { ADD_LOG, DELETE_LOG, EDIT_LOG } = waterSlice.actions;
export default waterSlice.reducer;
