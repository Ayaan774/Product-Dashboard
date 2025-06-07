import productsReducer, {
	setSearchQuery,
	setSelectedCategory,
	setSortedOrder,
	fetchProducts,
} from "./productSlice";

describe("productSlice", () => {
	const initialState = {
		allProducts: [],
		status: "idle",
		error: null,
		searchQuery: "",
		selectedCategory: "all",
		sortOrder: "none",
	};

	it("should handle initial state", () => {
		expect(productsReducer(undefined, { type: "unknown" })).toEqual(
			initialState
		);
	});

	it("should handle setSearchQuery", () => {
		const actual = productsReducer(initialState, setSearchQuery("shirt"));
		expect(actual.searchQuery).toEqual("shirt");
	});

	it("should handle setSelectedCategory", () => {
		const actual = productsReducer(
			initialState,
			setSelectedCategory("electronics")
		);
		expect(actual.selectedCategory).toEqual("electronics");
	});

	it("should handle setSortedOrder", () => {
		const actual = productsReducer(
			initialState,
			setSortedOrder("low-to-high")
		);
		expect(actual.sortOrder).toEqual("low-to-high");
	});

	it("should handle fetchProducts.pending", () => {
		const action = { type: fetchProducts.pending.type };
		const state = productsReducer(initialState, action);
		expect(state.status).toEqual("loading");
	});

	it("should handle fetchProducts.fulfilled", () => {
		const action = {
			type: fetchProducts.fulfilled.type,
			payload: [{ id: 1, title: "Product 1" }],
		};
		const state = productsReducer(initialState, action);
		expect(state.status).toEqual("succeeded");
		expect(state.allProducts).toEqual([{ id: 1, title: "Product 1" }]);
	});

	it("should handle fetchProducts.rejected", () => {
		const action = {
			type: fetchProducts.rejected.type,
			error: { message: "API failed" },
		};
		const state = productsReducer(initialState, action);
		expect(state.status).toEqual("failed");
		expect(state.error).toEqual("API failed");
	});
});
