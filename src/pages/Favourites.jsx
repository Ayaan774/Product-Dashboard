import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeFavourite } from "../features/favourites/favouritesSlice";

function Favourites() {
	const favourites = useSelector((state) => state.favourites);
	const allProducts = useSelector((state) => state.products.allProducts);
	const dispatch = useDispatch();

	//Filter out favourite products
	const favouriteProducts = allProducts.filter((product) =>
		favourites.includes(product.id)
	);

	if (favouriteProducts.length === 0)
		return (
			<div className="p-4 font-bold text-xl">No favourites yet...</div>
		);

	return (
		<div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
			{favouriteProducts.map((product) => (
				<div
					className="border p-4 rounded shadow relative hover:shadow-lg transition"
					key={product.id}
				>
					<Link to={`/product/${product.id}`}>
						<img
							src={product.image}
							alt={product.title}
							className="h-40 mx-auto"
						/>
						<h2 className="text-lg font-semibold mt-2">
							{product.title}
						</h2>
						<p className="text-gray-700">${product.price}</p>
					</Link>

					<button
						className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded"
						onClick={() => dispatch(removeFavourite(product.id))}
					>
						Remove
					</button>
				</div>
			))}
		</div>
	);
}

export default Favourites;
