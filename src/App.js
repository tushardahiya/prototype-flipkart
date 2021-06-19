import React, { useState } from "react";
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
    if (value === "none") {
      console.log("products:", products);
      console.log("parsedData:", parsedData);
      setProducts(parsedData);
    } else {
      const updatedProducts = products.filter(
        (product) => product.Size === value
      );
      setProducts(updatedProducts);
    }
  };

  const filterByBrand = (value) => {
    if (value === "none") {
      setProducts(parsedData);
    } else {
      const updatedProducts = products.filter(
        (product) => product.Brand === value
      );
      setProducts(updatedProducts);
    }
  };

  const filterBySex = (value) => {
    if (value === "none") {
      setProducts(parsedData);
    } else {
      const updatedProducts = products.filter(
        (product) => product.Sex === value
      );
      setProducts(updatedProducts);
    }
  };

  const resetFilters = () => {
    setProducts(parsedData);
  };

  const handleSortLowToHigh = () => {
    const initProducts = products;

    initProducts.sort(function (a, b) {
      if (a["Price"] < b["Price"]) return -1;
      if (a["Price"] > b["Price"]) return 1;
      return 0;
    });
    setProducts(initProducts);
  };

  const handleSortHighToLow = () => {
    const initProducts = products;

    initProducts.sort(function (a, b) {
      if (a["Price"] > b["Price"]) return -1;
      if (a["Price"] < b["Price"]) return 1;
      return 0;
    });
    setProducts(initProducts);
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
          <button onClick={handleSortHighToLow}>Sort : High to Low</button>
          <button onClick={handleSortLowToHigh}>Sort : Low to High</button>
        </div>
        {products && <Products products={products} />}
      </main>
    </div>
  );
}

export default App;
