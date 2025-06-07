# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
"# Product-Dashboard" 

🛍️ Product Dashboard
A modern Product Dashboard built with React + Redux Toolkit.

The app fetches products from the Fake Store API, and provides:

✅ Product listing grid
✅ Search with debounce
✅ Category filter
✅ Sort by price
✅ Product detail page
✅ Favorites functionality
✅ Responsive design

🚀 Live Demo
👉 Deployed here (add your link)

🗂️ Project Structure
txt
Copy code
src/
├── app/                # Redux store config
├── components/         # Reusable UI components (FilterBar, SortBar, SearchBar, ProductCard)
├── features/           # Redux slices for products & favorites
├── pages/              # Page components (ProductList, ProductDetail, Favorites)
├── index.css
└── main.jsx

🛠️ Tech Stack
React (functional components + hooks)

Redux Toolkit (state management)

React Router DOM (routing)

Tailwind CSS (styling)

Axios (API calls)

Vite (build tool — fast dev & production builds)

⚙️ Setup Instructions
Prerequisites
Node.js >= 16

npm >= 8

Installation
bash
Copy code
# 1. Clone the repository
git clone https://github.com/your-username/product-dashboard.git

# 2. Move into the project directory
cd product-dashboard

# 3. Install dependencies
npm install react react-dom react-router-dom @reduxjs/toolkit react-redux axios dotenv --save


# 4. Start the development server
npm run dev
👉 App will be running at: http://localhost:5173

✨ Features
Responsive product grid

Debounced search by product title

Category filtering

Sort by price (Low to High / High to Low)

Product detail view with description & "Add to Favorites"

Manage favorites in Redux

Favorites page to view & remove favorites

Routing with React Router

Accessible UI (basic keyboard & screen-reader support)

📋 Notes
Products are fetched from Fake Store API

Favorites are stored in Redux (not persisted — can be improved with localStorage)

Responsive design works across desktop, tablet, and mobile

Project is configured for fast builds using Vite

💻 Author
Ayaan Sayed

🏆 License
This project is open-source — feel free to fork and use!
