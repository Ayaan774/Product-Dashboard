import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//defining async thunk to fetch products from fakestore api
export const fetchProducts = createAsyncThunk(
	"products/fetchProducts",
	async () => {
		const res = await axios.get("https://fakestoreapi.com/products");
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
		searchQuery: "",
		selectedCategory: "all",
	},
	reducers: {
		setSearchQuery: (state, action) => {
			state.searchQuery = action.payload;
		},
		setSelectedCategory: (state, action) => {
			state.selectedCategory = action.payload;
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

export const { setSearchQuery, setSelectedCategory } = productsSlice.actions;

export default productsSlice.reducer;
