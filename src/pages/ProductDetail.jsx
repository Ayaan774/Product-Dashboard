import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addFavourite } from "../features/favourites/favouritesSlice";

function ProductDetail() {
	const { id } = useParams();
	//get the product using the id
	const product = useSelector((state) =>
		state.products.allProducts.find((prod) => prod.id === parseInt(id))
	);
	const dispatch = useDispatch();

	if (!product) return <div>Product not found!!!</div>;

	return (
		<div className="flex items-center justify-center min-h-screen p-4">
			<div className="max-w-lg md:max-w-2xl border-2 border-black rounded-2xl p-4">
				<img
					src={product.image}
					alt={product.title}
					className="h-60 mx-auto"
				/>
				<h1 className="text-2xl font-bold mt-8 text-center">
					{product.title}
				</h1>
				<p className="text-gray-700 text-center mt-8">
					{product.description}
				</p>
				<p className="text-xl font-semibold mt-4 text-center">
					Price: ${product.price}
				</p>

				<button
					className="mt-4 bg-blue-600 text-white px-4 py-2 rounded cursor-pointer ml-60"
					onClick={() => {
						dispatch(addFavourite(product.id));
						alert("Product added to favourites successfully");
					}}
				>
					Add to Favourites
				</button>
			</div>
		</div>
	);
}

export default ProductDetail;
