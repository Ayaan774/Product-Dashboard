import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";
import ProductCard from "../components/ProductCard";
import SortBar from "../components/SortBar";

function ProductList() {
	//extract product data from store
	const { allProducts, status, searchQuery, selectedCategory, sortOrder } =
		useSelector((state) => state.products);

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
		)
		.sort((a, b) => {
			if (sortOrder === "low-to-high") return a.price - b.price;
			if (sortOrder === "high-to-low") return b.price - a.price;
			return 0;
		});

	return (
		<>
			<SearchBar />
			<FilterBar />
			<SortBar />
			<div className="p-4 flex justify-center">
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-7xl">
					{filteredProducts.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
				</div>
			</div>
		</>
	);
}

export default ProductList;
