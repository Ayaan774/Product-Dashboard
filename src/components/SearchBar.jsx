import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery } from "../features/products/productSlice";

function SearchBar() {
	const dispatch = useDispatch();
	const searchQuery = useSelector((state) => state.products.searchQuery);

	return (
		<div className="p-4">
			<input
				type="text"
				value={searchQuery}
				onChange={(e) => dispatch(setSearchQuery(e.target.value))}
				placeholder="Search products..."
				className="w-full p-2 border-2 rounded-lg"
			/>
		</div>
	);
}

export default SearchBar;
