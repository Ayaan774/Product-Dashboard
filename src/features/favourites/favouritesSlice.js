import { createSlice } from "@reduxjs/toolkit";

const favouriteSlice = createSlice({
	name: "favourites",
	initialState: [], //array of favourite product id's
	reducers: {
		addFavourite: (state, action) => {
			//add product id to favourite if not present
			if (!state.includes(action.payload)) {
				state.push(action.payload);
			}
		},
		removeFavourite: (state, action) => {
			return state.filter((id) => id !== action.payload);
		},
	},
});

export const { addFavourite, removeFavourite } = favouriteSlice.actions;

export default favouriteSlice.reducer;
