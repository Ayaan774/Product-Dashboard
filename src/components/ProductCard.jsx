import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
	return (
		<Link
			to={`/product/${product.id}`}
			className="border p-4 rounded shadow hover:shadow-lg transition"
		>
			<img
				src={product.image}
				alt={product.title}
				className="h-40 mx-auto"
			/>
			<h2 className="text-lg font-semibold mt-2">{product.title}</h2>
			<p className="text-gray-700 font-bold">${product.price}</p>
		</Link>
	);
}

export default ProductCard;
