import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedCategory } from "../features/products/productSlice";

function FilterBar() {
	const dispatch = useDispatch();
	const categories = [
		"all",
		"electronics",
		"jewelery",
		"men's clothing",
		"women's clothing",
	];
	const selectedCategory = useSelector(
		(state) => state.products.selectedCategory
	);

	return (
		<div className="p-4 flex flex-wrap justify-center gap-2">
			{categories.map((category) => (
				<button
					key={category}
					className={`px-4 py-2 border rounded cursor-pointer font-bold ${
						selectedCategory === category
							? "bg-blue-600 text-white"
							: "bg-white text-black"
					}`}
					onClick={() => dispatch(setSelectedCategory(category))}
				>
					{category}
				</button>
			))}
		</div>
	);
}

export default FilterBar;
