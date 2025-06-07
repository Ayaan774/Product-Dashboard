import favouritesReducer, {
	addFavourite,
	removeFavourite,
} from "./favouritesSlice";

describe("favouritesSlice", () => {
	const initialState = [];

	it("should handle initial state", () => {
		expect(favouritesReducer(undefined, { type: "unknown" })).toEqual([]);
	});

	it("should handle addFavourite", () => {
		const state = favouritesReducer(initialState, addFavourite(1));
		expect(state).toEqual([1]);
	});

	it("should not add duplicate favourites", () => {
		const state = favouritesReducer([1], addFavourite(1));
		expect(state).toEqual([1]);
	});

	it("should handle adding multiple favourites", () => {
		let state = favouritesReducer(initialState, addFavourite(1));
		state = favouritesReducer(state, addFavourite(2));
		expect(state).toEqual([1, 2]);
	});

	it("should handle removeFavourite", () => {
		const state = favouritesReducer([1, 2, 3], removeFavourite(2));
		expect(state).toEqual([1, 3]);
	});

	it("should handle removeFavourite when item is not in list", () => {
		const state = favouritesReducer([1, 2, 3], removeFavourite(4));
		expect(state).toEqual([1, 2, 3]);
	});
});
