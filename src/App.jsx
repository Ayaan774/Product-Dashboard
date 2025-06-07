import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import { fetchProducts } from "./features/products/productSlice";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";
import Favourites from "./pages/Favourites";

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		//Fetch products when app loads
		dispatch(fetchProducts());
	}, [dispatch]);

	return (
		<Router>
			<nav className="p-4 bg-gray-800 text-white flex gap-10 justify-center font-bold text-xl  ">
				<Link to="/" className="hover:text-blue-400 cursor-pointer">
					Home
				</Link>
				<Link
					to="/favourites"
					className="hover:text-blue-400 cursor-pointer"
				>
					Favourites
				</Link>
			</nav>

			{/* App routes  */}

			<Routes>
				<Route path="/" element={<ProductList />} />
				<Route path="/product/:id" element={<ProductDetail />} />
				<Route path="/favourites" element={<Favourites />} />
			</Routes>
		</Router>
	);
}

export default App;
