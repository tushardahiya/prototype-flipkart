import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar.js/Navbar";
import Products from "./Components/Products/Products";
import Sidebar from "./Components/Sidebar.js/Sidebar";
import Data from "./data/products.json";

//gives me array of objects with each object being a product
const stringData = JSON.stringify(Data);
const parsedData = JSON.parse(stringData);

function App() {
  const [products, setProducts] = useState(parsedData);

  const filterBySize = (value) => {
    const updatedProducts = parsedData.filter(
      (product) => product.Size === value
    );
    setProducts(updatedProducts);
  };

  const filterByBrand = (value) => {
    const updatedProducts = parsedData.filter(
      (product) => product.Brand === value
    );
    setProducts(updatedProducts);
  };

  const filterBySex = (value) => {
    const updatedProducts = parsedData.filter(
      (product) => product.Sex === value
    );
    setProducts(updatedProducts);
  };

  const resetFilters = () => {
    setProducts(parsedData);
  };

  return (
    <div className="App">
      <Navbar />
      <Sidebar
        byBrand={filterByBrand}
        bySex={filterBySex}
        bySize={filterBySize}
        resetAllFilters={resetFilters}
      />
      <main>
        <div className="sort-container">
          <button>Sort : High to Low</button>
          <button>Sort : Low to High</button>
        </div>
        {products && <Products products={products} />}
      </main>
    </div>
  );
}

export default App;
