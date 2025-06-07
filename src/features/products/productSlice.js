import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../../config/config";

//defining async thunk to fetch products from fakestore api
export const fetchProducts = createAsyncThunk(
	"products/fetchProducts",
	async () => {
		const res = await axios.get(config.fakestoreUrl);
		console.log(res.data);
		return res.data;
	}
);

// defining products slice
const productsSlice = createSlice({
	name: "products",
	initialState: {
		allProducts: [], // store fetched products
		status: "idle", //loading status
		error: null, //error message
		searchQuery: "", // filter results by searched keywords
		selectedCategory: "all", //filter by category
		sortOrder: "none", //sort by price
	},
	reducers: {
		setSearchQuery: (state, action) => {
			state.searchQuery = action.payload;
		},
		setSelectedCategory: (state, action) => {
			state.selectedCategory = action.payload;
		},
		setSortedOrder: (state, action) => {
			state.sortOrder = action.payload;
		},
	}, //reducers
	extraReducers: (builder) => {
		builder
			.addCase(fetchProducts.pending, (state, action) => {
				state.status = "loading";
			})
			.addCase(fetchProducts.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.allProducts = action.payload;
			})
			.addCase(fetchProducts.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message;
			});
	}, // handling async thunk
});

export const { setSearchQuery, setSelectedCategory, setSortedOrder } =
	productsSlice.actions;

export default productsSlice.reducer;
