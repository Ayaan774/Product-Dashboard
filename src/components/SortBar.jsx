import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSortedOrder } from "../features/products/productSlice";

function SortBar() {
	const dispatch = useDispatch();
	const sortOrder = useSelector((state) => state.products.sortOrder);

	return (
		<div className="p-4 flex flex-wrap justify-center gap-2 items-center">
			<span className="font-semibold">Sort by price:</span>

			<button
				className={`px-4 py-2 border rounded cursor-pointer ${
					sortOrder === "none"
						? "bg-blue-600 text-white"
						: "bg-white text-black"
				}`}
				onClick={() => dispatch(setSortedOrder("none"))}
			>
				Default
			</button>

			<button
				className={`px-4 py-2 border rounded cursor-pointer ${
					sortOrder === "low-to-high"
						? "bg-blue-600 text-white"
						: "bg-white text-black"
				}`}
				onClick={() => dispatch(setSortedOrder("low-to-high"))}
			>
				Low to High
			</button>

			<button
				className={`px-4 py-2 border rounded cursor-pointer ${
					sortOrder === "high-to-low"
						? "bg-blue-600 text-white"
						: "bg-white text-black"
				}`}
				onClick={() => dispatch(setSortedOrder("high-to-low"))}
			>
				High to Low
			</button>
		</div>
	);
}

export default SortBar;
