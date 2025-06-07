import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";
import ProductCard from "../components/ProductCard";

function ProductList() {
	//extract product data from store
	const { allProducts, status, searchQuery, selectedCategory } = useSelector(
		(state) => state.products
	);

	if (status === "loading") return <div>Loading...</div>;

	if (status === "failed") return <div>Error while loading products...</div>;

	const filteredProducts = allProducts
		.filter(
			(product) =>
				selectedCategory === "all" ||
				product.category === selectedCategory
		)
		.filter((product) =>
			product.title.toLowerCase().includes(searchQuery.toLowerCase())
		);

	return (
		<>
			<SearchBar />
			<FilterBar />
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4">
				{filteredProducts.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>
		</>
	);
}

export default ProductList;
